export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string[];
  description: string;
  longDescription: string;
  tags: string[];
  accentColor: string;
  bgColor: string;
  stats?: { label: string; value: string }[];
  features: string[];
  techStack: string[];
  url?: string;
  demoUrl?: string;
  status: string;
  type: 'entertainment' | 'security' | 'social' | 'productivity' | 'developer';
  icon: string;
  image?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  accentColor: string;
  iconName: string;
}

export interface TechNode {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'infrastructure' | 'realtime';
  color: string;
  ring: 1 | 2 | 3;
  angle: number; // initial orbital angle
  description: string;
  iconType: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarColor?: string;
  review: string;
  quote?: string;
  rating: number;
  highlight?: string;
  image?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  color: string;
  accent: string;
  keyAction: string;
  iconType: string;
}

export interface ValuePillar {
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  bgLight: string;
  tag: string;
}

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  avatarColor?: string;
  github?: string;
  linkedin?: string;
  x?: string;
}

export interface InquiryFormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}
