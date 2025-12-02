import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  // Transform data for chart
  const chartData = SKILLS.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Expertise</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A balanced mix of backend robustness, data science analytics, and frontend usability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Skills Chart */}
          <div className="h-[400px] w-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-4">
            <h3 className="text-lg font-semibold text-center mb-4 text-slate-700 dark:text-slate-300">Proficiency Radar</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                <PolarGrid stroke="#94a3b8" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="#3b82f6"
                  fillOpacity={0.4}
                />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Detailed Cards */}
          <div className="space-y-6">
            {SKILLS.map((skill) => (
              <div 
                key={skill.id}
                className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all cursor-default"
              >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                        {skill.name}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                        {skill.category}
                    </span>
                </div>
                
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-4">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    {skill.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle2 size={14} className="text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                        </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;