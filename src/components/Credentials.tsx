import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2, ExternalLink, ShieldCheck, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { EducationItem, CertificationItem } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';

interface CredentialsProps {
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const Credentials: React.FC<CredentialsProps> = ({ education, certifications }) => {
  return (
    <section id="education" className="py-24 relative overflow-hidden z-10">
      {/* Anchor for certifications */}
      <span id="certifications" className="absolute -top-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>KREDENSIAL &amp; PENDIDIKAN // QUALIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Fondasi Akademik &amp; <span className="gradient-text-accent">Sertifikasi</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Kombinasi teori ilmu komputer terstruktur dari almamater dan validasi kompetensi industri nyata.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Latar Belakang Pendidikan</span>
              </div>
              <span className="text-xs font-mono text-slate-400">Pendidikan Formal</span>
            </div>

            {education.map((edu) => (
              <ScrollReveal key={edu.id} direction="left" delay={0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-500/30 shadow-xl space-y-5 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-all"
                >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-slate-300 mt-1">
                      <span className="font-semibold text-indigo-400 flex items-center gap-1">
                        {edu.institution}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <Award className="w-3 h-3" />
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Fokus Pembelajaran:
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

                {/* Key Coursework */}
                {edu.courses && (
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Mata Kuliah Inti:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Award className="w-5 h-5 text-indigo-400" />
                <span>Sertifikasi &amp; Lisensi</span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {certifications.length} Kredensial
              </span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <ScrollReveal key={cert.id} direction="right" delay={idx * 0.15}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/10 hover:border-cyan-500/30 shadow-xl space-y-4 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-all"
                  >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0 mt-0.5">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {cert.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-indigo-400 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 shrink-0">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {cert.issueDate}
                    </span>
                  </div>

                  {cert.credentialId && (
                    <div className="text-[11px] font-mono text-slate-400 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 flex items-center justify-between">
                      <span>Kredensial ID: {cert.credentialId}</span>
                      <span className="text-emerald-400 text-[10px]">Verified</span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-slate-400">Kompetensi Terkait:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                        >
                          <Check className="w-3 h-3 text-emerald-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {cert.credentialUrl && (
                    <div className="pt-3 border-t border-white/5">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white transition-colors"
                      >
                        <span>Lihat Bukti Kredensial</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
