import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { timelineData } from '../data/timeline';
import { 
  Milestone, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export const Timeline: React.FC = () => {
  const { t, language } = useLanguage();

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-brand-500" />;
      case 'experience':
        return <Briefcase className="w-4 h-4 text-accent-cyan" />;
      case 'personal':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      default:
        return <Milestone className="w-4 h-4 text-brand-500" />;
    }
  };

  return (
    <section id="journey" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 mb-3">
            <Milestone className="w-3.5 h-3.5" />
            {t.journey.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.journey.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            {t.journey.subtitle}
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-500/30 dark:border-brand-500/20 space-y-10">
          
          {timelineData.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Pin */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-brand-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                {getIcon(item.type)}
              </div>

              {/* Item Card */}
              <div className="rounded-2xl glass-card p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm group-hover:border-brand-500/40 transition-all">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                    {language === 'fr' ? item.period.fr : item.period.en}
                  </span>
                  
                  {item.location && (
                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <MapPin className="w-3 h-3 text-brand-500" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {language === 'fr' ? item.title.fr : item.title.en}
                </h3>

                <h4 className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  {item.organization}
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {language === 'fr' ? item.description.fr : item.description.en}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200/70 dark:border-slate-800/70">
                  {(language === 'fr' ? item.highlights.fr : item.highlights.en).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
