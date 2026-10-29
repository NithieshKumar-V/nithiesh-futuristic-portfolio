export type ProjectCategory = 'all' | 'ai_ml' | 'fullstack' | 'python_systems' | 'iot_hardware';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  status: 'Completed' | 'Under Active Development' | 'Prototype / Academic';
  verificationNotes?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  visualType: 'roadwise' | 'code_analyzer' | 'resume_ai' | 'sentimentscope' | 'eventhub' | 'beingfit' | 'language_voice' | 'plant_water' | 'vehicle_rental';
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; tag: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
  current?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialNote?: string;
  topics: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}
