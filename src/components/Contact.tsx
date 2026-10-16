import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, Clock, ArrowUpRight, AlertCircle } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ScrollReveal } from './ScrollReveal';

interface ContactProps {
  personal: PersonalInfo;
}

export const Contact: React.FC<ContactProps> = ({ personal }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personal.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          _subject: `[Portfolio Abdul Hamid] ${formState.subject} - dari ${formState.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Fallback to email client');
      }
    } catch {
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        formState.subject || 'Inquiry from Portfolio'
      )}&body=${encodeURIComponent(
        `Halo Abdul Hamid,\n\nNama: ${formState.name}\nEmail: ${formState.email}\n\nPesan:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#DEDEDE] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#111111] mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
                [07 // TRANSMISSION]
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#111111] uppercase tracking-tight leading-[0.98]">
                Have a project in mind?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#777777] max-w-md font-sans">
              Terbuka untuk tawaran posisi Full-Stack Web Developer, proyek pengembangan web, maupun kolaborasi teknis.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries & Details */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-2">
                    Kontak Langsung
                  </h3>
                  <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                    Kirimkan pesan melalui email atau sambungkan melalui profil profesional LinkedIn dan GitHub.
                  </p>
                </div>

                {/* Email Box */}
                <div className="p-5 border border-[#DEDEDE] bg-[#F3F3F3] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#777777]">
                    <span>PRIMARY EMAIL</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(personal.email)}
                      className="text-[#111111] hover:underline flex items-center gap-1"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-base sm:text-lg font-bold text-[#111111] hover:underline block break-all font-mono"
                  >
                    {personal.email}
                  </a>
                </div>

                {/* Meta details */}
                <div className="space-y-3 text-xs font-mono divide-y divide-[#DEDEDE] border-y border-[#DEDEDE]">
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-[#777777] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#111111]" />
                      <span>Lokasi Domisili:</span>
                    </span>
                    <span className="font-semibold text-[#111111]">{personal.location}</span>
                  </div>

                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-[#777777] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#111111]" />
                      <span>Waktu Respons:</span>
                    </span>
                    <span className="font-semibold text-[#111111]">&lt; 24 Jam Kerja</span>
                  </div>

                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-[#777777]">Ketersediaan:</span>
                    <span className="font-semibold text-[#111111]">{personal.availability}</span>
                  </div>
                </div>

                {/* Social channels */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-[#777777] block">
                    Saluran Profesional:
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 border border-[#DEDEDE] bg-[#FFFFFF] hover:bg-[#111111] hover:text-[#FFFFFF] text-xs font-mono font-medium transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 border border-[#DEDEDE] bg-[#FFFFFF] hover:bg-[#111111] hover:text-[#FFFFFF] text-xs font-mono font-medium transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <LinkedinIcon className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Resume Download Prompt */}
                <div className="p-4 border border-[#DEDEDE] bg-[#FFFFFF] flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="font-bold text-[#111111] block">CV Resmi (PDF)</span>
                    <span className="text-[#777777] text-[11px]">Format dokumen siap tinjau</span>
                  </div>
                  <a
                    href={personal.resumeUrl}
                    download="Resume_Abdul_Hamid_Al_Ghazali.pdf"
                    className="px-3.5 py-1.5 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] transition-colors"
                  >
                    Unduh
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="border border-[#DEDEDE] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
                <div className="pb-4 border-b border-[#DEDEDE] flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#111111]">
                      Kirim Pesan
                    </h3>
                    <p className="text-xs text-[#777777] font-mono mt-0.5">
                      DIRECT INBOX: {personal.email}
                    </p>
                  </div>
                  <Mail className="w-4 h-4 text-[#777777]" />
                </div>

                {isSubmitted && (
                  <div className="p-4 border border-[#111111] bg-[#F3F3F3] text-xs font-mono text-[#111111] space-y-1">
                    <span className="font-bold uppercase block">[STATUS: PESAN BERHASIL TERKIRIM]</span>
                    <p className="text-[#333333]">
                      Pesan Anda telah diteruskan ke email <strong>{personal.email}</strong>. Terima kasih telah menghubungi saya.
                    </p>
                  </div>
                )}

                {errorMessage && (
                  <div className="p-4 border border-[#111111] bg-[#F3F3F3] text-xs font-mono text-[#111111] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#777777] uppercase block">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-[#DEDEDE] bg-[#FFFFFF] text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#111111] transition-colors"
                        placeholder="Nama Anda"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#777777] uppercase block">
                        Email Anda *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-[#DEDEDE] bg-[#FFFFFF] text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#111111] transition-colors"
                        placeholder="email@domain.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#777777] uppercase block">
                      Subjek Pesan *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-[#DEDEDE] bg-[#FFFFFF] text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#111111] transition-colors"
                      placeholder="Contoh: Diskusi Peluang Kerja / Proyek Web"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#777777] uppercase block">
                      Isi Pesan *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-[#DEDEDE] bg-[#FFFFFF] text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#111111] transition-colors resize-none"
                      placeholder="Tuliskan pesan Anda..."
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#111111] text-[#FFFFFF] text-xs font-mono font-medium hover:bg-[#333333] transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>MENGIRIMKAN...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>KIRIM PESAN</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent(
                        formState.subject || 'Diskusi Portofolio Web'
                      )}&body=${encodeURIComponent(
                        formState.message ? `Halo Abdul Hamid,\n\n${formState.message}` : ''
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-3 border border-[#DEDEDE] text-[#111111] hover:bg-[#F3F3F3] text-xs font-mono transition-colors"
                    >
                      <span>BUKA DI GMAIL</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
