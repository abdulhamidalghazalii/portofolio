import React, { useState } from 'react';
import type { SkillCategory } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const tabNames = ['All', ...categories.map((c) => c.category)];

  const displayedCategories =
    activeTab === 'All'
      ? categories
      : categories.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="py-24 border-b border-[#DEDEDE] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#111111] mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
                [05 // TECHNICAL TOOLKIT]
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#111111] uppercase tracking-tight">
                Technical Skills
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-xs sm:text-sm text-[#777777] max-w-md font-sans">
                Teknologi yang telah diimplementasikan dalam pengembangan proyek nyata dan fondasi akademik.
              </p>

              {/* Minimalist Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1 border border-[#DEDEDE] p-1 bg-[#F3F3F3]">
                {tabNames.map((name) => {
                  const isSelected = activeTab === name;
                  return (
                    <button
                      key={name}
                      onClick={() => setActiveTab(name)}
                      className={`px-3 py-1 text-xs font-mono transition-colors ${
                        isSelected
                          ? 'bg-[#111111] text-[#FFFFFF] font-semibold'
                          : 'text-[#777777] hover:text-[#111111]'
                      }`}
                    >
                      {name === 'All' ? 'All Stacks' : name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Categories Grid (Clean Editorial Multi-Column List) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {displayedCategories.map((cat, idx) => {
            const catIndex = String(idx + 1).padStart(2, '0');

            return (
              <ScrollReveal key={cat.category} direction="up" delay={idx * 0.1}>
                <div className="border border-[#DEDEDE] bg-[#FFFFFF] p-6 sm:p-8 space-y-6 hover:border-[#111111] transition-colors">
                  {/* Category Title & Index */}
                  <div className="flex items-start justify-between pb-4 border-b border-[#DEDEDE]">
                    <div>
                      <span className="text-xs font-mono text-[#777777] block mb-1">
                        INDEX // {catIndex}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#777777] px-2 py-1 bg-[#F3F3F3] border border-[#DEDEDE]">
                      {cat.items.length} Skills
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#777777]">
                    {cat.description}
                  </p>

                  {/* Skills Table / List without arbitrary percentage bars */}
                  <div className="divide-y divide-[#DEDEDE] border-y border-[#DEDEDE]">
                    {cat.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="py-2.5 flex items-center justify-between text-xs sm:text-sm"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-[#777777] w-6">
                            {String(sIdx + 1).padStart(2, '0')}
                          </span>
                          <span className="font-medium text-[#111111]">
                            {skill.name}
                          </span>
                        </div>

                        {skill.highlight ? (
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 border border-[#111111] bg-[#111111] text-[#FFFFFF]">
                            Primary Focus
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-[#777777] uppercase">
                            Proficient
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-[#777777]">
                    <span>STATUS: VALIDATED IN CODEBASE</span>
                    <span className="text-[#111111] font-semibold">ACTIVE</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
