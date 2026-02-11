
import React from 'react';
import { CONTACT_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Contact <span className="text-[var(--primary-color)]">Object</span></h2>
        <div className="flex-grow h-[1px] bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(CONTACT_DATA).map(([key, value]) => (
          <div 
            key={key} 
            className="group glass p-6 rounded-2xl hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg"
          >
            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 fira-code">
              key: <span className="text-[var(--primary-color)]">{key}</span>
            </div>
            <div className="text-lg font-semibold text-slate-800 dark:text-slate-200 break-words">
              {key === 'github' ? (
                <a 
                  href={`https://${value}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[var(--primary-color)] hover:underline flex items-center gap-2"
                >
                  {value}
                  <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                value
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[var(--primary-color)] p-8 rounded-3xl text-white shadow-xl flex flex-col items-center gap-6 text-center transform transition-transform hover:scale-[1.01]">
        <h3 className="text-2xl font-bold">Ready for the next big thing?</h3>
        <p className="max-w-md opacity-90">I'm currently looking for new opportunities and creative collaborations. Drop me a line!</p>
        <button 
          onClick={() => window.location.href = `mailto:${CONTACT_DATA.email}`}
          className="bg-white text-[var(--primary-color)] px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        >
          Send Message
        </button>
      </div>
    </section>
  );
};

export default Contact;
