import React from 'react';
import type { ExperienceItem } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 border-b border-[#DEDEDE] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#111111] mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
                [04 // PROFESSIONAL RECORD]
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#111111] uppercase tracking-tight">
                Experience
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#777777] max-w-md font-sans">
              Pengalaman kerja praktis dalam perancangan, pengembangan sistem, dan deployment aplikasi web di lingkungan industri.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const expIndex = String(index + 1).padStart(2, '0');

            return (
              <ScrollReveal key={exp.id} direction="up" delay={0.1}>
                <article className="border border-[#DEDEDE] bg-[#FFFFFF] transition-all hover:border-[#111111]">
                  {/* Top Metadata Header */}
                  <div className="flex flex-wrap items-center justify-between px-6 py-3 border-b border-[#DEDEDE] bg-[#F3F3F3] text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#111111]">RECORD {expIndex}</span>
                      <span className="text-[#DEDEDE]">&bull;</span>
                      <span className="text-[#111111]">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#777777]">
                      <span>{exp.period}</span>
                      <span>/</span>
                      <span className="text-[#111111]">{exp.location}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#DEDEDE]">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="text-xs font-mono text-[#777777] mt-1">
                          {exp.company} &mdash; <span className="text-[#111111] font-semibold">{exp.type}</span>
                        </div>
                      </div>

                      <span className="inline-block px-3 py-1 text-xs font-mono border border-[#DEDEDE] bg-[#FFFFFF] text-[#111111] self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    {/* Scope & Role Narrative */}
                    <p className="text-sm sm:text-base text-[#333333] leading-relaxed max-w-3xl">
                      {exp.description}
                    </p>

                    {/* Key Contributions & Achievements */}
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#777777]">
                        [TANGGUNG JAWAB &amp; PENCAPAIAN UTAMA]
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#111111]">
                        {exp.achievements.map((ach, aIdx) => (
                          <div
                            key={aIdx}
                            className="p-3.5 border border-[#DEDEDE] bg-[#F9F9F9] flex items-start gap-2.5"
                          >
                            <span className="font-mono font-bold text-[#777777] text-xs">
                              0{aIdx + 1}.
                            </span>
                            <span className="leading-snug">{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Deployed */}
                    <div className="pt-4 border-t border-[#DEDEDE]">
                      <span className="text-[11px] font-mono uppercase text-[#777777] block mb-2">
                        Teknologi &amp; Tools yang Digunakan:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-xs font-mono bg-[#F3F3F3] text-[#111111] border border-[#DEDEDE]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
