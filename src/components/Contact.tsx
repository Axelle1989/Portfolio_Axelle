import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';
import { 
  MapPin, 
  Send, 
  CheckCircle2, 
  ArrowUpRight,
  MessageSquare,
  Mail,
  Phone,
  FileDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || `Message de ${formData.name}`
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            {t.contact.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${profileData.email}`}
              className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between group hover:border-brand-500/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.contact.emailTitle}
                  </h3>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-brand-500 transition-colors">
                    {profileData.email}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
              className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between group hover:border-brand-500/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Téléphone
                  </h3>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-emerald-500 transition-colors">
                    {profileData.phone}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
                <MapPin className="w-5 h-5 text-brand-500" />
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {t.contact.locationTitle}
                </h3>
                <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                  {profileData.location}
                </p>
                <p className="text-xs text-slate-500 mt-1">Epitech Bénin • Disponible pour stages & alternances</p>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between group hover:border-brand-500/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.contact.githubTitle}
                  </h3>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-brand-500 transition-colors">
                    github.com/Axelle1989
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between group hover:border-brand-500/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    LinkedIn
                  </h3>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-sky-500 transition-colors">
                    @Axelle HOSSOU
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
            </a>

            {/* Download CV Card */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-card border border-brand-500/30 bg-brand-50/50 dark:bg-brand-950/30 flex items-center justify-between group hover:border-brand-500 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0">
                  <FileDown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    Curriculum Vitae
                  </h3>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    Télécharger mon CV (PDF)
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-brand-500 group-hover:translate-x-0.5 transition-transform" />
            </a>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl">
              
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t.contact.formSuccess}
                  </h3>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-brand-600 dark:text-brand-400 underline mt-2"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.formEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.formSubject} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.formMessage} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? t.contact.formSending : t.contact.formSend}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
