export interface Skill {
  id: string;
  name: string;
  category:
    | "Languages"
    | "Web Development"
    | "Tools & DevOps"
    | "UI/UX & Design"
    | "Databases"
    | "AI & Data"
    | "Tools"
    | "Core Concepts";
  categories?: string[];
  categoryLabel: string;
  iconName: string;
  color: string;
  glowColor: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution?: string;
  period: string;
  status: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  purpose: string;
  detailedHighlights: string[];
}

export interface ThreatCard {
  id: string;
  number: string;
  name: string;
  description: string;
  icon: string;
  details: string;
}

export interface SoftSkill {
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  title: string;
  institution: string;
  year: string;
  status: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  level: string;
}

export const PERSONAL_INFO = {
  name: "Savithya Muthunima",
  shortName: "SM.",
  title: "IT Undergraduate | Computer Science & AI Student",
  rotatingTitles: [
    "Aspiring Software Developer",
    "AI & Machine Learning Enthusiast",
    "Cybersecurity Researcher",
    "Technology Enthusiast",
  ],
  heroIntro: "Hello, I'm",
  heroDescription:
    "I'm a passionate IT undergraduate with a strong interest in software development, artificial intelligence, cybersecurity, and innovative digital solutions. I enjoy learning new technologies, developing practical projects, and continuously improving my technical skills.",
  aboutParagraphs: [
    "I am a motivated IT undergraduate with a passion for technology, software development, and continuous learning. My academic background has helped me build knowledge in programming, databases, web development, data structures, algorithms, and emerging computing technologies.",
    "I am currently pursuing a BSc (Hons) in Computer Science with AI and expanding my knowledge through academic research and practical projects.",
    "I enjoy exploring new technologies, solving problems, developing digital solutions, and learning from new experiences. My goal is to gain professional industry experience through an internship or entry-level IT opportunity while continuing to grow as a technology professional.",
  ],
  social: {
    github: "https://github.com/Savithya",
    linkedin: "https://www.linkedin.com/in/savithya-muthunima-b72665418",
    email: "Savithyamuthunima9@gmail.com",
    phone: "074 225 5014",
    location: "Sri Lanka",
  },
  cvFileName: "Savithya_Muthunima_CV.pdf",
};

