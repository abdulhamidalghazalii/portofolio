import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, FolderGit2, Send, Download, MapPin, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { PersonalInfo } from '../types/portfolio';
import { ThreeCanvas } from './ThreeCanvas';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  personal: PersonalInfo;
}

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  const { scrollY } = useScroll();
  const yHeroText = useTransform(scrollY, [0, 600], [0, 80]);
  const yHero3D = useTransform(scrollY, [0, 600], [0, -40]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0.4]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero Content with Scroll & Mouse Parallax */}
          <motion.div
            style={{ y: yHeroText, opacity: opacityHero }}
            animate={{
              x: mousePos.x * 0.3,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 60 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            {/* Futuristic Telemetry Status Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono backdrop-blur-md shadow-[0_0_15px_rgba(52,211,153,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="tracking-wide">SYS: OPEN FOR OPPORTUNITIES</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono backdrop-blur-md">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                <span>{personal.university}</span>
              </div>
            </motion.div>

            {/* Profile Avatar & Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-1"
            >
              {personal.avatarUrl && (
                <div className="relative shrink-0 group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-[2px] bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow overflow-hidden">
                    <img
                      src={personal.avatarUrl}
                      alt={personal.name}
                      className="w-full h-full object-cover rounded-[14px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#030712] shadow-[0_0_8px_#34d399]" title="Aktif" />
                </div>
              )}

              <div className="space-y-1">
                <div className="text-xs font-mono font-medium text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>FULL-STACK WEB DEVELOPER</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  <span className="gradient-text-accent block">{personal.name}</span>
                </h1>
                <h2 className="text-base sm:text-lg font-mono text-slate-400 mt-1">
                  &gt; Building Robust Web Apps &amp; Scalable Systems
                </h2>
              </div>
            </motion.div>

            {/* Tagline & Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              {personal.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
            >
              {personal.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto"
            >
              <a
                href={personal.resumeUrl}
                download="Resume_Abdul_Hamid_Al_Ghazali.pdf"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                title="Unduh CV Resmi (PDF)"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Unduh Resume (PDF)</span>
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                <span>Eksplorasi Proyek</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/5 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Hubungi</span>
              </a>
            </motion.div>

            {/* Social Links & Contact Quick Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 w-full"
            >
              <span className="text-xs font-mono text-slate-400">CONNECT:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 hover:border-cyan-500/30 transition-all hover:shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 hover:border-indigo-500/30 transition-all hover:shadow-[0_0_12px_rgba(99,102,241,0.2)]"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 hover:border-white/20 transition-all"
                  title={`Kirim Email: ${personal.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline ml-auto flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {personal.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Scene Viewport with Floating Holographic Badges */}
          <motion.div
            style={{ y: yHero3D }}
            animate={{
              x: -mousePos.x * 0.4,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 60 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Floating Tech Badge 1: React & TS (Top-Right) */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 z-30 hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl glass-panel border border-cyan-400/30 text-white shadow-lg shadow-cyan-500/20 backdrop-blur-xl"
            >
              <div className="w-7 h-7 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono text-cyan-300">CORE TECH</div>
                <div className="text-xs font-bold text-white">React &bull; TypeScript</div>
              </div>
            </motion.div>

            {/* Floating Tech Badge 2: Laravel & Backend (Bottom-Left) */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 0],
              }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 z-30 hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl glass-panel border border-indigo-400/30 text-white shadow-lg shadow-indigo-500/20 backdrop-blur-xl"
            >
              <div className="w-7 h-7 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono text-indigo-300">BACKEND</div>
                <div className="text-xs font-bold text-white">Laravel &bull; REST API</div>
              </div>
            </motion.div>

            {/* Floating Tech Badge 3: PostgreSQL Database (Bottom-Right) */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 -right-6 z-30 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel border border-purple-400/30 text-white shadow-lg shadow-purple-500/20 backdrop-blur-xl"
            >
              <Database className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-mono text-purple-200">PostgreSQL</span>
            </motion.div>

            {/* Main 3D Canvas Box Container */}
            <div className="w-full h-[370px] sm:h-[430px] lg:h-[470px] rounded-3xl glass-panel relative overflow-hidden p-2 group shadow-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
              {/* Futuristic Cyber Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none z-20" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none z-20" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none z-20" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none z-20" />

              {/* Viewport Top HUD Header */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 bg-[#030712]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                  <span>3D Interactive Card</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  Rotate 360°
                </span>
              </div>

              {/* Three.js Canvas Container */}
              <ThreeCanvas />

              {/* Viewport Bottom Hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <div className="bg-[#030712]/80 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/10 text-[10px] font-mono text-slate-400">
                  Drag untuk memutar kartu 3D
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-8 text-center flex flex-col items-center justify-center relative z-10"
      >
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors text-xs font-mono group"
        >
          <span>Eksplorasi Profil</span>
          <ArrowDown className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
        </a>
      </motion.div>
    </section>
  );
};
