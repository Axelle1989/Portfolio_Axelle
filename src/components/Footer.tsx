import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Identity */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
              Axelle <span className="text-brand-600 dark:text-brand-400">HOSSOU</span>
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            {profileData.linkedinUrl && (
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            )}

            <a
              href="#contact"
              className="p-2 rounded-lg text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
              aria-label="Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright & Stack */}
          <div className="text-center md:text-right text-xs text-slate-500 dark:text-slate-400 space-y-1">
            <p>© {currentYear} Axelle Kafui HOSSOU. {t.footer.rights}</p>
            <p className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
              {t.footer.builtWith}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
