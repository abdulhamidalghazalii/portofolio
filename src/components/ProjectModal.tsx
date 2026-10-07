import React from 'react';
import { X, ExternalLink, CheckCircle2, Calendar, UserCheck, Layers } from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0f1d] border border-white/10 rounded-3xl shadow-2xl z-10 flex flex-col">
        
        {/* Header with image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/10 backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/80 text-white backdrop-blur-md">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 text-slate-300 border border-white/10 backdrop-blur-md">
              {project.period}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-indigo-300 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Meta Info Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <UserCheck className="w-4 h-4 text-indigo-400 shrink-0" />
              <span><strong>Peran:</strong> {project.role}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
              <span><strong>Tahun:</strong> {project.period}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 col-span-2 sm:col-span-1">
              <Layers className="w-4 h-4 text-sky-400 shrink-0" />
              <span><strong>Tipe:</strong> {project.category}</span>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Deskripsi Proyek
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Achievements / Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Pencapaian Teknis & Dampak
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stacks */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Teknologi yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Lihat Source Code</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Buka Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
