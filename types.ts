
export interface Metric {
  value: string;
  label: string;
  context?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface CaseStudy {
  slug: string;
  title: string;
  organization: string;
  role: string;
  duration: string;
  location: string;
  heroImage?: string;
  metrics: Metric[];
  challenge: {
    problem: string;
    constraints: string[];
  };
  approach: {
    strategy: string;
    tools: string[];
    stakeholders: string[];
  };
  outcome: {
    results: string;
    sustainability: string;
    scalability: string;
  };
  tags: string[];
  featured: boolean;
  content?: string; // Markdown/HTML content
}

export interface Partnership {
  organization: string;
  role: string;
  impact: string;
}

export interface TrainingSession {
  date: string;
  program: string;
  audience: string;
  outcome: string;
}

export interface IdentityCard {
  title: string;
  label: string;
  description: string;
  icon: string;
}

export interface Expertise {
  title: string;
  description: string;
  tags: string[];
}

export enum TabType {
  BIO = 'BIO',
  COMMUNITY = 'COMMUNITY',
  IMPACT = 'IMPACT',
  INNOVATIONS = 'INNOVATIONS',
  TRAINING = 'TRAINING'
}
