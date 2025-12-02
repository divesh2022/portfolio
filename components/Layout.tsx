import React, { ReactNode } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PROFILE } from '../constants';

interface LayoutProps {
  children: ReactNode;
  darkMode: boolean;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Goals', href: '/goals' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = () => {
      setIsMenuOpen(false);
  }

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Divesh<span className="text-accent">.dev</span>
              </span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors ${
                    isActive(link.href) 
                      ? 'text-accent dark:text-accent' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                aria-label="Toggle Theme"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button
                onClick={toggleTheme}
                className="p-2 mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              >
                 {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleNavClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(link.href)
                      ? 'bg-slate-100 dark:bg-slate-800 text-accent dark:text-accent'
                      : 'text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Divesh Chauhan</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                    {PROFILE.tagline}
                </p>
            </div>
            <div className="flex space-x-6">
                <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors">
                    <Github size={24} />
                    <span className="sr-only">GitHub</span>
                </a>
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors">
                    <Linkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a href={PROFILE.socials.email} className="text-slate-500 hover:text-accent transition-colors">
                    <Mail size={24} />
                    <span className="sr-only">Email</span>
                </a>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-500 dark:text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Divesh Chauhan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;