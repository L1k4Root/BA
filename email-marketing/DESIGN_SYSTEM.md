Design System — Bright Alliance | BA Chile
Versión: 0.1
Referencia visual: flyer frontal y reverso proporcionado
Uso recomendado: web bachile.cl, landing pages, mailing, presentaciones comerciales, flyers, documentos PDF y piezas corporativas.

1. Principio rector de marca
Bright Alliance | BA Chile debe comunicar una asesoría jurídico-estratégica, técnica, sobria y confiable, orientada a empresas de ingeniería, construcción, minería, energía, infraestructura y servicios industriales.

La marca no debe verse como un estudio legal genérico ni como una consultora creativa. Debe verse como una firma especializada que entiende contratos, riesgos, proyectos, operación y controversias.

Atributos visuales principales
Atributo	Cómo se expresa visualmente
Sobriedad	Paleta controlada, alto contraste, pocos efectos.
Especialización	Mensajes concretos, lenguaje técnico claro, estructura ordenada.
Confianza	Uso dominante de azul profundo, espacios amplios, jerarquía fuerte.
Premium conservador	Dorado como acento, composición editorial, logo con peso visual.
Precisión	Retículas limpias, alineaciones consistentes, bloques bien definidos.
Qué evitar
Gradientes excesivos o colores saturados.
Ilustraciones genéricas de abogados, martillos, balanzas o edificios corporativos sin intención.
Textos grandilocuentes tipo “transformamos tu negocio” sin evidencia.
Exceso de íconos, sombras pesadas o efectos de moda.
Diseño demasiado tecnológico que pierda seriedad jurídica.
2. Paleta de color
La paleta se basa en el flyer: azul corporativo profundo, blanco cálido, dorado sobrio y grises neutros.

Colores principales
Token	Color	HEX	Uso
--ba-navy-900	Azul corporativo profundo	#102F4B	Fondos principales, bloques premium, headers, footer.
--ba-navy-800	Azul oscuro secundario	#163A5A	Hover, cards oscuras, barras internas.
--ba-navy-700	Azul editorial	#1F4664	Cajas destacadas, separadores sobre azul.
--ba-gold-500	Dorado institucional	#B39259	Acentos, numeración, líneas, bullets, íconos.
--ba-gold-400	Dorado claro	#DDB363	Detalles sobre azul oscuro, estados destacados.
--ba-white	Blanco puro	#FFFFFF	Fondos limpios, texto sobre azul.
--ba-offwhite	Blanco cálido	#F6F6F4	Fondos principales alternativos, zonas editoriales.
--ba-gray-700	Gris texto	#575754	Texto largo sobre fondo claro.
--ba-gray-500	Gris medio	#A9ABAB	Texto secundario, metadatos, líneas suaves.
--ba-gray-200	Gris claro	#DCDCDA	Separadores, patrones, bordes sutiles.
--ba-charcoal	Fondo auxiliar oscuro	#414243	Mockups, fondos externos, piezas de presentación.
Variables CSS sugeridas
:root {
  --ba-navy-900: #102F4B;
  --ba-navy-800: #163A5A;
  --ba-navy-700: #1F4664;
  --ba-gold-500: #B39259;
  --ba-gold-400: #DDB363;
  --ba-white: #FFFFFF;
  --ba-offwhite: #F6F6F4;
  --ba-gray-700: #575754;
  --ba-gray-500: #A9ABAB;
  --ba-gray-200: #DCDCDA;
  --ba-charcoal: #414243;
}
Proporción recomendada de uso
Color	Proporción aproximada
Azul corporativo	40%
Blanco / blanco cálido	40%
Gris texto / gris claro	15%
Dorado	5%
El dorado debe funcionar como acento estratégico, no como color dominante.

3. Tipografía
El flyer usa una combinación visual de sans serif geométrica/moderna para textos y títulos, con logo serif propietario. Para digital, se recomienda usar familias web seguras y sobrias.

