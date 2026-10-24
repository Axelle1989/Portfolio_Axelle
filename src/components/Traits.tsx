import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { traitsData } from '../data/traits';
import { 
  Compass, 
  Code2, 
  Sparkles, 
  Rocket, 
  GraduationCap, 
  BrainCircuit 
} from 'lucide-react';

export const Traits: React.FC = () => {
  const { t, language } = useLanguage();

  const getTraitIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-brand-500" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-accent-cyan" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-rose-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-500" />;
      default:
        return <BrainCircuit className="w-5 h-5 text-brand-500" />;
    }
  };

  return (
    <section id="traits" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 mb-3">
            <BrainCircuit className="w-3.5 h-3.5" />
            {t.traits.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.traits.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            {t.traits.subtitle}
          </p>
        </div>

        {/* Traits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traitsData.map((trait) => (
            <div
              key={trait.id}
              className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all duration-300 shadow-sm hover:shadow-md space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center">
                {getTraitIcon(trait.iconName)}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {language === 'fr' ? trait.title.fr : trait.title.en}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {language === 'fr' ? trait.description.fr : trait.description.en}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
