import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Eye } from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { ScrollReveal } from './ScrollReveal';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 border-b border-[#DEDEDE] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#111111] mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
                [02 // SELECTED WORK]
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#111111] uppercase tracking-tight">
                Featured Projects
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-xs sm:text-sm text-[#777777] max-w-md font-sans">
                Aplikasi web nyata, sistem manajemen operasional, dan antarmuka dengan arsitektur terstruktur.
              </p>

              {/* Minimalist Filter Tabs */}
              <div className="flex items-center gap-1 border border-[#DEDEDE] p-1 bg-[#F3F3F3]">
                {categories.map((cat) => {
                  const isSelected = selectedFilter === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedFilter(cat)}
                      className={`px-3 py-1 text-xs font-mono transition-colors ${
                        isSelected
                          ? 'bg-[#111111] text-[#FFFFFF] font-semibold'
                          : 'text-[#777777] hover:text-[#111111]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Editorial Layout */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => {
            const projectNumber = String(idx + 1).padStart(2, '0');
            const isFeatured = project.featured;

            if (isFeatured && idx === 0) {
              /* Hero Featured Project Layout (Asymmetric Wide Editorial Split) */
              return (
                <ScrollReveal key={project.id} direction="up" delay={0.1}>
                  <article className="border border-[#DEDEDE] bg-[#FFFFFF] transition-all hover:border-[#111111]">
                    {/* Editorial Banner Header */}
                    <div className="flex flex-wrap items-center justify-between px-6 py-3 border-b border-[#DEDEDE] bg-[#F3F3F3] text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#111111]">PROJECT {projectNumber}</span>
                        <span className="text-[#DEDEDE]">&bull;</span>
                        <span className="text-[#111111] uppercase">{project.category}</span>
                      </div>
                      <div className="flex items-center gap-4 text-[#777777]">
                        <span>{project.period}</span>
                        <span className="text-[#111111] font-semibold">[FLAGSHIP IMPLEMENTATION]</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Left Image Section */}
                      <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#DEDEDE] relative bg-[#F9F9F9] group overflow-hidden">
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 border-t border-[#DEDEDE] flex items-center justify-between text-xs font-mono text-[#777777] bg-[#FFFFFF]">
                          <span>ROLE: {project.role}</span>
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="text-[#111111] hover:underline flex items-center gap-1 font-medium"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Preview Details</span>
                          </button>
                        </div>
                      </div>

                      {/* Right Detail Section */}
                      <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                        <div>
                          <div className="text-xs font-mono text-[#777777] mb-1">
                            {project.tagline}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-4">
                            {project.title}
                          </h3>

                          {/* Problem & Solution narrative */}
                          <div className="space-y-4 text-xs sm:text-sm text-[#777777] leading-relaxed">
                            <div>
                              <strong className="text-[#111111] font-mono block text-xs uppercase mb-1">
                                Scope &amp; Solusi:
                              </strong>
                              <p>{project.description}</p>
                            </div>

                            <div className="pt-2">
                              <strong className="text-[#111111] font-mono block text-xs uppercase mb-1.5">
                                Key Highlights:
                              </strong>
                              <ul className="space-y-1.5 list-disc list-inside text-[#111111]">
                                {project.highlights.slice(0, 3).map((hl, hIdx) => (
                                  <li key={hIdx} className="text-xs leading-normal">
                                    {hl}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Tech Stack & Links */}
                        <div className="pt-6 border-t border-[#DEDEDE] space-y-4">
                          <div>
                            <span className="text-[11px] font-mono uppercase text-[#777777] block mb-2">
                              Technologies Applied:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-1 text-xs font-mono bg-[#F3F3F3] text-[#111111] border border-[#DEDEDE]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-3 pt-2">
                            <button
                              onClick={() => setActiveModalProject(project)}
                              className="px-4 py-2 bg-[#111111] text-[#FFFFFF] text-xs font-medium hover:bg-[#333333] transition-colors flex items-center gap-2"
                            >
                              <span>Read Case Study</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>

                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 border border-[#DEDEDE] text-[#111111] hover:bg-[#F3F3F3] transition-colors"
                              title="Repository GitHub"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>

                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 border border-[#DEDEDE] text-[#111111] hover:bg-[#F3F3F3] transition-colors"
                              title="Live Demo"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            }

            /* Regular Grid Card for Other Projects (Clean, Structured Editorial Cards) */
            return (
              <ScrollReveal key={project.id} direction="up" delay={idx * 0.1}>
                <article className="border border-[#DEDEDE] bg-[#FFFFFF] transition-all hover:border-[#111111]">
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between px-6 py-3 border-b border-[#DEDEDE] bg-[#F3F3F3] text-xs font-mono">
                    <span className="font-bold text-[#111111]">PROJECT {projectNumber}</span>
                    <div className="flex items-center gap-3 text-[#777777]">
                      <span>{project.category}</span>
                      <span>/</span>
                      <span>{project.period}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Image section */}
                    <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-[#DEDEDE] bg-[#F9F9F9] group overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="text-xs font-mono text-[#777777] mb-1">
                          {project.tagline}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-3">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#777777] leading-relaxed mb-4">
                          {project.description}
                        </p>

                        <div className="space-y-1 text-xs">
                          {project.highlights.slice(0, 2).map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-[#111111]">
                              <span className="text-[#777777]">&bull;</span>
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack & Links */}
                      <div className="pt-4 border-t border-[#DEDEDE] space-y-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 text-[11px] font-mono bg-[#F3F3F3] text-[#111111] border border-[#DEDEDE]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="text-xs font-mono font-medium text-[#111111] hover:underline flex items-center gap-1.5"
                          >
                            <span>Case Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center gap-2">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 border border-[#DEDEDE] text-[#111111] hover:bg-[#F3F3F3] transition-colors"
                              title="GitHub"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 border border-[#DEDEDE] text-[#111111] hover:bg-[#F3F3F3] transition-colors"
                              title="Demo"
                            >
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
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
