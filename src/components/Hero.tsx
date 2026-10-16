import React from 'react';
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  personal: PersonalInfo;
}

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-20 border-b border-[#DEDEDE] flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Editorial Index Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DEDEDE] text-xs font-mono text-[#777777]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <span className="text-[#111111] font-semibold">AVAILABLE FOR HIRE</span>
            <span className="text-[#DEDEDE]">/</span>
            <span>{personal.role}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#111111]" />
              {personal.location}
            </span>
            <span className="hidden sm:inline text-[#DEDEDE]">/</span>
            <span className="hidden sm:inline font-mono">TELKOM UNIVERSITY</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="pt-12 sm:pt-16 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Main Typography Column */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="text-xs font-mono tracking-widest text-[#777777] uppercase mb-4">
              [DEVELOPER PORTFOLIO &bull; INDONESIA]
            </div>

            {/* Prominent Name Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold text-[#111111] uppercase tracking-tight leading-[0.98] mb-6">
              {personal.name}
            </h1>

            {/* Core Mission Statement */}
            <p className="text-xl sm:text-2xl md:text-3xl text-[#111111] font-light leading-snug tracking-tight mb-8 max-w-3xl">
              &ldquo;Building web applications that simplify data management and business processes.&rdquo;
            </p>

            {/* Natural Short Bio */}
            <p className="text-[#777777] text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
              {personal.shortBio}
            </p>

            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] text-[#FFFFFF] text-sm font-medium hover:bg-[#333333] transition-colors"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#111111] text-[#111111] text-sm font-medium hover:bg-[#F3F3F3] transition-colors"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Resume_Abdul_Hamid_Al_Ghazali.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#DEDEDE] text-[#777777] hover:text-[#111111] hover:border-[#111111] text-sm font-mono transition-colors"
                title="Download CV"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait & Technical Focus Card */}
          <div className="lg:col-span-4 flex flex-col space-y-6 lg:pl-6 lg:border-l lg:border-[#DEDEDE]">
            {/* Portrait Image with clean grayscale editorial aesthetic */}
            {personal.avatarUrl && (
              <div className="relative border border-[#DEDEDE] p-2 bg-[#F3F3F3] group">
                <div className="overflow-hidden bg-[#FFFFFF] aspect-[4/5] relative">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-[#FFFFFF] text-[11px] font-mono flex justify-between items-center">
                    <span>ABDUL HAMID</span>
                    <span>PURWOKERTO &bull; BEKASI</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Editorial Spec Sheet */}
            <div className="border border-[#DEDEDE] p-5 bg-[#FFFFFF] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#777777] border-b border-[#DEDEDE] pb-2 flex justify-between">
                <span>SPECIFICATION</span>
                <span>01</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#F3F3F3]">
                  <span className="text-[#777777]">Focus</span>
                  <span className="font-mono font-medium text-[#111111]">Full-Stack Web &amp; Database</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#F3F3F3]">
                  <span className="text-[#777777]">Education</span>
                  <span className="font-mono font-medium text-[#111111]">S1 Teknik Informatika</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#F3F3F3]">
                  <span className="text-[#777777]">Key Stack</span>
                  <span className="font-mono font-medium text-[#111111]">Laravel &bull; React &bull; PostgreSQL</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#777777]">Industry Work</span>
                  <span className="font-mono font-medium text-[#111111]">PT Botz Indonesia (HRIS)</span>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-3 border-t border-[#DEDEDE] flex items-center justify-between text-xs font-mono">
                <span className="text-[#777777]">CHANNELS:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#111111] hover:underline flex items-center gap-1"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GH</span>
                  </a>
                  <span className="text-[#DEDEDE]">/</span>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#111111] hover:underline flex items-center gap-1"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LI</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section Footnote */}
        <div className="pt-6 border-t border-[#DEDEDE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <span>SELECTED WORK (2024 &ndash; 2025)</span>
          <a
            href="#projects"
            className="flex items-center gap-2 text-[#111111] hover:underline"
          >
            <span>SCROLL TO PROJECTS</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
