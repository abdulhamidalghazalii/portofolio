import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import type { EducationItem } from '../types/portfolio';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 ambient-glow-indigo rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>LATAR BELAKANG PENDIDIKAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Pendidikan & <span className="gradient-text-accent">Fondasi Akademik</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Landasan teori ilmu komputer yang kuat, logika komputasi mendalam, dan dedikasi terhadap pemecahan masalah kompleks.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl glass-panel-hover border border-white/10 shadow-xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 mt-1">
                    <span className="font-semibold text-indigo-400 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {edu.period}
                  </span>
                  {edu.gpa && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      <Award className="w-3.5 h-3.5" />
                      {edu.gpa}
                    </span>
                  )}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Fokus & Pencapaian Akademik:
                </h4>
                <div className="space-y-2">
                  {edu.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework list */}
              {edu.courses && (
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Mata Kuliah Utama:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
