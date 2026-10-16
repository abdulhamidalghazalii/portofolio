import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import type { EducationItem, CertificationItem } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';

interface CredentialsProps {
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const Credentials: React.FC<CredentialsProps> = ({ education, certifications }) => {
  return (
    <section id="education" className="py-24 border-b border-[#DEDEDE] bg-[#FFFFFF]">
      <span id="certifications" className="sr-only">Certifications</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#111111] mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
                [06 // ACADEMIC &amp; CREDENTIALS]
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#111111] uppercase tracking-tight">
                Education &amp; Credentials
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#777777] max-w-md font-sans">
              Fondasi ilmu komputer formal dari almamater universitas dan verifikasi kompetensi rekayasa perangkat lunak.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#DEDEDE]">
              <h3 className="text-base font-bold text-[#111111] uppercase font-mono">
                Pendidikan Formal
              </h3>
              <span className="text-xs font-mono text-[#777777]">S1 TELKOM UNIVERSITY</span>
            </div>

            {education.map((edu) => (
              <ScrollReveal key={edu.id} direction="left" delay={0.1}>
                <div className="border border-[#DEDEDE] p-6 sm:p-7 space-y-5 bg-[#FFFFFF] hover:border-[#111111] transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 pb-4 border-b border-[#DEDEDE]">
                    <div>
                      <h4 className="text-xl font-bold text-[#111111]">
                        {edu.degree}
                      </h4>
                      <div className="text-xs font-mono text-[#777777] mt-1">
                        {edu.institution} &bull; {edu.location}
                      </div>
                    </div>

                    <span className="px-2.5 py-1 text-xs font-mono border border-[#DEDEDE] bg-[#F3F3F3] text-[#111111]">
                      {edu.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-[#777777] block">
                      Fokus Pembelajaran:
                    </span>
                    <div className="space-y-2 text-xs sm:text-sm text-[#111111]">
                      {edu.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-1" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Courses */}
                  {edu.courses && (
                    <div className="pt-4 border-t border-[#DEDEDE] space-y-2">
                      <span className="text-xs font-mono uppercase text-[#777777] block">
                        Mata Kuliah Inti:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.courses.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-1 text-xs font-mono bg-[#F3F3F3] border border-[#DEDEDE] text-[#111111]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#DEDEDE]">
              <h3 className="text-base font-bold text-[#111111] uppercase font-mono">
                Sertifikasi &amp; Lisensi
              </h3>
              <span className="text-xs font-mono text-[#777777]">{certifications.length} Credentials</span>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <ScrollReveal key={cert.id} direction="right" delay={idx * 0.1}>
                  <div className="border border-[#DEDEDE] p-6 sm:p-7 space-y-4 bg-[#FFFFFF] hover:border-[#111111] transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-[#DEDEDE]">
                      <div>
                        <h4 className="text-lg font-bold text-[#111111]">
                          {cert.title}
                        </h4>
                        <div className="text-xs font-mono text-[#777777] mt-1">
                          Issuer: <span className="text-[#111111] font-medium">{cert.issuer}</span>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 text-xs font-mono border border-[#DEDEDE] bg-[#F3F3F3] text-[#111111]">
                        {cert.issueDate}
                      </span>
                    </div>

                    {cert.credentialId && (
                      <div className="p-2.5 border border-[#DEDEDE] bg-[#F9F9F9] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#777777]">ID: {cert.credentialId}</span>
                        <span className="text-[#111111] font-semibold">[VERIFIED]</span>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono uppercase text-[#777777] block">
                        Kompetensi Tervalidasi:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 text-xs font-mono bg-[#F3F3F3] text-[#111111] border border-[#DEDEDE]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {cert.credentialUrl && (
                      <div className="pt-3 border-t border-[#DEDEDE]">
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#111111] hover:underline"
                        >
                          <span>Buka Dokumen Resmi</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
