import React from 'react';
import { ArrowDown, Mail, Sparkles, FolderGit2, Send, FileText } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';
import { ThreeCanvas } from './ThreeCanvas';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  personal: PersonalInfo;
}

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 ambient-glow-indigo rounded-full pointer-events-none blur-3xl opacity-60" />
      <div className="absolute top-1/3 right-10 w-96 h-96 ambient-glow-cyan rounded-full pointer-events-none blur-3xl opacity-50" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] ambient-glow-purple rounded-full pointer-events-none blur-3xl opacity-40" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Availability Badge & Metadata */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-md animate-pulse">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span>{personal.availability}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                <span>🎓 {personal.university}</span>
              </div>
            </div>

            {/* Profile Avatar & Main Title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-1">
              {personal.avatarUrl && (
                <div className="relative group shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl p-[2.5px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 shadow-xl shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
                    <img
                      src={personal.avatarUrl}
                      alt={personal.name}
                      className="w-full h-full object-cover rounded-[22px] group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#030712] shadow-[0_0_8px_#34d399]" title="Aktif" />
                </div>
              )}

              <div className="space-y-1">
                <p className="text-slate-400 font-mono text-xs sm:text-sm tracking-wide flex items-center gap-2">
                  <span>Halo dunia, perkenalkan saya</span>
                  <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  <span className="gradient-text-primary block">{personal.name}</span>
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold gradient-text-accent mt-1">
                  {personal.role}
                </h2>
              </div>
            </div>

            {/* Tagline & Short Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personal.tagline}
            </p>

            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              {personal.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all transform hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Lihat Proyek Unggulan</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Kirim Pesan</span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white bg-transparent hover:bg-white/5 transition-all"
                title="Download Resume / CV"
              >
                <FileText className="w-4 h-4" />
                <span>Resume CV</span>
              </a>
            </div>

            {/* Social Links & Location Quick Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
              <span className="text-xs font-mono text-slate-400">CONNECT:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 hover:border-white/20 transition-all transform hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 hover:border-white/20 transition-all transform hover:-translate-y-0.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 hover:border-white/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline ml-auto">
                📍 {personal.location}
              </span>
            </div>
          </div>

          {/* Right Column: 3D Scene Viewport */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-3xl glass-panel relative overflow-hidden p-2 group shadow-2xl shadow-indigo-950/40">
              
              {/* Top Bar for Viewport */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-1.5 bg-[#030712]/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                  <span className="text-[11px] font-mono text-indigo-300">3D Hologram Profile</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-[#030712]/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  WebGL 3D Interactive
                </span>
              </div>

              {/* Three.js Canvas Container */}
              <ThreeCanvas />

              {/* Bottom Tip Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <div className="bg-[#030712]/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] text-slate-300 font-mono shadow-sm flex items-center gap-1.5">
                  <span>⚡ Drag untuk memutar foto 3D</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 sm:p-5 rounded-2xl glass-panel-hover flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-text-accent tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1">
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                {stat.helper && (
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {stat.helper}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-8 text-center flex flex-col items-center justify-center relative z-10">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors text-xs font-mono group"
        >
          <span>Scroll ke bawah</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-indigo-400 group-hover:text-indigo-300" />
        </a>
      </div>
    </section>
  );
};
