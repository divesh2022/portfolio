import React from 'react';
import { ArrowRight, Database, Layout, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-20 pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Hi, I'm {PROFILE.name}. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {PROFILE.role}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PROFILE.tagline} {PROFILE.about}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-accent hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
                View Work
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Contact Me
              </Link>
            </div>
          </div>

          {/* Visual/Graphic Side */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none animate-fade-in delay-200">
             <div className="relative rounded-2xl bg-slate-900 shadow-2xl border border-slate-800 overflow-hidden p-6 aspect-[4/3] flex flex-col justify-center">
                {/* Code Snippet Look */}
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2 font-mono text-sm text-slate-300">
                    <div className="flex">
                        <span className="text-purple-400 mr-2">class</span>
                        <span className="text-yellow-300">SystemArchitect</span>:
                    </div>
                    <div className="pl-4 flex">
                        <span className="text-blue-400 mr-2">def</span>
                        <span className="text-green-300">__init__</span>(self):
                    </div>
                    <div className="pl-8">
                        self.stack = [<span className="text-green-300">'Python'</span>, <span className="text-green-300">'SQL'</span>, <span className="text-green-300">'React'</span>]
                    </div>
                    <div className="pl-8">
                        self.focus = <span className="text-green-300">'Scalability'</span>
                    </div>
                    <div className="pl-4 mt-2 flex">
                        <span className="text-blue-400 mr-2">def</span>
                        <span className="text-green-300">optimize_workflow</span>(self, data):
                    </div>
                    <div className="pl-8 text-slate-500">
                        # Normalizing data structures...
                    </div>
                    <div className="pl-8">
                        <span className="text-purple-400">return</span> data.normalize(3NF)
                    </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -right-4 top-10 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg animate-[bounce_3s_infinite]">
                    <Database className="text-blue-400" size={24} />
                </div>
                <div className="absolute left-10 bottom-10 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg animate-[bounce_4s_infinite]">
                    <Server className="text-green-400" size={24} />
                </div>
                <div className="absolute right-10 bottom-20 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg animate-[bounce_5s_infinite]">
                    <Layout className="text-purple-400" size={24} />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;