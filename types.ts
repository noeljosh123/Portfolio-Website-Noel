export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  achievements: string[];
  featured?: boolean;
  repoUrl?: string;
  demoUrl?: string;
  challenge?: string;
  solution?: string;
  features?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  achievements: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  date: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  level?: string;
}