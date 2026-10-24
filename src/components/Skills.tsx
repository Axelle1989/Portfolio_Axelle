import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/skills';
import { SkillCategory } from '../types';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Wrench, 
  Users, 
  Sparkles,
  BookOpen,
  CheckCircle
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');

  const categories: { id: SkillCategory | 'all'; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: t.skills.categories.all, icon: <Sparkles className="w-4 h-4" /> },
    { id: 'web', label: t.skills.categories.web, icon: <Code2 className="w-4 h-4" /> },
    { id: 'software', label: t.skills.categories.software, icon: <Terminal className="w-4 h-4" /> },
    { id: 'ai-data', label: t.skills.categories['ai-data'], icon: <Cpu className="w-4 h-4" /> },
    { id: 'tools', label: t.skills.categories.tools, icon: <Wrench className="w-4 h-4" /> },
    { id: 'transversal', label: t.skills.categories.transversal, icon: <Users className="w-4 h-4" /> },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            {t.skills.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.skills.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-6 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>{t.skills.statusAcquired}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500" />
            <span>{t.skills.statusLearning}</span>
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => {
            const isAcquired = skill.status === 'acquired';
            return (
              <div
                key={index}
                className="group p-4 sm:p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {skill.name}
                  </h3>
                  
                  {isAcquired ? (
                    <span 
                      className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                      title={t.skills.statusAcquired}
                    >
                      <CheckCircle className="w-3 h-3" />
                      <span>Acquis</span>
                    </span>
                  ) : (
                    <span 
                      className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-800"
                      title={t.skills.statusLearning}
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>En cours</span>
                    </span>
                  )}
                </div>

                {skill.note && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === 'fr' ? skill.note.fr : skill.note.en}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
