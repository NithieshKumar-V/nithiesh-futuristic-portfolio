import { ProjectItem, SkillCategory, EducationItem, CertificationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Nithiesh Kumar V',
  shortName: 'NK',
  title: 'Software Developer | Computer Science Engineering Student',
  institution: 'CMR University, Bengaluru',
  degree: 'B.Tech in Computer Science Engineering',
  status: 'Exploring & Building',
  email: 'nithieshkumarv25@gmail.com',
  githubUrl: 'https://github.com/NithieshKumar-V',
  linkedinUrl: 'https://www.linkedin.com/in/nithiesh-kumar-v-2211b9334',
  heroHeadline: 'Building Intelligent Solutions Through Code.',
  heroDescription:
    "I'm a Computer Science Engineering student passionate about software development, full-stack applications, and AI-powered solutions. I enjoy turning ideas into practical projects through code, experimentation, and continuous learning.",
  aboutIntro:
    'Beyond the code, I focus on building practical tools that bridge algorithmic concepts with real-world utility. My work spans full-stack engineering, Python-driven automation, computer vision experiments, and hardware sensor integration.',
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'roadwise',
    title: 'RoadWise — Intelligent Road Damage Detection & Navigation',
    subtitle: 'Computer Vision & Geographic Road Surface Intelligence',
    category: 'ai_ml',
    featured: true,
    visualType: 'roadwise',
    status: 'Under Active Development',
    verificationNotes: 'YOLO-based detection and GPS coordinate mapping implemented; route-avoidance navigation algorithm currently under development.',
    shortDescription:
      'An intelligent system combining YOLO-based road damage detection with GPS coordinate mapping to identify potholes, surface cracks, and road degradation.',
    fullDescription:
      'RoadWise is an applied computer vision and spatial mapping initiative developed to inspect and map road surface hazards. The system leverages YOLO model inference to identify surface damage (potholes, longitudinal cracks, alligator cracking) from vehicle-mounted camera frames. Verified damage incidents are tagged with GPS coordinates and plotted onto a spatial map interface. Route-aware damage avoidance navigation is actively being researched and developed.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'GPS Integration', 'Leaflet / Web Maps', 'FastAPI'],
    keyFeatures: [
      'Real-time pothole and road crack detection using YOLO-based bounding box inference',
      'Geographic tagging attaching GPS metadata (latitude/longitude) to each incident',
      'Spatial dashboard mapping road hazards for municipal visibility and driver awareness',
      'Route-aware navigation model (planned & under active algorithmic development)',
    ],
    githubUrl: 'https://github.com/NithieshKumar-V',
    stats: [
      { label: 'Detection Model', value: 'YOLOv8' },
      { label: 'Spatial Layer', value: 'GPS Coordinate Sync' },
      { label: 'Pipeline State', value: 'Active Development' },
    ],
  },
  {
    id: 'code-analyzer',
    title: 'Smart Code Quality Analyzer',
    subtitle: 'Static Analysis Engine with Abstract Syntax Trees',
    category: 'python_systems',
    featured: true,
    visualType: 'code_analyzer',
    status: 'Completed',
    verificationNotes: 'Source analysis engine tested on Python codebases; detects unused symbols, evaluates AST complexity, and computes maintainability grade.',
    shortDescription:
      'A Python static code analysis service built on the AST module and FastAPI to inspect code hygiene, detect unused variables, and grade maintainability.',
    fullDescription:
      'Built to automate clean code verification without executing untrusted scripts, this analyzer parses Python source code into an Abstract Syntax Tree (AST). It crawls AST node hierarchies to detect unused variables, dead imports, high cyclomatic complexity patterns, and missing function docstrings. The application outputs an overall maintainability score (A through F) with actionable refactoring recommendations.',
    technologies: ['Python', 'FastAPI', 'Python AST module', 'Static Analysis', 'JSON API'],
    keyFeatures: [
      'AST-based symbol resolution detecting unreferenced local variables and imports',
      'Maintainability index scoring formula generating clear letter grades',
      'REST API endpoints powered by FastAPI for quick IDE or CLI integration',
      'Instant feedback breakdown explaining code smells and hygiene violations',
    ],
    githubUrl: 'https://github.com/NithieshKumar-V',
    stats: [
      { label: 'Analysis Engine', value: 'Python AST' },
      { label: 'API Framework', value: 'FastAPI' },
      { label: 'Output', value: 'Score & Letter Grade' },
    ],
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    subtitle: 'Streamlit PDF Parsing & Candidate Skill Extraction',
    category: 'ai_ml',
    featured: true,
    visualType: 'resume_ai',
    status: 'Completed',
    verificationNotes: 'Streamlit interface processes PDF files via PyPDF2; extracts clean text and matches against keyword taxonomy.',
    shortDescription:
      'A Streamlit application that ingests PDF resumes, extracts structured text streams, and maps candidate competencies against technical domain dictionaries.',
    fullDescription:
      'Designed to streamline talent evaluation, this tool parses multi-page PDF resumes through PyPDF2, sanitizes raw string data, and extracts relevant keywords across programming languages, frameworks, databases, and education headers. The interactive dashboard renders competency distributions, keyword frequency counts, and formatted document summaries.',
    technologies: ['Python', 'Streamlit', 'PyPDF2', 'NLP Keyword Matching', 'Data Visualization'],
    keyFeatures: [
      'Reliable PDF document ingestion and multi-column text extraction',
      'Categorized keyword matching against software engineering taxonomies',
      'Interactive Streamlit UI displaying skill distributions and document metrics',
      'Structured candidate preview avoiding manual resume skimming',
    ],
    githubUrl: 'https://github.com/NithieshKumar-V',
    stats: [
      { label: 'UI Runtime', value: 'Streamlit' },
      { label: 'PDF Parser', value: 'PyPDF2' },
      { label: 'Text Mining', value: 'Rule-Based NLP' },
    ],
  },
  {
    id: 'sentimentscope',
    title: 'SentimentScope — Text Sentiment Analyzer',
    subtitle: 'Web Sentiment Intelligence with Polarity & Subjectivity Analytics',
    category: 'ai_ml',
    featured: true,
    visualType: 'sentimentscope',
    status: 'Completed',
    verificationNotes: 'Flask backend utilizing TextBlob and Pandas; verified historical session logging and CSV report export.',
    shortDescription:
      'A Flask web application utilizing TextBlob and Pandas to evaluate sentiment polarity, subjectivity scores, and export session logs.',
    fullDescription:
      'SentimentScope evaluates unstructured customer feedback, reviews, and short social commentary. Driven by TextBlob NLP heuristics, the application calculates polarity (-1.0 to +1.0) and subjectivity (0.0 to 1.0) metrics to classify text as Positive, Negative, or Neutral. Analysis records are cached with Pandas DataFrames and can be downloaded as standard CSV reports for offline data science workflows.',
    technologies: ['Python', 'Flask', 'TextBlob', 'Pandas', 'Bootstrap 5', 'CSV Processing'],
    keyFeatures: [
      'Polarity (-1 to +1) and subjectivity (0 to 1) scoring with classification badges',
      'Session history table aggregating evaluated text entries',
      'One-click CSV download of batch sentiment analysis reports',
      'Responsive web interface with clear visual distribution meters',
    ],
    githubUrl: 'https://github.com/NithieshKumar-V',
    stats: [
      { label: 'NLP Backend', value: 'TextBlob' },
      { label: 'Data Engine', value: 'Pandas DataFrames' },
      { label: 'Export Format', value: 'CSV Reports' },
    ],
  },
  {
    id: 'eventhub',
    title: 'EventHub — Event Registration System',
    subtitle: 'Full-Stack Event Management & Participant Registration',
    category: 'fullstack',
    featured: false,
    visualType: 'eventhub',
    status: 'Completed',
    verificationNotes: 'Full-stack client-server architecture with React frontend, Express API routes, and relational MySQL persistence.',
    shortDescription:
      'A full-stack web application for college technical symposia and event registration, featuring schedule listings, slot booking, and attendee tracking.',
    fullDescription:
      'EventHub was developed to replace fragmented spreadsheet workflows for academic and club events. The React client communicates with an Express.js REST API backed by a MySQL relational schema to manage event listings, participant registrations, capacity limits, and attendee verification.',
    technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
    keyFeatures: [
      'Interactive event catalog with category filtering and seat availability counters',
      'Participant registration form with input validation and duplicate prevention',
      'Relational database schema storing events, registrations, and participant records',
      'Responsive attendee confirmation dashboard with ticket lookup',
    ],
    githubUrl: 'https://github.com/NithieshKumar-V',
    stats: [
      { label: 'Architecture', value: 'REST + SPA' },
      { label: 'Database', value: 'MySQL' },
      { label: 'Frontend', value: 'React + Vite' },
    ],
  },
  {
    id: 'beingfit',
    title: 'BeingFit — Modern Fitness Portal',
    subtitle: 'Responsive Health & Workout Showcase Platform',
    category: 'fullstack',
    featured: false,
    visualType: 'beingfit',
    status: 'Completed',
    verificationNotes: 'Frontend engineering showcase highlighting responsive design, CSS transitions, and modern layout composition.',
    shortDescription:
      'A responsive fitness and health portal designed with modern aesthetic standards, workout catalogs, and mobile-first navigation.',
    fullDescription:
      'BeingFit focuses on clean UI ergonomics, fitness program discovery, BMI calculation utilities, and motivational visual hierarchy. Built using modern frontend methodologies, it delivers fluid responsiveness across mobile screens and desktop monitors.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
    keyFeatures: [
      'Interactive workout program selector with category breakdowns',
      'Integrated BMI calculator providing instant health bracket feedback',
      'Mobile-first responsive drawer navigation with fluid animations',
      'Clean typography and high-contrast fitness styling',
    ],
    githubUrl: 'https://github.com/NithieshKumar-V',
    stats: [
      { label: 'Focus', value: 'UI/UX Ergonomics' },
      { label: 'Design', value: 'Mobile-First' },
      { label: 'Stack', value: 'Tailwind CSS' },
    ],
  },
  {
    id: 'lang-voice',
    title: 'Language Detector with Voice Output',
    subtitle: 'Multilingual Text Recognition with Text-to-Speech',
    category: 'python_systems',
    featured: false,
    visualType: 'language_voice',
    status: 'Completed',
    shortDescription:
      'Python utility detecting language of arbitrary text passages with gTTS automated auditory pronunciation.',
    fullDescription:
      'Detects language family from input strings using LangDetect statistical n-gram analysis, and renders synthesized voice playback via Google Text-to-Speech (gTTS) audio pipelines.',
    technologies: ['Python', 'LangDetect', 'gTTS', 'Speech Synthesis'],
    keyFeatures: [
      'Automatic language code detection across 50+ languages',
      'Speech synthesis playback in native dialect using gTTS',
      'Lightweight command-line and GUI exploration scripts',
    ],
    githubUrl: 'https://github.com/NithieshKumar-V',
  },
  {
    id: 'plant-watering',
    title: 'Automatic Plant Irrigation System',
    subtitle: 'Microcontroller IoT Moisture Monitor with Pump Relay',
    category: 'iot_hardware',
    featured: false,
    visualType: 'plant_water',
    status: 'Completed',
    shortDescription:
      'Embedded hardware project utilizing an Arduino, capacitive soil moisture sensor, and submersible 5V relay pump.',
    fullDescription:
      'An embedded IoT prototype designed to automate potted plant irrigation. Reads analog soil moisture levels, compares them against calibrated threshold bands, and triggers a 5V relay switch powering an irrigation pump until adequate moisture saturation is achieved.',
    technologies: ['Arduino C/C++', 'Soil Moisture Sensor', '5V Relay Module', 'Hardware Prototyping'],
    keyFeatures: [
      'Analog sensor calibration based on soil saturation metrics',
      'Automated relay-driven pump actuation with safety timeout',
      'Real-time serial telemetry monitoring moisture depletion curves',
    ],
    githubUrl: 'https://github.com/NithieshKumar-V',
  },
  {
    id: 'vehicle-rental',
    title: 'Vehicle Rental Management System',
    subtitle: 'Object-Oriented Java Booking Application',
    category: 'python_systems',
    featured: false,
    visualType: 'vehicle_rental',
    status: 'Completed',
    shortDescription:
      'Java application applying core OOP principles (polymorphism, inheritance) to manage fleet inventory and calculate billing.',
    fullDescription:
      'Demonstrates object-oriented software engineering principles through an extensible vehicle rental fleet hierarchy (Cars, Bikes, SUVs). Manages daily rates, booking duration, insurance add-ons, and invoice generation.',
    technologies: ['Java', 'OOP Architecture', 'File I/O', 'CLI Design'],
    keyFeatures: [
      'Polymorphic class inheritance structure for diverse vehicle classes',
      'Dynamic rental cost calculation factoring days and vehicle tiers',
      'Persistent record logging for customer booking transactions',
    ],
    githubUrl: 'https://github.com/NithieshKumar-V',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages utilized for application logic, systems development, and data processing.',
    skills: [
      { name: 'Python', tag: 'Primary / Data & Backend' },
      { name: 'Java', tag: 'OOP & Software Design' },
      { name: 'C', tag: 'Low-Level Systems' },
      { name: 'C++', tag: 'Data Structures & Algorithms' },
      { name: 'JavaScript', tag: 'ES6+ & Async Web' },
    ],
  },
  {
    category: 'Frontend Development',
    description: 'Modern web standards, responsive layout composition, and interactive interfaces.',
    skills: [
      { name: 'HTML5', tag: 'Semantic Structure' },
      { name: 'CSS3', tag: 'Modern Layouts & Motion' },
      { name: 'Tailwind CSS', tag: 'Utility-First Styling' },
      { name: 'React', tag: 'Component Architecture' },
      { name: 'Vite', tag: 'Fast Bundling & Tooling' },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'Server architectures, microservices, REST endpoints, and request lifecycles.',
    skills: [
      { name: 'Node.js', tag: 'Server Runtime' },
      { name: 'Express.js', tag: 'RESTful API Engineering' },
      { name: 'FastAPI', tag: 'High-Performance Python APIs' },
      { name: 'Flask', tag: 'Micro-Framework Services' },
    ],
  },
  {
    category: 'Databases & Storage',
    description: 'Structured relational schemas and document-oriented persistence.',
    skills: [
      { name: 'MySQL', tag: 'Relational Schemas & Queries' },
      { name: 'MongoDB', tag: 'Document-Based Collections' },
    ],
  },
  {
    category: 'AI, Data & Computer Vision',
    description: 'Applied machine learning pipelines, text processing, and image analysis.',
    skills: [
      { name: 'YOLO Computer Vision', tag: 'Object & Defect Detection' },
      { name: 'Natural Language Processing', tag: 'Tokenization & Sentiment' },
      { name: 'TextBlob', tag: 'Lexical Sentiment Scoring' },
      { name: 'Pandas', tag: 'Data Wrangling & Analysis' },
      { name: 'Python AST', tag: 'Static Code Inspection' },
    ],
  },
  {
    category: 'Developer Tools & Platforms',
    description: 'Version control workflows, package ecosystems, and cloud deployment pipelines.',
    skills: [
      { name: 'Git', tag: 'Version Control & Branching' },
      { name: 'GitHub', tag: 'Collaboration & Repos' },
      { name: 'npm', tag: 'Package Management' },
      { name: 'Vercel', tag: 'Frontend CI/CD & Hosting' },
    ],
  },
  {
    category: 'Hardware & IoT',
    description: 'Microcontroller prototyping, circuit interfaces, and physical computing.',
    skills: [
      { name: 'Arduino', tag: 'Microcontroller Prototyping' },
      { name: 'Raspberry Pi', tag: 'Single-Board Computers' },
      { name: 'Sensors & Relays', tag: 'Environmental Telemetry' },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'CMR University',
    location: 'Bengaluru, Karnataka',
    period: '2024 – Present (Ongoing)',
    score: '8.21 CGPA',
    scoreLabel: 'Current Academic Record',
    current: true,
    highlights: [
      'Core coursework: Data Structures, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Full Stack Development',
      'Active developer focusing on AI application workflows, web application architectures, and computer vision projects',
      'Participating in academic hackathons and hands-on system development assignments',
    ],
  },
  {
    degree: 'Pre-University (Class 12 - PCMC)',
    institution: "Alva's Pre-University College",
    location: 'Moodbidri, Karnataka',
    period: '2022 – 2024',
    score: '94.5%',
    scoreLabel: 'Board Examination Score',
    highlights: [
      'Physics, Chemistry, Mathematics, Computer Science (PCMC)',
      'Distinction grade with foundational focus in algorithmic programming, analytical problem solving, and computational logic',
    ],
  },
  {
    degree: 'Secondary School Examination (Class 10)',
    institution: 'Amara Jyothi English School',
    location: 'Bengaluru, Karnataka',
    period: 'Completed 2022',
    score: '91.84%',
    scoreLabel: 'Board Examination Score',
    highlights: [
      'Graduated with First Class with Distinction',
      'Early engagement with mathematics, scientific experiments, and introductory computing',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Software Engineering and Agile Lifecycle Management',
    issuer: 'OnWingspan (Infosys Springboard)',
    date: 'September 2025',
    credentialNote: 'Verified Academic Certification',
    topics: [
      'Agile and Scrum delivery lifecycles',
      'Sprint planning, user story decomposition, and backlog grooming',
      'Software quality assurance and continuous integration workflows',
      'Collaborative engineering discipline',
    ],
  },
  {
    title: 'Python Programming & Software Foundations',
    issuer: 'Udemy',
    date: 'Verified Coursework',
    credentialNote: 'Practical Engineering Foundations',
    topics: [
      'Idiomatic Python programming and standard library modules',
      'Object-oriented principles, exception handling, and file streaming',
      'Data manipulation and algorithmic problem solving',
    ],
  },
  {
    title: 'Applied Full-Stack & Machine Learning Exploration',
    issuer: 'Continuous Technical Learning & Academic Labs',
    date: '2024 – Present',
    credentialNote: 'Hands-On Projects',
    topics: [
      'REST API development with Express and FastAPI',
      'Object detection pipelines with YOLO architectures',
      'Modern responsive web design with Tailwind CSS and React',
    ],
  },
];