export const ABOUT_HIGHLIGHTS = [
  {
    number: "01",
    title: "Academic Development",
    description: "Developing a strong foundation in computing, programming, and artificial intelligence.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Practical Projects",
    description: "Building practical solutions through software development and cybersecurity-related projects.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    number: "03",
    title: "Career Development",
    description: "Seeking opportunities to apply academic knowledge and gain hands-on industry experience.",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export const INTEREST_TAGS = [
  "Computer Networking",
  "IT Systems & Infrastructure",
  "Cloud Computing",
  "Artificial Intelligence & Machine Learning",
  "Software Development",
  "Web Development",
  "UI/UX Design",
  "Database Management & Data Analytics",
  "Automation & Emerging Technologies",
];

export const SKILLS_DATA: Skill[] = [
  // 01. HTML
  {
    id: "html",
    name: "HTML",
    category: "Web Development",
    categories: ["Web Development"],
    categoryLabel: "Markup Language",
    iconName: "html",
    color: "#E34F26",
    glowColor: "rgba(227, 79, 38, 0.4)",
  },
  // 02. Tailwind CSS
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Web Development",
    categories: ["Web Development"],
    categoryLabel: "CSS Framework",
    iconName: "tailwind",
    color: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  // 03. JavaScript
  {
    id: "javascript",
    name: "JavaScript",
    category: "Languages",
    categories: ["Languages", "Web Development"],
    categoryLabel: "Programming Language",
    iconName: "javascript",
    color: "#F7DF1E",
    glowColor: "rgba(247, 223, 30, 0.35)",
  },
  // 04. Node.js
  {
    id: "nodejs",
    name: "Node.js",
    category: "Web Development",
    categories: ["Web Development", "Languages"],
    categoryLabel: "JavaScript Runtime",
    iconName: "nodejs",
    color: "#5FA04E",
    glowColor: "rgba(95, 160, 78, 0.4)",
  },
  // 05. PHP
  {
    id: "php",
    name: "PHP",
    category: "Languages",
    categories: ["Languages", "Web Development"],
    categoryLabel: "Server-side Language",
    iconName: "php",
    color: "#777BB4",
    glowColor: "rgba(119, 123, 180, 0.4)",
  },
  // 06. C#
  {
    id: "csharp",
    name: "C#",
    category: "Languages",
    categories: ["Languages"],
    categoryLabel: "Programming Language",
    iconName: "csharp",
    color: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.4)",
  },
  // 07. C
  {
    id: "c",
    name: "C",
    category: "Languages",
    categories: ["Languages"],
    categoryLabel: "Systems Programming",
    iconName: "c",
    color: "#659AD2",
    glowColor: "rgba(101, 154, 210, 0.4)",
  },
  // 08. Git
  {
    id: "git",
    name: "Git",
    category: "Tools & DevOps",
    categories: ["Tools & DevOps"],
    categoryLabel: "Version Control",
    iconName: "git",
    color: "#F05032",
    glowColor: "rgba(240, 80, 50, 0.4)",
  },
  // 09. Docker
  {
    id: "docker",
    name: "Docker",
    category: "Tools & DevOps",
    categories: ["Tools & DevOps"],
    categoryLabel: "Containerization",
    iconName: "docker",
    color: "#2496ED",
    glowColor: "rgba(36, 150, 237, 0.4)",
  },
  // 10. Figma
  {
    id: "figma",
    name: "Figma",
    category: "UI/UX & Design",
    categories: ["UI/UX & Design"],
    categoryLabel: "UI/UX Design",
    iconName: "figma",
    color: "#F24E1E",
    glowColor: "rgba(242, 78, 30, 0.4)",
  },
  // 11. Photoshop
  {
    id: "photoshop",
    name: "Photoshop",
    category: "UI/UX & Design",
    categories: ["UI/UX & Design"],
    categoryLabel: "Graphic Design",
    iconName: "photoshop",
    color: "#31A8FF",
    glowColor: "rgba(49, 168, 255, 0.4)",
  },
  // 12. Power BI
  {
    id: "power-bi",
    name: "Power BI",
    category: "AI & Data",
    categories: ["AI & Data", "Tools"],
    categoryLabel: "Data Visualization & Analytics",
    iconName: "powerbi",
    color: "#F2C811",
    glowColor: "rgba(242, 200, 17, 0.4)",
  },
  // 13. Google Colab
  {
    id: "google-colab",
    name: "Google Colab",
    category: "AI & Data",
    categories: ["AI & Data", "Tools"],
    categoryLabel: "Cloud AI & Data Science",
    iconName: "google-colab",
    color: "#F9AB00",
    glowColor: "rgba(249, 171, 0, 0.4)",
  },
];

export const ADDITIONAL_SKILLS_DATA: Skill[] = [
  {
    id: "python",
    name: "Python",
    category: "Languages",
    categoryLabel: "Programming Language",
    iconName: "python",
    color: "#3776AB",
    glowColor: "rgba(55, 118, 171, 0.4)",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Languages",
    categoryLabel: "Programming Language",
    iconName: "typescript",
    color: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.4)",
  },
  {
    id: "cpp",
    name: "C++",
    category: "Languages",
    categoryLabel: "Programming Language",
    iconName: "cpp",
    color: "#00599C",
    glowColor: "rgba(0, 89, 156, 0.4)",
  },
  {
    id: "css",
    name: "CSS",
    category: "Web Development",
    categoryLabel: "Styling Technology",
    iconName: "css",
    color: "#1572B6",
    glowColor: "rgba(21, 114, 182, 0.4)",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Databases",
    categoryLabel: "Query Language",
    iconName: "sql",
    color: "#E34C26",
    glowColor: "rgba(227, 76, 38, 0.4)",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Databases",
    categoryLabel: "Database",
    iconName: "mysql",
    color: "#4479A1",
    glowColor: "rgba(68, 121, 161, 0.4)",
  },
  {
    id: "plpgsql",
    name: "PL/pgSQL",
    category: "Databases",
    categoryLabel: "Database Programming",
    iconName: "postgres",
    color: "#336791",
    glowColor: "rgba(51, 103, 145, 0.4)",
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "AI & Data",
    categoryLabel: "AI & Data",
    iconName: "brain",
    color: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.4)",
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    category: "AI & Data",
    categoryLabel: "Data & Research",
    iconName: "chart",
    color: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.4)",
  },
  {
    id: "academic-research",
    name: "Academic Research",
    category: "AI & Data",
    categoryLabel: "Research",
    iconName: "book-open",
    color: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.4)",
  },
  {
    id: "data-structures",
    name: "Data Structures",
    category: "Core Concepts",
    categoryLabel: "Core Concept",
    iconName: "layers",
    color: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    id: "algorithms",
    name: "Algorithms",
    category: "Core Concepts",
    categoryLabel: "Core Concept",
    iconName: "cpu",
    color: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.4)",
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    category: "Tools",
    categoryLabel: "Code Editor",
    iconName: "vscode",
    color: "#007ACC",
    glowColor: "rgba(0, 122, 204, 0.4)",
  },
  {
    id: "anaconda",
    name: "Anaconda",
    category: "Tools",
    categoryLabel: "Development Environment",
    iconName: "anaconda",
    color: "#44A833",
    glowColor: "rgba(68, 168, 51, 0.4)",
  },
  {
    id: "jupyter",
    name: "Jupyter Notebook",
    category: "Tools",
    categoryLabel: "Data & Research Tool",
    iconName: "jupyter",
    color: "#F37626",
    glowColor: "rgba(243, 118, 38, 0.4)",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    categoryLabel: "Development Platform",
    iconName: "github",
    color: "#F0F6FC",
    glowColor: "rgba(240, 246, 252, 0.3)",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    degree: "BSc (Hons) Computer Science with AI",
    period: "2026 – Present",
    status: "Currently Pursuing",
    description:
      "Continuing my academic development in computer science, artificial intelligence, and software technologies.",
  },
  {
    id: "edu-2",
    degree: "Pearson BTEC Computing — Levels 4 & 5",
    institution: "Horizon Campus",
    period: "2025",
    status: "Higher National Diploma",
    description:
      "Comprehensive computing curriculum covering software engineering, systems design, database architecture, and networking principles.",
  },
  {
    id: "edu-3",
    degree: "Level 3 Diploma in Information Technology (UK)",
    institution: "ESOFT Metro Campus",
    period: "2025",
    status: "Completed",
    description:
      "Foundational education in information technology, programming logic, computer systems, and practical technical applications.",
  },
  {
    id: "edu-4",
    degree: "Certificate Course in Spoken English",
    institution: "Institute of Technology, University of Moratuwa",
    period: "2024",
    status: "Completed",
    description:
      "Advanced professional English communication, technical presentation skills, and collaborative dialogue.",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "cyber-campus",
    title: "Cyber Campus — Cybersecurity Awareness Platform",
    category: "Web Development & Cybersecurity",
    year: "2026",
    description:
      "Cyber Campus is a web-based cybersecurity awareness and education platform designed to help users understand common cyber threats, explore social engineering risks, and develop safer online practices.",
    technologies: ["JavaScript", "TypeScript", "PL/pgSQL", "CSS"],
    features: [
      "Cybersecurity awareness modules",
      "Social engineering education",
      "Interactive learning experiences",
      "User-friendly accessible interface",
      "Fully responsive web design",
    ],
    githubUrl: "https://github.com/Savithya",
    overview:
      "Cyber Campus was created to address the growing vulnerability of digital users to psychological cyber threats. By structuring cybersecurity education into interactive, easy-to-digest scenarios, the platform empowers users to identify deceptive tactics before falling victim to malicious campaigns.",
    purpose:
      "To bridge the gap between technical cybersecurity concepts and everyday digital behaviors through accessible, engaging online education.",
    detailedHighlights: [
      "Implemented realistic social engineering simulation scenarios for interactive threat recognition.",
      "Engineered secure relational database schemas using PL/pgSQL for persistent learning progress.",
      "Designed a responsive, high-contrast dark UI with seamless navigation and accessible components.",
      "Structured comprehensive awareness guides covering phishing vectors, password hygiene, and online privacy.",
    ],
  },
  {
    id: "academic-research",
    title: "Impact of Social Engineering Threats on User Privacy among University Students in Sri Lanka",
    category: "Cybersecurity Research & Data Analysis",
    year: "2026",
    description:
      "An academic research project investigating social engineering threats and their relationship with user privacy among university students in Sri Lanka.",
    technologies: ["Python", "Visual Studio Code", "Anaconda", "Jupyter Notebook"],
    features: [
      "Empirical threat assessment",
      "Privacy behavior evaluation",
      "Data-driven pattern analysis",
      "Academic research synthesis",
      "Protection strategy recommendations",
    ],
    githubUrl: "https://github.com/Savithya",
    overview:
      "This empirical academic study examines the vulnerability landscape among university students in Sri Lanka, focusing on the psychological vectors employed by modern threat actors to compromise user privacy across mobile and desktop environments.",
    purpose:
      "To analyze student awareness levels, examine frequent threat interactions, and formulate evidence-based cybersecurity recommendations for higher education communities.",
    detailedHighlights: [
      "Conducted extensive data modeling and statistical correlation using Python in Jupyter Notebook.",
      "Examined vulnerability exposure across four primary vectors: Phishing, Pretexting, Impersonation, and Malicious Links.",
      "Identified critical gaps between student perceived security awareness and actual protective behaviors.",
      "Formulated educational intervention frameworks aimed at boosting proactive privacy-preserving practices.",
    ],
  },
];