Familias recomendadas
Rol	Tipografía recomendada	Alternativas
Títulos / headings	Montserrat	Poppins, Avenir Next, Gotham, Inter Tight
Texto / párrafos	Inter	Aptos, Lato, Source Sans 3
Números destacados	Montserrat ExtraBold	Poppins Bold, Inter Black
Logo	Usar archivo oficial	No recrear con tipografía editable.
Escala tipográfica web
Token	Tamaño	Line-height	Peso	Uso
display-xl	56px	1.05	800	Hero principal desktop.
display-lg	44px	1.1	800	Títulos principales.
heading-xl	36px	1.15	800	Secciones clave.
heading-lg	28px	1.2	700	Bloques de servicio.
heading-md	22px	1.25	700	Subtítulos, cards.
body-lg	20px	1.55	400	Bajadas principales.
body-md	17px	1.6	400	Párrafos generales.
body-sm	15px	1.55	400	Detalles, footer, labels.
label	14px	1.2	700	Categorías, chips, navegación.
Reglas tipográficas
Títulos principales en mayúsculas, peso alto y color azul corporativo o blanco.
Evitar párrafos demasiado anchos. Ancho óptimo: 52–68 caracteres por línea.
Usar dorado para numeración, pequeñas líneas y categorías, no para párrafos completos.
En textos jurídicos/comerciales, priorizar claridad sobre adornos.
4. Tono de comunicación
Voz de marca
Sobria, técnica, estratégica y precisa.

BA Chile debe sonar como una firma que acompaña decisiones relevantes, contratos complejos y conflictos de alto impacto. La comunicación debe reducir incertidumbre, no inflar promesas.

Fórmula de redacción recomendada
Problema operativo/legal → enfoque técnico-jurídico → resultado esperable.

Ejemplo:

Acompañamos el ciclo completo de proyectos, desde la preparación contractual hasta la ejecución, gestión de riesgos, controversias y cierre.

Palabras compatibles
Asesoría jurídico-estratégica
Soporte técnico-legal
Gestión contractual
Prevención de riesgos
Cumplimiento contractual
Ingeniería forense
Resolución de controversias
Protección patrimonial
Acompañamiento permanente
Visión de negocio
Criterio técnico
Palabras a evitar o usar con cuidado
Revolucionario
Disruptivo
360°
Escalamiento exponencial
Inteligencia legal de clase mundial
Solución definitiva
Éxito garantizado
Abogados expertos en todo
5. Sistema de layout
Retícula base
Usar sistema de 12 columnas en web y una grilla de 8px para espaciado.

--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
Contenedores web
Contenedor	Ancho máximo	Uso
container-sm	760px	Texto largo, artículos, contenido legal.
container-md	1040px	Secciones normales.
container-lg	1200px	Homepage, servicios, grillas.
container-xl	1320px	Hero amplio, layouts premium.
Patrón visual principal
El flyer trabaja con una composición clara:

Bloque claro con identidad, título y bajada.
Bloque azul oscuro con contenido principal.
Línea diagonal dorada como transición visual.
Numeración dorada de gran tamaño.
Cajas de sección con fondo azul secundario.
Bullets tipo rombo dorado.
Patrón de puntos sutil como textura.
Este patrón puede convertirse en lenguaje visual para web, mailing y documentos.

6. Elementos gráficos
Línea diagonal dorada
Uso: separar áreas claras y oscuras, especialmente en hero, flyers o banners.

Reglas:

Grosor recomendado web: 3–6px.
Grosor recomendado print: 1.5–3mm.
Usar solo una diagonal principal por composición.
No abusar en cards pequeñas.
Patrón de puntos
Uso: textura secundaria para evitar fondos planos.

Reglas:

Color: gris claro sobre fondo blanco o azul más claro sobre navy.
Opacidad: 12–25%.
No debe competir con el texto.
Ubicar en esquinas o zonas vacías.
Bullets tipo rombo
Usar en listas de servicios, ámbitos de asesoría y beneficios.

.ba-list li::before {
  content: "◆";
  color: var(--ba-gold-400);
  font-size: 0.75em;
  margin-right: 12px;
}
Barras de categoría
Uso: encabezados internos como “Ámbitos de asesoría”, “Servicios”, “Etapas”, “Especialidades”.

Características:

