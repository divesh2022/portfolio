import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Code, Layout, Database, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'ERP' | 'ML' | 'Portfolio'>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = ['All', 'ERP', 'ML', 'Portfolio'];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Real-world solutions demonstrating normalization, automation, and analytics.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat as any)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            filter === cat 
                            ? 'bg-accent text-white shadow-lg shadow-blue-500/25' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    project={project} 
                    isExpanded={expandedId === project.id}
                    onToggle={() => toggleExpand(project.id)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
    project: Project;
    isExpanded: boolean;
    onToggle: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isExpanded, onToggle }) => {
    return (
        <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-accent/50 dark:hover:border-accent/50 transition-colors bg-slate-50 dark:bg-slate-900">
            <div className="p-6 md:p-8 cursor-pointer" onClick={onToggle}>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            {project.category === 'ERP' && <Database size={24} />}
                            {project.category === 'ML' && <Code size={24} />}
                            {project.category === 'Portfolio' && <Layout size={24} />}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{project.description}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                         {/* Tech Stack Pills - Visible on Desktop */}
                        <div className="hidden md:flex gap-2">
                            {project.techStack.slice(0, 3).map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-slate-200 dark:bg-slate-800 text-xs rounded text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500">
                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Expanded Content */}
            <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-slate-200 dark:border-slate-800 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white flex items-center mb-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span> Problem
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{project.problem}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white flex items-center mb-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Solution
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{project.solution}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white flex items-center mb-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Impact
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{project.impact}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Full Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-end gap-3">
                            <a href="#" className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:opacity-90 transition-opacity font-medium">
                                <Github size={18} />
                                View Code
                            </a>
                            <a href="#" className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium">
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;