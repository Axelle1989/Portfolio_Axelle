import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Terminal, 
  Sparkles, 
  Code2, 
  Database, 
  Cpu 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-600/15 dark:bg-brand-500/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-accent-cyan/15 dark:bg-accent-cyan/10 rounded-full blur-[110px] -z-10 pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/80 text-brand-700 dark:text-brand-300">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                {t.hero.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3 h-3 text-brand-500" />
                {t.hero.location}
              </span>
            </div>

            {/* Main Catchphrase */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {t.hero.greeting}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-accent-cyan dark:from-brand-400 dark:via-brand-300 dark:to-accent-cyan">
                  {profileData.shortName}.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed pt-2">
                {language === 'fr' ? profileData.heroBio.fr : profileData.heroBio.en}
              </p>
            </div>

            {/* Personal Motto Quote Card */}
            <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 w-full max-w-xl">
              <p className="text-sm sm:text-base font-medium italic text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-500 shrink-0" />
                {language === 'fr' ? profileData.motto.fr : profileData.motto.en}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 shadow-lg shadow-brand-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                <span>{t.hero.ctaContact}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                title={t.hero.socialGithub}
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/Axelle1989</span>
              </a>

              {profileData.linkedinUrl && (
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Tech Visual / Terminal Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-md rounded-2xl glass-card p-5 sm:p-6 shadow-2xl relative overflow-hidden border border-slate-200/80 dark:border-slate-800">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>dev.axelle.ts</span>
                </div>
              </div>

              {/* Code / Profile Preview */}
              <div className="pt-4 font-mono text-xs sm:text-sm leading-relaxed space-y-2.5 text-slate-700 dark:text-slate-300">
                <p>
                  <span className="text-brand-600 dark:text-brand-400 font-semibold">const</span>{' '}
                  <span className="text-sky-600 dark:text-sky-300 font-semibold">developer</span> = &#123;
                </p>
                
                <p className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">name:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">"Axelle Kafui HOSSOU"</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">school:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">"Epitech Bénin (Tek 3)"</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">focus:</span> [
                  <span className="text-amber-600 dark:text-amber-300">"Web"</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-300">"Software"</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-300">"AI/Data"</span>],
                </p>

                <p className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">currentProjects:</span> [
                  <span className="text-indigo-600 dark:text-indigo-300">"YOLITA"</span>,{' '}
                  <span className="text-indigo-600 dark:text-indigo-300">"R-TYPE"</span>],
                </p>

                <p className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">mindset:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">"Learn by building"</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">status:</span>{' '}
                  <span className="text-brand-600 dark:text-brand-300">"Open to internships & challenges"</span>
                </p>

                <p>&#125;;</p>

                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-brand-500" />
                    <span>C++ • React • Python</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Database className="w-3.5 h-3.5 text-cyan-500" />
                    <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                  </span>
                </div>
              </div>

              {/* Avatar Slot Placeholder */}
              <div className="mt-4 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 text-xs font-mono">
                  AH
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Photo personnelle :</span>
                  <p>Emplacement prêt pour recevoir mon portrait</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
