import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  GraduationCap, 
  Layers, 
  CheckCircle2, 
  Target, 
  Globe2 
} from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            {t.about.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>

            <div className="pt-3">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-brand-500" />
                {t.about.interestsTitle}
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.about.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights & Ambition Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Vision & Next Steps */}
            <div className="rounded-2xl glass-card p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-sm">
                <Target className="w-4 h-4" />
                <span>Objectifs & Vision</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.about.visionText}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Globe2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Cotonou $\rightarrow$ Projets & Études supérieures</span>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Formation</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-1 block">Epitech Bénin</span>
                <span className="text-xs text-brand-600 dark:text-brand-400">Tek 3 (Bac+3)</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Pédagogie</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-1 block">Par projets</span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400">Pratique intensive</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Stage réalisé</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-1 block">NOCIBE</span>
                <span className="text-xs text-slate-500">2 mois en entreprise</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Esprit</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-1 block">Itératif</span>
                <span className="text-xs text-brand-600 dark:text-brand-400">Curieuse & appliquée</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
