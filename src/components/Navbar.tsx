import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';

interface NavbarProps {
  personal: PersonalInfo;
}

export const Navbar: React.FC<NavbarProps> = ({ personal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Credentials', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'projects', 'about', 'experience', 'skills', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] transition-all duration-200 ${
        isScrolled
          ? 'border-b border-[#DEDEDE] py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
          : 'border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand: Initial & Full Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 text-[#111111] group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-none border border-[#111111] bg-[#111111] text-[#FFFFFF] flex items-center justify-center font-mono font-bold text-xs tracking-tighter transition-colors group-hover:bg-[#FFFFFF] group-hover:text-[#111111]">
              AH
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-[#111111]">
                {personal.name}
              </span>
              <span className="text-[10px] text-[#777777] font-mono uppercase tracking-widest">
                Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider font-medium transition-colors py-1 ${
                    isActive
                      ? 'text-[#111111] font-semibold border-b border-[#111111]'
                      : 'text-[#777777] hover:text-[#111111]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume-abdul-hamid-alghazali.pdf"
              download="Resume_Abdul_Hamid_Al_Ghazali.pdf"
              className="inline-flex items-center px-3.5 py-1.5 border border-[#DEDEDE] text-xs font-mono font-medium text-[#111111] hover:bg-[#F3F3F3] transition-colors"
              title="Unduh CV (PDF)"
            >
              Resume (PDF)
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#111111] text-[#FFFFFF] text-xs font-medium hover:bg-[#333333] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#DEDEDE] text-[#111111] hover:bg-[#F3F3F3] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#DEDEDE] px-4 pt-4 pb-6 transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-mono uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#F3F3F3] text-[#111111] font-semibold border-l-2 border-[#111111]'
                      : 'text-[#777777] hover:text-[#111111] hover:bg-[#FAFAFA]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#DEDEDE] flex flex-col gap-2">
              <a
                href="/resume-abdul-hamid-alghazali.pdf"
                download="Resume_Abdul_Hamid_Al_Ghazali.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-2.5 border border-[#DEDEDE] text-xs font-mono font-medium text-[#111111] hover:bg-[#F3F3F3] transition-colors"
              >
                Unduh Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-[#111111] text-[#FFFFFF] text-xs font-medium hover:bg-[#333333] transition-colors"
              >
                <span>Hubungi Saya</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
