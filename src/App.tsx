import React from 'react';
import { portfolioData } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ParallaxBackground } from './components/ParallaxBackground';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Top Futuristic Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Interactive Multi-Layer Parallax Background */}
      <ParallaxBackground />

      {/* Navigation Header */}
      <Navbar personal={portfolioData.personal} />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative z-10">
        {/* 1. Hero Section with 3D Canvas */}
        <Hero personal={portfolioData.personal} />

        {/* 2. About & Core Capabilities Section */}
        <About personal={portfolioData.personal} />

        {/* 3. Projects Showcase (Put tangible work early) */}
        <Projects projects={portfolioData.projects} />

        {/* 4. Practical Work Experience (PKL PT BOLTZ INDONESIA) */}
        <Experience experiences={portfolioData.experiences} />

        {/* 5. Technical Skills & Modern Tooling */}
        <Skills categories={portfolioData.skillCategories} />

        {/* 6. Unified Credentials: Education & Certifications */}
        <Credentials
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />

        {/* 7. Contact & Direct Inquiry Section */}
        <Contact personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />
    </div>
  );
};

export default App;
