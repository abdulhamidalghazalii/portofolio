import React from 'react';
import { User, CheckCircle2, Layers, Server, Database, Terminal, GraduationCap, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PersonalInfo } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  personal: PersonalInfo;
}

export const About: React.FC<AboutProps> = ({ personal }) => {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      title: "Frontend Development",
      description: "Membangun antarmuka web modern, responsif, dan ramah pengguna dengan React, JavaScript (ES6+), Tailwind CSS, dan Bootstrap.",
      accent: "border-sky-500/30 hover:shadow-sky-500/10",
    },
    {
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      title: "Backend & RESTful API",
      description: "Mengembangkan arsitektur server, integrasi REST API, otentikasi data aman, dan operasi CRUD terstruktur menggunakan Laravel dan PHP.",
      accent: "border-indigo-500/30 hover:shadow-indigo-500/10",
    },
    {
      icon: <Database className="w-5 h-5 text-purple-400" />,
      title: "Basis Data Relasional",
      description: "Merancang skema database, normalisasi data, serta eksekusi query efisien pada PostgreSQL, MySQL, dan SQLite untuk kebutuhan sistem bisnis.",
      accent: "border-purple-500/30 hover:shadow-purple-500/10",
    },
    {
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      title: "Tools, Docker & Deployment",
      description: "Penerapan workflow kolaborasi Git & GitHub, kontainerisasi Docker, validasi API melalui Postman, serta proses deployment server.",
      accent: "border-emerald-500/30 hover:shadow-emerald-500/10",
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-3 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
              <User className="w-3.5 h-3.5" />
              <span>TENTANG SAYA // OVERVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Latar Belakang & <span className="gradient-text-accent">Fokus Rekayasa</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Dedikasi dalam membangun aplikasi web yang andal, efisien, dan memberikan solusi nyata bagi kebutuhan operasional.
            </p>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Narrative & Work Principles with ScrollReveal */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <ScrollReveal direction="left" delay={0.1} className="h-full">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-5 shadow-xl flex-1 flex flex-col justify-between border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-full pointer-events-none" />

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-sky-400" />
                    <span>Profil & Ringkasan Profesional</span>
                  </h3>

                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {personal.fullBio.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Core Principles */}
                <div className="pt-6 border-t border-white/10 mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3.5 flex items-center gap-1.5">
                    <span className="text-sky-400">&gt;</span>
                    <span>Prinsip Kerja yang Diterapkan:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    {[
                      "Struktur Kode Bersih & Terorganisir",
                      "Performa Cepat & Bebas Kendala",
                      "UI/UX Intuitif & Aksesibel",
                      "Siap Kolaborasi Tim & Belajar Cepat"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Pillars of Expertise with Staggered Entrance */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between px-1">
              <span>KOMPETENSI TEKNOLOGI UTAMA</span>
              <span className="text-sky-400 font-mono">[SYS // READY]</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {pillars.map((pillar, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.15 + idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className={`glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between space-y-3 border border-white/10 shadow-lg ${pillar.accent} transition-all h-full`}
                  >
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 w-fit">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1.5">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Identity Summary Strip */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-8 glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-500 font-mono text-[10px]">Pendidikan</div>
                <div className="font-semibold text-white">{personal.university}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-500 font-mono text-[10px]">Domisili</div>
                <div className="font-semibold text-white">{personal.location}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-500 font-mono text-[10px]">Ketersediaan</div>
                <div className="font-semibold text-white">{personal.availability}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

