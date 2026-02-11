
import React from 'react';
import { ARMAN_INFO } from '../constants';

const Terminal: React.FC = () => {
  return (
    <div className="w-full glass-dark bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-slate-800 fira-code">
      {/* Terminal Title Bar */}
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">bash — arman-info.json</div>
        <div className="w-12" /> {/* spacer */}
      </div>

      {/* Terminal Content */}
      <div className="p-6 sm:p-10 text-sm sm:text-base leading-relaxed overflow-x-auto whitespace-pre">
        <div className="flex">
          <span className="text-purple-400 mr-2">const</span>
          <span className="text-blue-400">arman</span>
          <span className="text-white mr-2 ml-1">=</span>
          <span className="text-yellow-400">{`{`}</span>
        </div>

        <div className="pl-6 mt-1 flex">
          <span className="text-blue-300">name</span>
          <span className="text-white mx-2">:</span>
          <span className="text-green-400">"{ARMAN_INFO.name}"</span>
          <span className="text-white">,</span>
        </div>

        <div className="pl-6 mt-1 flex">
          <span className="text-blue-300">rank</span>
          <span className="text-white mx-2">:</span>
          <span className="text-green-400">"{ARMAN_INFO.rank}"</span>
          <span className="text-white">,</span>
        </div>

        <div className="pl-6 mt-1 flex">
          <span className="text-blue-300">status</span>
          <span className="text-white mx-2">:</span>
          <span className="text-green-400">"{ARMAN_INFO.status}"</span>
          <span className="text-white">,</span>
        </div>

        <div className="pl-6 mt-1">
          <div className="flex">
            <span className="text-blue-300">skills</span>
            <span className="text-white mx-2">:</span>
            <span className="text-yellow-400">[</span>
          </div>
          {ARMAN_INFO.skills.map((skill, i) => (
            <div key={skill} className="pl-6">
              <span className="text-green-400">"{skill}"</span>
              {i < ARMAN_INFO.skills.length - 1 && <span className="text-white">,</span>}
            </div>
          ))}
          <div className="text-yellow-400">]</div>
        </div>

        <div className="text-yellow-400 mt-1">{`};`}</div>

        <div className="mt-6 flex items-center">
          <span className="text-slate-500">$</span>
          <span className="text-white ml-2 animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