export const RESEARCH_THREAT_CARDS: ThreatCard[] = [
  {
    id: "phishing",
    number: "01",
    name: "Phishing",
    description: "Deceptive emails, messages, and websites that attempt to obtain sensitive information.",
    icon: "fish",
    details: "Analyzed the prevalence of fraudulent emails and spoofed login pages targeting university student credentials, financial details, and institutional accounts.",
  },
  {
    id: "pretexting",
    number: "02",
    name: "Pretexting",
    description: "Manipulation using fabricated stories or identities to gain trust.",
    icon: "shield-alert",
    details: "Investigated manipulative narrative techniques where adversaries invent urgent administrative scenarios to elicit private identity data from students.",
  },
  {
    id: "impersonation",
    number: "03",
    name: "Impersonation",
    description: "Attackers pretending to be trusted individuals or organizations.",
    icon: "user-x",
    details: "Studied identity spoofing targeting student trust, including deceptive academic staff impersonations and peer account compromise on social networks.",
  },
  {
    id: "malicious-links",
    number: "04",
    name: "Online Scams & Malicious Links",
    description: "Fraudulent online schemes and links that may compromise user privacy.",
    icon: "link-2-off",
    details: "Evaluated fraudulent online schemes, promotional clickbait, and shortened URLs distributed via messaging platforms leading to unauthorized data harvesting.",
  },
];

