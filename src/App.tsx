import React from 'react';
import { portfolioData } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation Header */}
      <Navbar personal={portfolioData.personal} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Section with 3D Canvas */}
        <Hero personal={portfolioData.personal} />

        {/* About Section */}
        <About personal={portfolioData.personal} />

        {/* Technical Skills Section */}
        <Skills categories={portfolioData.skillCategories} />

        {/* Projects Showcase Section */}
        <Projects projects={portfolioData.projects} />

        {/* Work Experience Section */}
        <Experience experiences={portfolioData.experiences} />

        {/* Academic Background Section */}
        <Education education={portfolioData.education} />

        {/* Certifications Section */}
        <Certifications certifications={portfolioData.certifications} />

        {/* Contact & Inquiry Section */}
        <Contact personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />
    </div>
  );
};

export default App;
