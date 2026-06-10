#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const VALID_ACTIONS = new Set(["start", "end"]);
const [, , action, ...messageParts] = process.argv;
const message = messageParts.join(" ").trim();

if (!VALID_ACTIONS.has(action) || !message) {
  console.error('Usage: node scripts/agent-log.js <start|end> "action"');
  process.exit(1);
}

const logPath = path.resolve(__dirname, "..", "LOG.md");
const heading = "# Agent Log\n\n<!-- Entries are appended by scripts/agent-log.js. -->\n";
const existing = fs.existsSync(logPath) ? fs.readFileSync(logPath, "utf8") : heading;
const entryPattern = /^- \[[^\]]+\] (START|END): (.+)$/gm;
let lastEntry = null;
let match;

while ((match = entryPattern.exec(existing)) !== null) {
  lastEntry = { action: match[1].toLowerCase(), message: match[2] };
}

if (lastEntry?.action === action && lastEntry.message === message) {
  console.log("Duplicate consecutive entry skipped.");
  process.exit(0);
}

const separator = existing.endsWith("\n") ? "" : "\n";
const timestamp = new Date().toISOString();
fs.writeFileSync(
  logPath,
  `${existing}${separator}- [${timestamp}] ${action.toUpperCase()}: ${message}\n`,
  "utf8",
);

console.log(`Logged ${action}: ${message}`);

