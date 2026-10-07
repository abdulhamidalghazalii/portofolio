import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import type { ExperienceItem } from '../types/portfolio';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/30">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 ambient-glow-indigo rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PENGALAMAN KERJA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Perjalanan Karir & <span className="gradient-text-accent">Kontribusi Nyata</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Rekam jejak kontribusi engineering profesional dalam membangun sistem berskala tinggi dan memimpin inisiatif teknologi.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-sky-500 -translate-x-1/2 opacity-30 sm:opacity-50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#030712] border-2 border-indigo-500 shadow-[0_0_12px_#6366f1] flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping" />
                  </div>

                  {/* Empty spacer for alternating grid on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className="glass-panel p-6 sm:p-7 rounded-3xl glass-panel-hover border border-white/10 shadow-xl space-y-4">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 mt-1">
                          <span className="flex items-center gap-1 font-semibold text-indigo-400">
                            <Building2 className="w-3.5 h-3.5" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          Pencapaian Utama:
                        </div>
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Used */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
