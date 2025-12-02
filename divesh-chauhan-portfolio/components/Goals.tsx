import React from 'react';
import { GOALS } from '../constants';
import { Target, TrendingUp } from 'lucide-react';

const Goals: React.FC = () => {
  return (
    <section id="goals" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Career Roadmap</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    I believe in continuous improvement and transparent goal-setting. Here is what I am currently working towards.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                    <TrendingUp className="text-blue-500 mb-4" size={32} />
                    <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Focus Area</h3>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                        Transitioning from pure backend optimization to full-stack predictive architectures for EdTech.
                    </p>
                </div>
            </div>

            <div className="md:w-2/3 grid gap-6">
                {GOALS.map((goal) => (
                    <div key={goal.id} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Target size={16} className={goal.type === 'Short-term' ? 'text-green-500' : 'text-purple-500'} />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{goal.type} Goal</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{goal.title}</h3>
                            </div>
                            <span className="text-2xl font-bold text-slate-300 dark:text-slate-700">{goal.progress}%</span>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{goal.description}</p>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5">
                            <div 
                                className={`h-2.5 rounded-full ${goal.type === 'Short-term' ? 'bg-green-500' : 'bg-purple-500'}`} 
                                style={{ width: `${goal.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Goals;