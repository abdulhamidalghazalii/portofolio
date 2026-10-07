import React from 'react';
import { Award, ExternalLink, Calendar, Check, ShieldCheck } from 'lucide-react';
import type { CertificationItem } from '../types/portfolio';

interface CertificationsProps {
  certifications: CertificationItem[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 ambient-glow-cyan rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>SERTIFIKASI PROFESIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Lisensi & <span className="gradient-text-accent">Kredensial Terverifikasi</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Sertifikasi industri terkemuka yang memvalidasi kompetensi teknis, arsitektur cloud, dan rekayasa grafika modern.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl glass-panel-hover border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    {cert.issueDate}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-400 font-medium mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-slate-400 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
                    ID: {cert.credentialId}
                  </div>
                )}

                {/* Skills tags */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-slate-400">Kompetensi Teruji:</div>
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
              </div>

              {/* Verify Link */}
              {cert.credentialUrl && (
                <div className="pt-5 mt-4 border-t border-white/5">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-300 hover:text-white transition-colors"
                  >
                    <span>Verifikasi Kredensial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
