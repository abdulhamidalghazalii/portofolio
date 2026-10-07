import React, { useState } from 'react';
import { Cpu, Check, Layers, Sparkles } from 'lucide-react';
import type { SkillCategory } from '../types/portfolio';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryNames = ['All', ...categories.map((c) => c.category)];

  const displayedCategories =
    selectedCategory === 'All'
      ? categories
      : categories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 ambient-glow-cyan rounded-full blur-3xl opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>KEAHLIAN TEKNIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Stack Teknologi & <span className="gradient-text-accent">Tooling Modern</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Kombinasi teknologi yang telah teruji untuk membangun arsitektur aplikasi yang cepat, terukur, dan menyenangkan untuk digunakan.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categoryNames.map((name) => {
              const isSelected = selectedCategory === name;
              return (
                <button
                  key={name}
                  onClick={() => setSelectedCategory(name)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/30'
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {name === 'All' ? 'Semua Kategori' : name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {displayedCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl glass-panel-hover flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {cat.items.length} Techs
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  {cat.description}
                </p>

                {/* Skill List with Progress Bars */}
                <div className="space-y-4">
                  {cat.items.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 font-medium text-slate-200">
                          <span>{skill.name}</span>
                          {skill.highlight && (
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                              <Sparkles className="w-2.5 h-2.5 text-indigo-400" />
                              Core
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-xs text-slate-400">{skill.level}%</span>
                      </div>
                      
                      {/* Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden p-[1px]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag pill cloud */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {cat.items.map((s, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5 flex items-center gap-1"
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
