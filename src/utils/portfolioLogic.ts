import { ContactFormData, FormValidationResult, ProjectCategory, ProjectItem } from '../types/portfolio';

/**
 * Filter projects based on active category and optional search query
 */
export function filterProjects(
  projects: ProjectItem[],
  category: ProjectCategory,
  searchQuery: string = ''
): ProjectItem[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory = category === 'all' || project.category === category;
    if (!matchesCategory) return false;

    if (!query) return true;

    const inTitle = project.title.toLowerCase().includes(query);
    const inSubtitle = project.subtitle.toLowerCase().includes(query);
    const inDesc = project.shortDescription.toLowerCase().includes(query);
    const inTech = project.technologies.some((t) => t.toLowerCase().includes(query));
    const inFeatures = project.keyFeatures.some((f) => f.toLowerCase().includes(query));

    return inTitle || inSubtitle || inDesc || inTech || inFeatures;
  });
}

/**
 * Validates contact form inputs with strict, helpful validation rules
 */
export function validateContactForm(data: ContactFormData): FormValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Please provide your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please provide your email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g., name@domain.com).';
  }

  const trimmedSubject = data.subject.trim();
  if (!trimmedSubject) {
    errors.subject = 'Please enter a subject.';
  } else if (trimmedSubject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please write a message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Human-readable category labels
 */
export function getCategoryLabel(category: ProjectCategory): string {
  switch (category) {
    case 'ai_ml':
      return 'AI & Computer Vision';
    case 'fullstack':
      return 'Full-Stack Web';
    case 'python_systems':
      return 'Python & Systems';
    case 'iot_hardware':
      return 'IoT & Hardware';
    case 'all':
    default:
      return 'All Projects';
  }
}

/**
 * Generates an accurate, clean plain-text resume representation for Nithiesh Kumar V
 */
export function generateResumeDocumentText(): string {
  return `================================================================================
NITHIESH KUMAR V
Software Developer | Computer Science Engineering Student
CMR University, Bengaluru
Email: nithieshkumarv25@gmail.com
LinkedIn: https://www.linkedin.com/in/nithiesh-kumar-v-2211b9334
GitHub: https://github.com/NithieshKumar-V
================================================================================

PROFESSIONAL SUMMARY
Computer Science Engineering student passionate about full-stack development, applied
artificial intelligence, and practical software engineering. Proven experience in
building computer vision pipelines, static code analyzers, and database-backed web
applications through continuous experimentation and academic rigor.

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
B.Tech in Computer Science Engineering (2024 – Present)
CMR University, Bengaluru, Karnataka
- Current Academic Performance: 8.21 CGPA
- Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming,
  Database Management Systems, Computer Networks, Operating Systems, Full Stack Web

Pre-University Course (PCMC) (2022 – 2024)
Alva's Pre-University College, Moodbidri, Karnataka
- Board Examination Score: 94.5% (Distinction)
- Focus: Physics, Chemistry, Mathematics, Computer Science

Secondary School Examination - Class 10 (Completed 2022)
Amara Jyothi English School, Bengaluru, Karnataka
- Board Examination Score: 91.84% (First Class with Distinction)

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
- Programming Languages: Python, Java, C, C++, JavaScript (ES6+)
- Frontend: HTML5, CSS3, Tailwind CSS, React, Vite
- Backend & APIs: Node.js, Express.js, FastAPI, Flask
- Databases: MySQL, MongoDB
- AI & Computer Vision: YOLOv8, Natural Language Processing, TextBlob, Pandas, Python AST
- Developer Tools: Git, GitHub, npm, Vercel
- Embedded & IoT: Arduino, Soil Moisture & Proximity Sensors, Relays

--------------------------------------------------------------------------------
KEY PROJECTS
--------------------------------------------------------------------------------
1. RoadWise — Intelligent Road Damage Detection & Navigation
   Technologies: Python, YOLOv8, OpenCV, GPS Integration, Web Maps
   - Integrated YOLO-based bounding box detection to classify road damage (potholes, cracks).
   - Synced geo-coordinates (latitude/longitude) with detected incidents on a map interface.
   - Route-aware hazard avoidance navigation currently in active algorithmic development.

2. Smart Code Quality Analyzer
   Technologies: Python, FastAPI, Python AST Module
   - Implemented static code parsing on Python AST node trees to identify hygiene smells.
   - Automated detection of unused variables and computed modular maintainability grades.
   - Exposed REST API endpoints for developer tooling and instant code audits.

3. AI Resume Analyzer
   Technologies: Python, Streamlit, PyPDF2, Rule-Based NLP
   - Streamlit application processing PDF resumes with multi-column text extraction.
   - Parsed candidate profiles against technical taxonomy dictionaries.

4. SentimentScope — Text Sentiment Analyzer
   Technologies: Python, Flask, TextBlob, Pandas, Bootstrap
   - Evaluated customer text for polarity and subjectivity scores.
   - Logged analytical sessions in Pandas DataFrames with instant CSV report downloads.

5. EventHub — Event Registration System
   Technologies: React, Node.js, Express.js, MySQL
   - Full-stack registration portal managing symposium event listings and attendee tracking.

--------------------------------------------------------------------------------
CERTIFICATIONS
--------------------------------------------------------------------------------
- Software Engineering and Agile Lifecycle Management — OnWingspan (Infosys Springboard), Sep 2025
- Python Programming & Software Foundations — Udemy
================================================================================`;
}
