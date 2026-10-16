import React, { useEffect } from 'react';
import { X, ArrowUpRight, Check } from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] border-2 border-[#111111] shadow-2xl z-10 flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#DEDEDE] bg-[#F3F3F3] text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#111111]">SPECIFICATION VIEW</span>
            <span className="text-[#DEDEDE]">&bull;</span>
            <span className="text-[#777777] uppercase">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 border border-[#DEDEDE] text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Hero Image */}
        <div className="relative aspect-[16/9] w-full border-b border-[#DEDEDE] bg-[#F3F3F3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale contrast-105"
          />
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="text-xs font-mono text-[#777777] mb-1">
              {project.tagline}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Metadata Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 border border-[#DEDEDE] bg-[#F3F3F3] text-xs font-mono">
            <div>
              <span className="text-[#777777] block text-[10px] uppercase">Peran</span>
              <span className="font-medium text-[#111111]">{project.role}</span>
            </div>
            <div>
              <span className="text-[#777777] block text-[10px] uppercase">Periode</span>
              <span className="font-medium text-[#111111]">{project.period}</span>
            </div>
            <div>
              <span className="text-[#777777] block text-[10px] uppercase">Kategori</span>
              <span className="font-medium text-[#111111]">{project.category}</span>
            </div>
            <div>
              <span className="text-[#777777] block text-[10px] uppercase">Status</span>
              <span className="font-medium text-[#111111]">Implemented</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-2">
              Ringkasan Masalah &amp; Solusi
            </h4>
            <p className="text-[#111111] text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-3">
              Pencapaian Teknis &amp; Dampak Implementasi
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                  <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stacks */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-2">
              Teknologi yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono bg-[#F3F3F3] border border-[#DEDEDE] text-[#111111]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Footer */}
          <div className="pt-6 border-t border-[#DEDEDE] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-[#777777]">
              PORTFOLIO RECORD: {project.id}
            </span>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#DEDEDE] text-xs font-mono text-[#111111] hover:bg-[#F3F3F3] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-xs font-mono text-[#FFFFFF] hover:bg-[#333333] transition-colors"
              >
                <span>Live Preview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
