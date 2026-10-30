const fs = require('fs');
const path = require('path');

function generateCvPdf() {
  const content = [
    "%PDF-1.4",
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj",
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
  ];

  // We write text commands for PDF stream
  const textStream = [
    "BT",
    // Name
    "/F1 22 Tf",
    "50 740 Td",
    "(SAVITHYA MUTHUNIMA) Tj",
    // Title
    "/F2 11 Tf",
    "0 -18 Td",
    "(IT Undergraduate | Computer Science & AI Student | Aspiring Software Developer) Tj",
    // Contact
    "/F2 9 Tf",
    "0 -15 Td",
    "(Email: Savithyamuthunima9@gmail.com | Location: Sri Lanka | GitHub: github.com/Savithya) Tj",
    
    // Line separator
    "0 -12 Td",
    "(____________________________________________________________________________________________) Tj",

    // SUMMARY
    "/F1 12 Tf",
    "0 -22 Td",
    "(PROFESSIONAL SUMMARY) Tj",
    "/F2 9 Tf",
    "0 -14 Td",
    "(Motivated IT undergraduate with a strong foundation in software engineering, artificial intelligence,) Tj",
    "0 -11 Td",
    "(and cybersecurity. Passionate about developing practical digital solutions and exploring emerging technologies.) Tj",

    // EDUCATION
    "/F1 12 Tf",
    "0 -20 Td",
    "(EDUCATION) Tj",
    "/F1 10 Tf",
    "0 -14 Td",
    "(BSc \\(Hons\\) Computer Science with AI) Tj",
    "/F2 9 Tf",
    "0 -12 Td",
    "(2026 - Present | Currently Pursuing) Tj",
    "/F1 10 Tf",
    "0 -14 Td",
    "(Pearson BTEC Computing - Levels 4 & 5) Tj",
    "/F2 9 Tf",
    "0 -12 Td",
    "(Horizon Campus | Year: 2025) Tj",
    "/F1 10 Tf",
    "0 -14 Td",
    "(Level 3 Diploma in Information Technology \\(UK\\)) Tj",
    "/F2 9 Tf",
    "0 -12 Td",
    "(ESOFT Metro Campus | Year: 2025 | Completed) Tj",
    "/F1 10 Tf",
    "0 -14 Td",
    "(Certificate Course in Spoken English) Tj",
    "/F2 9 Tf",
    "0 -12 Td",
    "(Institute of Technology, University of Moratuwa | Year: 2024 | Completed) Tj",

    // TECHNICAL SKILLS
    "/F1 12 Tf",
    "0 -20 Td",
    "(TECHNICAL SKILLS) Tj",
    "/F2 9 Tf",
    "0 -13 Td",
    "(\\x95 Languages: Python, JavaScript, TypeScript, C++) Tj",
    "0 -12 Td",
    "(\\x95 Web Development & Databases: CSS, Web Development, SQL, MySQL, PL/pgSQL) Tj",
    "0 -12 Td",
    "(\\x95 AI, Data & CS Concepts: Machine Learning, Data Analysis, Academic Research, Data Structures, Algorithms) Tj",
    "0 -12 Td",
    "(\\x95 Tools & Environments: Visual Studio Code, Anaconda, Jupyter Notebook, GitHub) Tj",

    // FEATURED PROJECTS & RESEARCH
    "/F1 12 Tf",
    "0 -20 Td",
    "(FEATURED PROJECTS & RESEARCH) Tj",
    "/F1 10 Tf",
    "0 -14 Td",
    "(Cyber Campus - Cybersecurity Awareness Platform \\(2026\\)) Tj",
    "/F2 9 Tf",
    "0 -12 Td",
    "(Web-based cybersecurity awareness and education platform designed to help users understand common threats) Tj",
    "0 -11 Td",
    "(and social engineering risks. Built with JavaScript, TypeScript, PL/pgSQL, and CSS.) Tj",

    "/F1 10 Tf",
    "0 -15 Td",
    "(Academic Research: Impact of Social Engineering Threats on User Privacy \\(2026\\)) Tj",
    "/F2 9 Tf",
    "0 -12 Td",
    "(Investigating social engineering vectors \\(phishing, pretexting, impersonation, scams\\) and user privacy) Tj",
    "0 -11 Td",
    "(among university students in Sri Lanka. Analyzed with Python, Anaconda, and Jupyter Notebook.) Tj",

    // CERTIFICATIONS & LANGUAGES
    "/F1 12 Tf",
    "0 -20 Td",
    "(CERTIFICATIONS & LANGUAGES) Tj",
    "/F2 9 Tf",
    "0 -13 Td",
    "(\\x95 Level 3 Diploma in Information Technology \\(UK\\) - ESOFT Metro Campus \\(2025\\)) Tj",
    "0 -12 Td",
    "(\\x95 Certificate Course in Spoken English - University of Moratuwa \\(2024\\)) Tj",
    "0 -12 Td",
    "(\\x95 Languages: English \\(Fluent\\), Sinhala \\(Native / Fluent\\)) Tj",

    "ET"
  ].join("\n");

  const streamLength = Buffer.byteLength(textStream, 'latin1');
  const streamObj = `6 0 obj << /Length ${streamLength} >> stream\n${textStream}\nendstream\nendobj`;
  content.push(streamObj);

  // Cross reference table
  const body = content.join("\n") + "\n";
  let offset = 0;
  const offsets = [0];
  const lines = body.split("\n");
  let running = 0;
  
  // Calculate byte offsets for objects 1 to 6
  const obj1Offset = body.indexOf("1 0 obj");
  const obj2Offset = body.indexOf("2 0 obj");
  const obj3Offset = body.indexOf("3 0 obj");
  const obj4Offset = body.indexOf("4 0 obj");
  const obj5Offset = body.indexOf("5 0 obj");
  const obj6Offset = body.indexOf("6 0 obj");

  const xrefOffset = Buffer.byteLength(body, 'latin1');
  const pad = (n) => String(n).padStart(10, '0');

  const xref = [
    "xref",
    "0 7",
    "0000000000 65535 f ",
    `${pad(obj1Offset)} 00000 n `,
    `${pad(obj2Offset)} 00000 n `,
    `${pad(obj3Offset)} 00000 n `,
    `${pad(obj4Offset)} 00000 n `,
    `${pad(obj5Offset)} 00000 n `,
    `${pad(obj6Offset)} 00000 n `,
    "trailer << /Size 7 /Root 1 0 R >>",
    "startxref",
    xrefOffset,
    "%%EOF"
  ].join("\n");

  const finalPdf = body + xref;
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, 'Savithya_Muthunima_CV.pdf');
  fs.writeFileSync(outputPath, finalPdf, 'latin1');
  console.log('Successfully generated CV at:', outputPath);
}

generateCvPdf();
