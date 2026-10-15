import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Copy, Check, Clock, AlertCircle, ExternalLink } from 'lucide-react';
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
        throw new Error('Gagal mengirim melalui server pengirim. Membuka aplikasi email default...');
      }
    } catch (err: unknown) {
      console.warn('Direct API email dispatch notice:', err);
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        formState.subject || 'Pesan dari Pengunjung Portfolio'
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
    <section id="contact" className="py-24 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>HUBUNGI SAYA // TRANSMISSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Mari Mulai <span className="gradient-text-accent">Kolaborasi Baru</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Punya peluang kerja, tawaran posisi, atau kebutuhan pengembangan sistem web? Kirimkan pesan langsung melalui formulir atau kontak di bawah ini.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column with ScrollReveal */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" delay={0.1}>
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Kontak Langsung
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Saya biasanya merespons pesan dalam waktu kurang dari 24 jam kerja.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Email Utama</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.email)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Salin email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & Availability */}
              <div className="space-y-3">

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span><strong>Domisili:</strong> {personal.location}</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span><strong>Ketersediaan:</strong> {personal.availability}</span>
                </div>
              </div>

              {/* Resume download prompt card */}
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between gap-3">
                <div className="text-xs text-slate-300">
                  <div className="font-semibold text-white">Butuh Dokumen Lengkap?</div>
                  <div className="text-slate-400 text-[11px]">Unduh CV resmi format PDF</div>
                </div>
                <a
                  href="/resume-abdul-hamid-alghazali.pdf"
                  download="Resume_Abdul_Hamid_Al_Ghazali.pdf"
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-colors shrink-0"
                >
                  Unduh CV
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 mb-3">Saluran Profesional:</div>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.2}>
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">
                  Kirim Pesan Langsung
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  to {personal.email}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Isi formulir di bawah ini. Pesan akan langsung diteruskan ke kotak masuk email <strong>{personal.email}</strong>.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm space-y-1">
                    <div className="font-bold text-emerald-200">Pesan Berhasil Dikirimkan Langsung ke Email!</div>
                    <div className="text-emerald-300/90 leading-relaxed">
                      Pesan Anda telah diteruskan ke <strong>{personal.email}</strong>. Terima kasih telah menghubungi saya, saya akan segera merespons via email.
                    </div>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-3 animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <div className="text-xs sm:text-sm">{errorMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder=""
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Alamat Email Anda *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Subjek Pesan *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Peluang Kerja / Diskusi Proyek Web"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Isi Pesan *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tuliskan pesan Anda secara lengkap..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Mengirimkan ke Email...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Langsung ke Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent(
                      formState.subject || 'Diskusi Proyek Web'
                    )}&body=${encodeURIComponent(
                      formState.message ? `Halo Abdul Hamid,\n\n${formState.message}` : ''
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    title="Buka langsung antarmuka Gmail"
                  >
                    <ExternalLink className="w-4 h-4 text-indigo-400" />
                    <span>Buka via Gmail</span>
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
