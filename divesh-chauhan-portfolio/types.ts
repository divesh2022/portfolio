export interface Project {
  id: string;
  title: string;
  category: 'ERP' | 'ML' | 'Portfolio' | 'Backend';
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'Backend' | 'Frontend' | 'Data/ML' | 'DevOps';
  level: number; // 0-100
  icon?: string;
  details: string[];
}

export interface Update {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'Major' | 'Minor' | 'Patch';
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  type: 'Short-term' | 'Long-term';
  progress: number; // 0-100
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}