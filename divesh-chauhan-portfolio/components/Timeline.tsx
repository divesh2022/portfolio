import React from 'react';
import { UPDATES } from '../constants';
import { GitCommit, Tag } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Release Notes & Updates</h2>
        
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12">
            {UPDATES.map((update) => (
                <div key={update.id} className="relative pl-8 md:pl-12 group">
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-0 p-1 bg-slate-50 dark:bg-slate-900">
                        <div className={`w-3 h-3 rounded-full border-2 ${
                            update.type === 'Major' ? 'bg-blue-500 border-blue-500' :
                            update.type === 'Minor' ? 'bg-transparent border-green-500' :
                            'bg-transparent border-slate-400'
                        }`}></div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <span className="text-sm font-mono text-slate-400">{update.date}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider w-fit ${
                             update.type === 'Major' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                             update.type === 'Minor' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                             'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                        }`}>
                            v{update.type}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                        {update.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                        {update.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;