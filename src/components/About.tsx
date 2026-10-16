import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  personal: PersonalInfo;
}

export const About: React.FC<AboutProps> = ({ personal }) => {
  const engineeringPillars = [
    {
      index: "01",
      title: "Frontend Engineering",
      description: "Membangun antarmuka web yang terstruktur, cepat, dan mudah diakses pengguna menggunakan React, TypeScript, dan Tailwind CSS."
    },
    {
      index: "02",
      title: "Backend & API Systems",
      description: "Merancang logika bisnis server, otentikasi data yang aman, dan endpoint RESTful API terstandarisasi dengan Laravel dan PHP."
    },
    {
      index: "03",
      title: "Database Architecture",
      description: "Perancangan skema relasional, normalisasi data, dan penyusunan query optimal pada PostgreSQL dan MySQL untuk efisiensi sistem."
    },
    {
      index: "04",
      title: "Workflow & Reliability",
      description: "Penerapan version control Git, pengujian endpoint via Postman, kontainerisasi Docker, serta manajemen alur rilis aplikasi ke server."
    }
  ];

  const workPrinciples = [
    "Struktur kode bersih, modular, dan mudah dipelihara",
    "Fokus pada efisiensi pemrosesan dan integritas basis data",
    "Antarmuka yang fungsional, jelas, dan minim distraksi",
    "Kesiapan berkolaborasi tim dan adaptasi teknologi secara terarah"
  ];

  return (
    <section id="about" className="py-24 border-b border-[#DEDEDE] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#111111] mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
                [03 // BIOGRAPHY &amp; PROFILE]
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#111111] uppercase tracking-tight">
                About &amp; Focus
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#777777] max-w-md font-sans">
              Latar belakang profesional, fokus rekayasa perangkat lunak, dan pendekatan dalam pengembangan sistem web.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Natural Biography & Background */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="space-y-5 text-base sm:text-lg text-[#111111] font-light leading-relaxed">
                {personal.fullBio.map((paragraph, index) => (
                  <p key={index} className="text-[#333333] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Work Principles Section */}
              <div className="pt-8 border-t border-[#DEDEDE] space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#777777]">
                  [PRINSIP KERJA &amp; METODOLOGI]
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {workPrinciples.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 border border-[#DEDEDE] bg-[#F3F3F3] text-xs font-mono text-[#111111] flex items-center gap-2"
                    >
                      <span className="font-bold">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Profile Summary Table */}
              <div className="pt-8 border-t border-[#DEDEDE] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#777777] block text-[10px] uppercase">Almamater</span>
                  <span className="font-semibold text-[#111111]">{personal.university}</span>
                </div>
                <div>
                  <span className="text-[#777777] block text-[10px] uppercase">Lokasi / Domisili</span>
                  <span className="font-semibold text-[#111111]">{personal.location}</span>
                </div>
                <div>
                  <span className="text-[#777777] block text-[10px] uppercase">Status Kerja</span>
                  <span className="font-semibold text-[#111111]">Open for Opportunities</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 Pillars of Competence */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-2 flex justify-between">
                <span>CORE CAPABILITIES</span>
                <span>[4 DOMAINS]</span>
              </div>

              <div className="space-y-4">
                {engineeringPillars.map((pillar) => (
                  <div
                    key={pillar.index}
                    className="p-5 border border-[#DEDEDE] bg-[#FFFFFF] hover:border-[#111111] transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#777777]">
                      <span className="font-bold text-[#111111]">CAPABILITY // {pillar.index}</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#111111]" />
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#111111]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#777777] leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