Fondo: --ba-navy-700 sobre bloque azul.
Línea izquierda dorada.
Texto uppercase, dorado, peso 700.
Padding amplio.
7. Componentes UI
7.1 Header web
Desktop
Fondo blanco o azul navy según contexto.
Logo a la izquierda.
Navegación clara a la derecha.
CTA discreto: “Agendar reunión” o “Contactar”.
Altura recomendada: 80–96px.
Mobile
Logo visible y no excesivamente pequeño.
Menú hamburguesa simple.
CTA puede ir dentro del menú.
Reglas
No reducir el logo al punto de perder lectura.
Evitar navegación con demasiadas opciones.
Priorizar: Inicio, Servicios, Ingeniería y Derecho, Derecho de la Empresa, Contacto.
7.2 Hero principal
Estructura recomendada
Fondo dividido: blanco cálido + azul corporativo.
Título fuerte en mayúsculas.
Bajada breve y concreta.
CTA principal.
CTA secundario opcional.
Elemento diagonal dorado o línea de acento.
Ejemplo de contenido
Título:
Soluciones especializadas en ingeniería y derecho

Bajada:
Asesoría jurídico-estratégica para empresas de ingeniería, construcción, minería, energía e infraestructura, combinando criterio legal, visión de negocio y comprensión técnica.

CTA principal:
Solicitar asesoría

CTA secundario:
Ver áreas de especialidad

7.3 Botones
Botón primario
Uso para acciones principales.

