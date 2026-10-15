import React, { useState } from 'react';
import { Cpu, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SkillCategory } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';

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
    <section id="skills" className="py-24 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-3 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
              <Cpu className="w-3.5 h-3.5" />
              <span>KEAHLIAN TEKNIS // TECH STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Stack Teknologi &amp; <span className="gradient-text-accent">Tooling Modern</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Perangkat dan teknologi teruji yang digunakan dalam membangun sistem nyata, otomasi bisnis, dan antarmuka web modern.
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
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 border border-sky-400/40'
                        : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {name === 'All' ? 'Semua Kategori' : name}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Categories Grid with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {displayedCategories.map((cat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-6 sm:p-7 rounded-3xl flex flex-col justify-between shadow-xl border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-all h-full"
              >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    {cat.items.length} Teknologi
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  {cat.description}
                </p>

                {/* Modern Scannable Skill Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-2 ${
                        skill.highlight
                          ? 'bg-indigo-500/10 border-indigo-500/30 text-white shadow-sm shadow-indigo-500/10'
                          : 'bg-white/[0.03] border-white/5 text-slate-300 hover:border-white/15 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 ${
                            skill.highlight ? 'text-indigo-400' : 'text-emerald-400'
                          }`}
                        />
                        <span className="text-xs sm:text-sm font-medium truncate">
                          {skill.name}
                        </span>
                      </div>

                      {skill.highlight && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-mono shrink-0">
                          <Sparkles className="w-2.5 h-2.5 text-indigo-400" />
                          Core
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Status: Teruji di Proyek & Akademik</span>
                <span className="text-emerald-400">✓ Aktif Digunakan</span>
              </div>
            </motion.div>
          </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

