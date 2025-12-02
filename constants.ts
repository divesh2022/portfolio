import { Project, Skill, Update, Goal } from './types';
import { Database, Layout, Brain, Server, Shield, Activity, GitBranch, Terminal } from 'lucide-react';

export const PROFILE = {
  name: "Divesh Chauhan",
  tagline: "Building robust, normalized ERP systems with clarity and reproducibility.",
  role: "Technical Architect & Systems Thinker",
  about: "I bridge the gap between complex data requirements and user-friendly interfaces. My expertise lies in designing normalized SQL schemas, building secure ERP backends, and deploying AI/ML workflows that drive educational and business productivity.",
  socials: {
    github: "https://github.com/divesh2022",
    linkedin: "https://linkedin.com/in/diveshchauhan",
    email: "mailto:dcdivesh4@gmail.com"
  }
};

export const SKILLS: Skill[] = [
  {
    id: 's1',
    name: 'Backend Architecture',
    category: 'Backend',
    level: 95,
    details: ['SQL Normalization (3NF)', 'Role-Based Access Control (RBAC)', 'Session Management', 'FastAPI'],
  },
  {
    id: 's2',
    name: 'Data Science & ML',
    category: 'Data/ML',
    level: 85,
    details: ['Python (Pandas, NumPy)', 'Synthetic Datasets', 'Model Evaluation', 'Categorical Encoding'],
  },
  {
    id: 's3',
    name: 'Frontend Engineering',
    category: 'Frontend',
    level: 80,
    details: ['Streamlit', 'React', 'Dashboard UX', 'Modular Router Design'],
  },
  {
    id: 's4',
    name: 'Database Security',
    category: 'Backend',
    level: 90,
    details: ['Secure SQL Auth', 'Triggers & Stored Procs', 'Audit Trails', 'pyodbc'],
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Enterprise ERP Normalization',
    category: 'ERP',
    description: 'A complete overhaul of a legacy data system into a fully normalized SQL Server architecture.',
    problem: 'Legacy system suffered from data redundancy, update anomalies, and slow query performance due to flat-file structures.',
    solution: 'Designed a 3NF schema with strict foreign key constraints, implemented RBAC via stored procedures, and migrated data using Python scripts.',
    impact: 'Reduced storage costs by 40%, improved query speed by 200%, and ensured 100% data integrity for financial reporting.',
    techStack: ['SQL Server', 'Python', 'FastAPI', 'Azure']
  },
  {
    id: 'p2',
    title: 'Student Performance Predictor',
    category: 'ML',
    description: 'Machine learning workflow to identify at-risk students based on early academic indicators.',
    problem: 'Educators lacked early warning systems to intervene before students failed key courses.',
    solution: 'Built a pipeline using Pandas for preprocessing, SMOTE for balancing synthetic data, and XGBoost for classification.',
    impact: 'Achieved 85% recall in identifying at-risk students, allowing faculty to intervene 3 weeks earlier in the semester.',
    techStack: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas']
  },
  {
    id: 'p3',
    title: 'Streamlit DB Management GUI',
    category: 'Portfolio',
    description: 'A modular, router-based Streamlit application for managing database records safely.',
    problem: 'Direct SQL access was risky for non-technical staff; existing tools were too complex.',
    solution: 'Developed a Python-based GUI with session-state management, dynamic forms based on schema introspection, and audit logging.',
    impact: 'Empowered administrative staff to manage records without IT support, reducing ticket volume by 60%.',
    techStack: ['Streamlit', 'Python', 'SQLAlchemy', 'Docker']
  }
];

export const UPDATES: Update[] = [
  {
    id: 'u1',
    date: '2023-10-15',
    title: 'Portfolio v2.0 Release',
    description: 'Complete redesign using React and Tailwind. Added interactive skills matrix and AI chatbot.',
    type: 'Major'
  },
  {
    id: 'u2',
    date: '2023-09-01',
    title: 'ERP Module Optimization',
    description: 'Refactored SQL triggers for the Inventory module, reducing transaction lock time.',
    type: 'Minor'
  },
  {
    id: 'u3',
    date: '2023-08-10',
    title: 'ML Pipeline Automations',
    description: 'Automated the retraining pipeline for the student success model using GitHub Actions.',
    type: 'Patch'
  }
];

export const GOALS: Goal[] = [
  {
    id: 'g1',
    title: 'Deploy ERP to Cloud',
    description: 'Migrate local ERP instance to AWS with containerized microservices.',
    type: 'Short-term',
    progress: 75
  },
  {
    id: 'g2',
    title: 'Master\'s in Data Science',
    description: 'Specialize in predictive analytics and NLP for educational technology.',
    type: 'Long-term',
    progress: 30
  },
  {
    id: 'g3',
    title: 'Advanced Dashboard UX',
    description: 'Implement real-time WebSocket updates for the admin dashboard.',
    type: 'Short-term',
    progress: 50
  }
];