.ba-button-primary {
  background: var(--ba-gold-500);
  color: var(--ba-navy-900);
  font-weight: 700;
  border-radius: 2px;
  padding: 14px 22px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.ba-button-primary:hover {
  background: var(--ba-gold-400);
}
Botón secundario
.ba-button-secondary {
  background: transparent;
  color: var(--ba-white);
  border: 1px solid rgba(255,255,255,0.55);
  font-weight: 700;
  border-radius: 2px;
  padding: 14px 22px;
}

.ba-button-secondary:hover {
  border-color: var(--ba-gold-400);
  color: var(--ba-gold-400);
}
Botón sobre fondo claro
.ba-button-outline-dark {
  background: transparent;
  color: var(--ba-navy-900);
  border: 1px solid var(--ba-navy-900);
  font-weight: 700;
  border-radius: 2px;
  padding: 14px 22px;
}
Reglas de uso
No usar botones redondeados tipo pill excesivo.
No usar más de dos CTAs en una misma sección.
El CTA debe ser concreto: “Solicitar asesoría”, “Agendar reunión”, “Ver servicios”.
7.4 Cards de servicio
Card clara
Uso: servicios sobre fondo blanco/offwhite.

.ba-card-light {
  background: var(--ba-white);
  border: 1px solid var(--ba-gray-200);
  padding: 32px;
  border-radius: 0;
}
Elementos:

Número o ícono en dorado.
Título azul navy uppercase o title case fuerte.
Descripción gris.
Lista breve de alcances.
Card oscura
Uso: destacar servicios críticos o secciones premium.

.ba-card-dark {
  background: var(--ba-navy-900);
  color: var(--ba-white);
  padding: 32px;
  border-left: 4px solid var(--ba-gold-500);
}
7.5 Bloque de servicio numerado
Inspirado en el flyer.

Estructura
<section class="ba-numbered-service">
  <div class="ba-number">1.</div>
  <div>
    <h3>Ciclo de vida completo de proyectos</h3>
    <p>Acompañamiento integral desde la preparación inicial hasta el cierre contractual.</p>
  </div>
</section>
Reglas
Número grande en dorado.
Título fuerte en azul o dorado según fondo.
Texto descriptivo máximo 3–5 líneas.
Lista de alcances debajo si aplica.
7.6 Listas de asesoría
Uso
Para enumerar ámbitos, etapas, riesgos o servicios.

Formato visual
Bullet rombo dorado.
Texto blanco sobre azul o gris sobre blanco.
Espaciado vertical amplio.
No más de 9 ítems por bloque.
Ejemplo:

Procesos de licitación
Revisión y negociación de contratos
Gestión estratégica de riesgos
Soporte técnico-legal en ejecución
Cumplimiento contractual
Ingeniería forense
Reclamos, incumplimientos y multas
Litigación y resolución de disputas
Cierre contractual
7.7 Bloque de contacto
Inspirado en el reverso del flyer.

Elementos
Logo en versión blanca sobre azul navy.
QR o enlace directo.
Web.
Email.
Teléfono.
Dirección.
Separador fino en azul claro o blanco con opacidad.
Reglas
Mantener alta legibilidad.
Íconos lineales en dorado.
No saturar con demasiados datos.
En mobile, mostrar datos como botones clicables.
Ejemplo:

www.bachile.cl
contacto@bachile.cl
+56 9 3100 7417
Apoquindo 3076, Of. 702, El Golf, Las Condes, Santiago, Chile
7.8 Footer web
Estructura recomendada
Columnas:

Logo + bajada breve.
Servicios.
Contacto.
Legal / redes / ubicación.
Estilo
Fondo: --ba-navy-900.
Texto: blanco con opacidad 80–90%.
Links: blanco; hover dorado.
Separadores: blanco con opacidad 12–18%.
8. Sistema de iconografía
Estilo
Íconos lineales, sobrios, sin rellenos complejos.
Grosor consistente: 1.5px–2px.
Color principal: dorado sobre azul, navy sobre blanco.
Íconos permitidos
Documento / contrato
Escudo / protección
Gráfico de riesgo
Edificio / empresa
Teléfono
Email
Ubicación
Web
Check / rombo
Íconos a evitar
Martillo de juez como símbolo principal.
Balanza genérica como recurso dominante.
Íconos 3D.
Ilustraciones cartoon.
9. Fotografía e imágenes
Dirección visual
Usar imágenes corporativas sobrias asociadas a:

Infraestructura.
Minería.
Energía.
Construcción.
Equipos técnicos.
Reuniones ejecutivas reales.
Detalles de documentos, planos, contratos y obra.
Tratamiento
Overlay azul navy con opacidad 40–70%.
Acentos dorados mediante líneas o marcos.
Evitar stock demasiado evidente.
Preferir encuadres limpios, técnicos y con escala.
No usar
Fotos de abogados posando con brazos cruzados sin contexto.
Imágenes de oficina genérica sin relación industrial.
Personas sonriendo exageradamente tipo banco/retail.
Fotos con exceso de color o saturación.
10. Diseño para mailing
Ancho recomendado
Desktop email: 600–680px.
Mobile: 100% responsive.
Estructura sugerida
Header con logo.
Hero con título y bajada.
Bloque de problema/contexto.
Servicios o ámbitos de asesoría.
Diferencial técnico-jurídico.
CTA.
Firma/contacto.
Reglas para email HTML
Usar layout de tablas o framework compatible.
No depender de CSS avanzado para formas diagonales críticas.
Evitar texto sobre imagen cuando sea información esencial.
Usar botones HTML reales, no solo imágenes.
Mantener el dorado como acento.
Alto contraste en mobile.
11. Diseño para documentos y PDF
Portadas
Fondo dividido blanco/azul.
Logo grande.
Título en mayúsculas.
Línea dorada horizontal o diagonal.
Bajada breve.
Páginas interiores
Títulos azul navy.
Subtítulos con línea dorada.
Tablas sobrias con bordes grises.
Bloques destacados en azul oscuro.
Numeración dorada para secciones principales.
Reglas
No usar más de dos pesos tipográficos por página.
Mantener márgenes amplios.
Usar bullets rombo solo en listas comerciales; en documentos legales, bullets simples si mejora la lectura.
12. Accesibilidad
Contraste
Combinaciones seguras:

Texto blanco sobre #102F4B.
Texto navy sobre blanco/offwhite.
Dorado solo para acentos o títulos grandes, no para texto pequeño sobre blanco.
Tamaños mínimos
Elemento	Mínimo recomendado
Texto web body	16px
Texto mobile body	16px
Label / metadata	13px
Botones	44px de alto mínimo
Links táctiles	44px de área activa
Reglas
No depender solo del color para comunicar estado.
Mantener foco visible en navegación por teclado.
No justificar texto largo en web; dificulta lectura.
13. Responsive
Breakpoints sugeridos
--bp-sm: 480px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
Reglas mobile
Convertir layouts divididos en una sola columna.
Reducir diagonales complejas o reemplazarlas por líneas doradas verticales/horizontales.
Evitar párrafos largos bajo títulos grandes.
Logo suficientemente grande para lectura.
CTA visible antes del primer scroll cuando sea landing comercial.
14. Aplicación a homepage bachile.cl
Orden recomendado de secciones
Hero: Soluciones especializadas en ingeniería y derecho.
Problema que resuelve: riesgos contractuales, ejecución, controversias, cumplimiento.
Áreas principales: Ingeniería y Derecho / Derecho de la Empresa.
Ciclo de vida del proyecto: preparación, contratación, ejecución, controversias, cierre.
Servicios destacados: departamento jurídico externo, protección patrimonial, soporte técnico-legal.
Diferencial: combinación de conocimiento legal, visión de negocio y comprensión técnica.
Sectores atendidos: minería, energía, construcción, infraestructura, servicios industriales.
CTA de contacto: solicitar reunión o diagnóstico inicial.
Footer: datos de contacto, ubicación, enlaces.
Prioridad UX
El sitio debe responder rápido:

Qué hace BA Chile.
Para quién trabaja.
En qué problemas concretos ayuda.
Por qué su enfoque es distinto.
Cómo contactar.
15. Aplicación a páginas de servicio
Template recomendado
Hero del servicio.
Descripción breve.
Cuándo aplica.
Ámbitos de asesoría.
Proceso de trabajo.
Riesgos que ayuda a reducir.
CTA.
Servicios relacionados.
Ejemplo: Ingeniería y Derecho
Título:
Ingeniería y Derecho

Bajada:
Acompañamiento técnico-legal para empresas que desarrollan, ejecutan o administran proyectos complejos en sectores industriales, mineros, energéticos e infraestructura.

Bloques:

Procesos de licitación.
Revisión y negociación contractual.
Gestión de riesgos.
Soporte en ejecución.
Reclamos, controversias y cierre contractual.
Ejemplo: Derecho de la Empresa
Título:
Derecho de la Empresa

Bajada:
Asesoría legal continua para empresas que requieren ordenar su estructura jurídica, prevenir contingencias y acompañar decisiones societarias, contractuales y operativas.

Bloques:

Departamento jurídico externo.
Protección patrimonial.
Contratos comerciales.
Cumplimiento normativo.
Prevención de contingencias.
16. Motion y microinteracciones
Usar movimiento solo si refuerza claridad y percepción premium.

Permitido
Fade-in sutil en secciones.
Hover dorado en links.
Transición suave en botones.
Aparición progresiva de cards.
Evitar
Animaciones largas.
Parallax intenso.
Movimiento constante en fondos.
Efectos que distraigan del contenido.
.ba-transition {
  transition: all 180ms ease-out;
}
17. Tokens rápidos para Tailwind
export const baTheme = {
  colors: {
    navy: {
      900: '#102F4B',
      800: '#163A5A',
      700: '#1F4664',
    },
    gold: {
      500: '#B39259',
      400: '#DDB363',
    },
    gray: {
      700: '#575754',
      500: '#A9ABAB',
      200: '#DCDCDA',
    },
    offwhite: '#F6F6F4',
    white: '#FFFFFF',
    charcoal: '#414243',
  },
  fontFamily: {
    heading: ['Montserrat', 'Inter', 'sans-serif'],
    body: ['Inter', 'Arial', 'sans-serif'],
  },
  borderRadius: {
    none: '0px',
    sm: '2px',
  },
};
18. Checklist de consistencia
Antes de aprobar una pieza, revisar:

¿El logo se lee con claridad?
¿El azul navy domina sin oscurecer la lectura?
¿El dorado está usado como acento y no como decoración excesiva?
¿El texto comunica una oferta concreta?
¿Hay suficiente aire visual?
¿La jerarquía se entiende en 5 segundos?
¿La pieza evita clichés jurídicos?
¿Funciona en mobile?
¿El CTA es claro?
¿El tono suena profesional y no generado por IA?
19. Criterio de evolución
Este sistema debe evolucionar desde el flyer hacia una identidad digital más completa. La dirección correcta no es agregar más elementos, sino consolidar pocos recursos distintivos:

Azul navy como base de autoridad.
Dorado como señal premium y de jerarquía.
Composición editorial con bloques claros/oscuros.
Lenguaje técnico-jurídico concreto.
Layouts limpios, legibles y modulares.
La marca debe sentirse especializada, seria y moderna, sin perder su carácter conservador.