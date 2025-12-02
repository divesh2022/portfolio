import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Build Systems That Matter</h2>
        <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
          Whether you need a robust ERP backend, a Streamlit dashboard, or just want to chat about SQL normalization, I'm always open to new conversations.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
                href={PROFILE.socials.email}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-blue-600 rounded-lg font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-blue-500/30"
            >
                <Mail />
                Send Email
            </a>
            <div className="flex gap-4 justify-center">
                <a 
                    href={PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                    aria-label="LinkedIn"
                >
                    <Linkedin />
                </a>
                <a 
                    href={PROFILE.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                    aria-label="GitHub"
                >
                    <Github />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;