export type ProjectCategory = 'all' | 'web' | 'software' | 'ai-data' | 'personal' | 'academic';

export type ProjectType = 'personnel' | 'académique' | 'professionnel';

export type ProjectStatus = 'completed' | 'in-progress' | 'prototype' | 'planned';

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: {
    fr: string;
    en: string;
  };
  shortDescription: {
    fr: string;
    en: string;
  };
  problemStatement?: {
    fr: string;
    en: string;
  };
  category: ('web' | 'software' | 'ai-data' | 'personal' | 'academic')[];
  type: ProjectType;
  technologies: string[];
  role: {
    fr: string;
    en: string;
  };
  features: {
    fr: string[];
    en: string[];
  };
  challenges?: {
    fr: string;
    en: string;
  };
  status: ProjectStatus;
  image?: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured: boolean;
}

export type SkillCategory = 'web' | 'software' | 'ai-data' | 'tools' | 'transversal';

export interface Skill {
  name: string;
  status: 'acquired' | 'learning';
  category: SkillCategory;
  note?: {
    fr: string;
    en: string;
  };
}

export interface TimelineItem {
  id: string;
  period: {
    fr: string;
    en: string;
  };
  title: {
    fr: string;
    en: string;
  };
  organization: string;
  location?: string;
  type: 'education' | 'experience' | 'personal';
  description: {
    fr: string;
    en: string;
  };
  highlights: {
    fr: string[];
    en: string[];
  };
}

export interface Trait {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  iconName: string;
}