export const RESEARCH_FOCUS_AREAS = [
  {
    title: "Threat Awareness",
    description: "Assessing student knowledge of modern psychological threat vectors and deceptive triggers.",
  },
  {
    title: "Threat Experiences",
    description: "Evaluating real-world encounter frequencies with deceptive communications and scams.",
  },
  {
    title: "Privacy Concerns",
    description: "Gauging student apprehension regarding personal data security and digital footprints.",
  },
  {
    title: "Online Behaviour",
    description: "Investigating everyday verification habits, link inspection, and credential handling.",
  },
  {
    title: "Privacy-Protection Practices",
    description: "Identifying adoption barriers to multi-factor authentication, privacy settings, and reporting tools.",
  },
];

export const SOFT_SKILLS_DATA: SoftSkill[] = [
  {
    title: "Teamwork",
    description: "Collaborating effectively with diverse teams to solve problems and achieve project milestones.",
    icon: "users",
  },
  {
    title: "Time Management",
    description: "Prioritizing tasks and managing schedules efficiently to meet strict academic and project deadlines.",
    icon: "clock",
  },
  {
    title: "Leadership",
    description: "Guiding team initiatives, facilitating constructive discussions, and taking ownership of project deliverables.",
    icon: "compass",
  },
  {
    title: "Effective Communication",
    description: "Articulating technical concepts clearly to both technical and non-technical stakeholders.",
    icon: "message-square",
  },
  {
    title: "Critical Thinking",
    description: "Analyzing complex challenges methodically to formulate effective, robust, and ethical digital solutions.",
    icon: "sparkles",
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "Level 3 Diploma in Information Technology (UK)",
    institution: "ESOFT Metro Campus",
    year: "2025",
    status: "Completed",
  },
  {
    title: "Certificate Course in Spoken English",
    institution: "Institute of Technology, University of Moratuwa",
    year: "2024",
    status: "Completed",
  },
];

export const LANGUAGES_DATA: LanguageItem[] = [
  {
    name: "English",
    proficiency: "Fluent",
    level: "Professional & Academic Proficiency",
  },
  {
    name: "Sinhala",
    proficiency: "Fluent",
    level: "Native Speaker",
  },
];
