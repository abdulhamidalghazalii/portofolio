import React from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  personal: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Sertifikasi', href: '#certifications' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#02050e] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-center justify-between">
          
          {/* Brand & Role */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-400" />
              <span className="font-extrabold text-xl text-white tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              {personal.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all flex items-center gap-2 text-xs font-semibold group"
              aria-label="Back to top"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          </div>
        
          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
