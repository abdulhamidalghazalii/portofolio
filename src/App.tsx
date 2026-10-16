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

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] flex flex-col selection:bg-[#111111] selection:text-[#FFFFFF] relative overflow-x-hidden antialiased">
      {/* Editorial Hairline Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar personal={portfolioData.personal} />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative z-10">
        {/* 1. Hero Section - Bold Editorial Typography */}
        <Hero personal={portfolioData.personal} />

        {/* 2. Projects Showcase - Focus Utama Portfolio */}
        <Projects projects={portfolioData.projects} />

        {/* 3. About Section - Authentic Narrative & Foundations */}
        <About personal={portfolioData.personal} />

        {/* 4. Practical Work Experience (PT Botz Indonesia) */}
        <Experience experiences={portfolioData.experiences} />

        {/* 5. Technical Skills - Structured Editorial List */}
        <Skills categories={portfolioData.skillCategories} />

        {/* 6. Credentials: Education & Certifications */}
        <Credentials
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />

        {/* 7. Contact Section */}
        <Contact personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />
    </div>
  );
};

export default App;
