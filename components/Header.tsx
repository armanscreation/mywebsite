
import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  primaryColor: string;
  setPrimaryColor: (val: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, primaryColor }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 flex items-center gap-8 shadow-lg border border-white/20">
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-sm font-medium hover:text-[var(--primary-color)] transition-colors duration-200"
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Header;
