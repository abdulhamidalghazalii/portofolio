import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, ArrowRight, Eye } from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Semua');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['Semua', 'Full Stack', '3D & Graphics', 'Mobile & AI', 'Frontend'];

  const filteredProjects =
    selectedFilter === 'Semua'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 ambient-glow-purple rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTOFOLIO KARYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Proyek Pilihan & <span className="gradient-text-accent">Hasil Rekayasa</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Koleksi aplikasi web, grafis 3D interaktif, dan integrasi cerdas yang dirancang dengan performa dan keindahan tingkat tinggi.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isSelected = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 border border-purple-400/30'
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden glass-panel-hover flex flex-col justify-between group shadow-xl border border-white/10"
            >
              <div>
                {/* Image Container with Zoom Effect */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#030712]/80 text-indigo-300 border border-indigo-400/30 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Hover Overlay Button to View Modal */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Lihat Rincian</span>
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-indigo-400 font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Info Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub source for ${project.title}`}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 hover:border-white/20 transition-all"
                    title="Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    className="p-2 rounded-xl bg-indigo-600/80 hover:bg-indigo-600 text-white border border-indigo-500/30 transition-all shadow-md shadow-indigo-600/20"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
