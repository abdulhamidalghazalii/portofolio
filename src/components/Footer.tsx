import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  personal: PersonalInfo;
}

const currentYear = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Credentials', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#DEDEDE] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-[#DEDEDE]">
          <div className="space-y-1">
            <span className="font-bold text-lg text-[#111111] uppercase tracking-tight block">
              {personal.name}
            </span>
            <span className="text-xs font-mono text-[#777777]">
              {personal.role} &bull; {personal.university}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#DEDEDE] text-xs font-mono text-[#111111] hover:bg-[#F3F3F3] transition-colors"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle Row: Navigation Links */}
        <div className="py-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#777777] hover:text-[#111111] hover:underline transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Row: Copyright & Socials */}
        <div className="pt-6 border-t border-[#DEDEDE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <span>
            &copy; {currentYear} {personal.name}. Editorial Minimalist Portfolio.
          </span>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#777777] hover:text-[#111111] transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-[#DEDEDE]">/</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#777777] hover:text-[#111111] transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
