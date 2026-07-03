#!/usr/bin/env node

const { spawn, spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "out");
const adsDir = path.join(outDir, "whatsapp-ads");
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 4177;
const templates = [
  "ba-wa-ingenieria-derecho",
  "ba-wa-derecho-empresa",
];

function run(command, args, options = {}) {
  console.log(`\n> ${[command, ...args].join(" ")}`);
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    ...options,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForFile(filePath, timeoutMs = 30000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
      return;
    }

    await wait(500);
  }

  throw new Error(`Timed out waiting for ${filePath}`);
}

async function captureTemplate(slug) {
  const pngPath = path.join(adsDir, `${slug}-2160x2700.png`);
  const jpgPath = path.join(adsDir, `${slug}-2160x2700.jpg`);
  const profileDir = path.join("/tmp", `${slug}-chrome-profile`);
  const url = `http://127.0.0.1:${port}/${slug}.html`;

  fs.rmSync(pngPath, { force: true });
  fs.rmSync(jpgPath, { force: true });
  fs.rmSync(profileDir, { recursive: true, force: true });

  const chrome = spawn(
    chromePath,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--disable-background-networking",
      "--disable-component-update",
      "--disable-sync",
      "--no-first-run",
      "--no-default-browser-check",
      "--force-device-scale-factor=2",
      "--window-size=1080,1350",
      `--user-data-dir=${profileDir}`,
      `--screenshot=${pngPath}`,
      url,
    ],
    { cwd: root, stdio: ["ignore", "pipe", "pipe"] },
  );

  chrome.stdout.on("data", (chunk) => process.stdout.write(chunk));
  chrome.stderr.on("data", (chunk) => process.stderr.write(chunk));

  try {
    await waitForFile(pngPath);
  } finally {
    chrome.kill("SIGTERM");
  }

  run("sips", [
    "-s",
    "format",
    "jpeg",
    "-s",
    "formatOptions",
    "95",
    pngPath,
    "--out",
    jpgPath,
  ]);

  const metadata = spawnSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", jpgPath], {
    cwd: root,
    encoding: "utf8",
  });

  if (!metadata.stdout.includes("pixelWidth: 2160") || !metadata.stdout.includes("pixelHeight: 2700")) {
    throw new Error(`Unexpected dimensions for ${jpgPath}\n${metadata.stdout}`);
  }

  console.log(`Exported ${path.relative(root, jpgPath)}`);
}

async function main() {
  if (!fs.existsSync(chromePath)) {
    throw new Error(`Google Chrome was not found at ${chromePath}`);
  }

  run("npm", ["run", "build"]);
  run("npm", ["run", "export", "--", "--pretty"]);

  fs.mkdirSync(adsDir, { recursive: true });

  const server = spawn("python3", ["-m", "http.server", String(port), "--directory", outDir], {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
  });

  server.stdout.on("data", (chunk) => process.stdout.write(chunk));
  server.stderr.on("data", (chunk) => process.stderr.write(chunk));

  try {
    await wait(1000);

    for (const slug of templates) {
      await captureTemplate(slug);
    }
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
