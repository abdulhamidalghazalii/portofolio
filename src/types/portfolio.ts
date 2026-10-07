export interface StatItem {
  label: string;
  value: string;
  helper?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  email: string;
  avatarUrl?: string;
  location: string;
  phone?: string;
  university: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
  availability: string;
  stats: StatItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 1 - 100
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile & AI' | '3D & Graphics' | 'Open Source';
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  image: string;
  highlights: string[];
  role: string;
  period: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details: string[];
  courses?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
