import React from 'react';
import { User, MapPin, GraduationCap, CheckCircle2, Code2, Sparkles } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';

interface AboutProps {
  personal: PersonalInfo;
}

export const About: React.FC<AboutProps> = ({ personal }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 ambient-glow-indigo rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>TENTANG SAYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Memadukan Rekayasa Logika & <span className="gradient-text-accent">Estetika Digital</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Dedikasi penuh untuk menghadirkan solusi perangkat lunak yang andal, scalable, dan memberikan dampak nyata.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Narrative Bio & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Perjalanan & Filosofi Coding</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personal.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Core Principles */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Prinsip Utama:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  {[
                    "Clean Code & Architecture Teruji",
                    "Aksesibilitas & User Experience Tinggi",
                    "Performa Optimal & Minimal Overheads",
                    "Kolaborasi Terbuka & Pembelajar Cepat"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metadata Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 glass-panel-hover">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Almamater</div>
                  <div className="text-sm font-semibold text-white">{personal.university}</div>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 glass-panel-hover">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Domisili</div>
                  <div className="text-sm font-semibold text-white">{personal.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Showcase & Interactive Code Snapshot */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Visual Profile Card */}
            {personal.avatarUrl && (
              <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/10 shadow-xl flex items-center gap-5 glass-panel-hover">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 overflow-hidden shadow-lg shadow-indigo-500/20">
                    <img
                      src={personal.avatarUrl}
                      alt={personal.name}
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-base sm:text-lg font-bold text-white">
                    {personal.name}
                  </div>
                  <div className="text-xs text-indigo-400 font-medium">
                    🎓 {personal.university}
                  </div>
                  <div className="text-xs text-slate-300">
                    🏢 PKL: <strong>PT BOLTZ INDONESIA</strong> (3 Bulan)
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    📍 {personal.location}
                  </div>
                </div>
              </div>
            )}

            {/* Code Snapshot Card */}
            <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex-1 flex flex-col">
              {/* Window Controls Header */}
              <div className="bg-[#0b101b] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>developer.profile.ts</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                  TypeScript
                </span>
              </div>

              {/* Code Content */}
              <div className="p-5 sm:p-6 bg-[#070b14]/90 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto flex-1">
                <div className="text-indigo-400">
                  <span className="text-purple-400">const</span> developer = &#123;
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-sky-300">fullName</span>: <span className="text-emerald-300">"{personal.name}"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-sky-300">primaryRole</span>: <span className="text-emerald-300">"{personal.role}"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-sky-300">location</span>: <span className="text-emerald-300">"{personal.location}"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-sky-300">almaMater</span>: <span className="text-emerald-300">"{personal.university}"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-sky-300">internship</span>: &#123;
                </div>
                <div className="pl-8 text-amber-200">
                  company: <span className="text-emerald-300">"PT BOLTZ INDONESIA"</span>,<br />
                  duration: <span className="text-emerald-300">"3 Bulan"</span>,<br />
                  project: <span className="text-emerald-300">"Manajemen Data Absensi"</span>
                </div>
                <div className="pl-4 text-slate-300">&#125;,</div>
                <div className="pl-4 text-slate-300">
                  <span className="text-sky-300">coreStrengths</span>: [
                </div>
                <div className="pl-8 text-amber-200">
                  "Full-Stack Web Development",<br />
                  "Laravel & Node.js Backend",<br />
                  "Google Apps Script (AppScript)",<br />
                  "React, TypeScript, Tailwind",<br />
                  "Database Management & 3D Web"
                </div>
                <div className="pl-4 text-slate-300">],</div>
                <div className="pl-4 text-slate-300">
                  <span className="text-sky-300">passion</span>: <span className="text-emerald-300">"Membangun solusi perangkat lunak yang berdampak nyata"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-sky-300">isAvailableForHire</span>: <span className="text-rose-400">true</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-sky-300">sayHello</span>: () =&gt; &#123;
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-purple-400">return</span> <span className="text-emerald-300">"Silakan hubungi saya untuk kolaborasi!"</span>;
                </div>
                <div className="pl-4 text-slate-300">&#125;</div>
                <div className="text-indigo-400">&#125;;</div>
                <div className="mt-4 text-slate-400 text-[11px] border-t border-white/5 pt-3">
                  // Status: Ready for new opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
