import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { timelineData } from '../data/timeline';
import { TimelineItem } from '../types';
import { 
  Milestone, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  MapPin, 
  CheckCircle2,
  Maximize2,
  Minimize2,
  X,
  Calendar
} from 'lucide-react';

export const Timeline: React.FC = () => {
  const { language } = useLanguage();
  // Premier élément ouvert par défaut pour inviter à la lecture
  const [expandedId, setExpandedId] = useState<string | null>(timelineData[0]?.id || null);
  const [modalItem, setModalItem] = useState<TimelineItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalItem) {
        setModalItem(null);
      }
    };
    if (modalItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalItem]);

  const getIcon = (type: string, isLarge: boolean = false) => {
    const size = isLarge ? "w-5 h-5" : "w-4 h-4";
    switch (type) {
      case 'education':
        return <GraduationCap className={`${size} text-brand-500`} />;
      case 'experience':
        return <Briefcase className={`${size} text-accent-cyan`} />;
      case 'personal':
        return <Sparkles className={`${size} text-amber-500`} />;
      default:
        return <Milestone className={`${size} text-brand-500`} />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="journey" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Parcours chronologique' : 'Chronology'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {language === 'fr' ? 'Mon itinéraire' : 'My Journey'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            {language === 'fr' 
              ? 'Cliquez sur une étape pour l’agrandir et lire les détails complets de chaque expérience.' 
              : 'Click on any milestone to expand and comfortably read all experience details.'}
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-500/30 dark:border-brand-500/20 space-y-8 sm:space-y-10">
          
          {timelineData.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Pin */}
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className={`cursor-pointer absolute -left-[31px] sm:-left-[39px] top-2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 transition-all duration-300 flex items-center justify-center shadow-md ${
                    isExpanded 
                      ? 'border-brand-500 ring-4 ring-brand-500/20 scale-110' 
                      : 'border-slate-300 dark:border-slate-700 group-hover:border-brand-500 group-hover:scale-105'
                  }`}
                  title={isExpanded ? "Réduire" : "Agrandir"}
                >
                  {getIcon(item.type)}
                </div>

                {/* Item Card (Interactive & Expandable) */}
                <article
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleExpand(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(item.id);
                    }
                  }}
                  className={`cursor-pointer rounded-2xl glass-card transition-all duration-300 border ${
                    isExpanded
                      ? 'p-6 sm:p-8 border-brand-500/60 ring-2 ring-brand-500/30 shadow-2xl bg-white/95 dark:bg-slate-900/95 scale-[1.01]'
                      : 'p-5 sm:p-6 border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-brand-500/40 hover:shadow-md'
                  }`}
                >
                  
                  {/* Top Bar: Period, Location and Expand / Modal Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-colors ${
                        isExpanded
                          ? 'bg-brand-600 text-white shadow-sm shadow-brand-500/25'
                          : 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800'
                      }`}>
                        {language === 'fr' ? item.period.fr : item.period.en}
                      </span>
                      
                      {item.location && (
                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-brand-500" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalItem(item);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title={language === 'fr' ? "Ouvrir en grand écran" : "Open in full view"}
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">
                          {language === 'fr' ? 'Grand écran' : 'Focus'}
                        </span>
                      </button>

                      <div 
                        className="p-1.5 rounded-lg text-slate-400 group-hover:text-brand-500 transition-colors"
                        title={isExpanded ? (language === 'fr' ? "Réduire" : "Collapse") : (language === 'fr' ? "Agrandir" : "Expand")}
                      >
                        {isExpanded ? (
                          <Minimize2 className="w-4 h-4 text-brand-500" />
                        ) : (
                          <Maximize2 className="w-4 h-4 text-slate-400 group-hover:text-brand-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className={`font-bold transition-all ${
                    isExpanded 
                      ? 'text-xl sm:text-2xl text-brand-600 dark:text-brand-400 mb-1' 
                      : 'text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400'
                  }`}>
                    {language === 'fr' ? item.title.fr : item.title.en}
                  </h3>

                  <h4 className={`font-semibold mb-3 transition-colors ${
                    isExpanded 
                      ? 'text-sm sm:text-base text-slate-700 dark:text-slate-300' 
                      : 'text-xs sm:text-sm text-slate-500 dark:text-slate-400'
                  }`}>
                    {item.organization}
                  </h4>

                  {/* Description (dynamically enlarged for readability) */}
                  <p className={`leading-relaxed transition-all ${
                    isExpanded 
                      ? 'text-base sm:text-lg text-slate-800 dark:text-slate-100 mb-6 font-normal' 
                      : 'text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2'
                  }`}>
                    {language === 'fr' ? item.description.fr : item.description.en}
                  </p>

                  {/* Highlights (visible and detailed) */}
                  <div className={`pt-4 border-t border-slate-200/80 dark:border-slate-800/80 ${
                    isExpanded ? 'space-y-3' : 'space-y-1.5'
                  }`}>
                    <span className={`block font-semibold uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 ${
                      isExpanded ? 'text-xs mb-2 text-brand-600 dark:text-brand-400' : 'text-[11px]'
                    }`}>
                      {language === 'fr' ? 'Points clés & Réalisations :' : 'Key Highlights & Deliverables:'}
                    </span>

                    {(language === 'fr' ? item.highlights.fr : item.highlights.en).map((highlight, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-start gap-2.5 transition-all ${
                          isExpanded 
                            ? 'text-sm sm:text-base text-slate-800 dark:text-slate-200 p-2 rounded-xl bg-slate-50/80 dark:bg-slate-800/40' 
                            : 'text-xs text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <CheckCircle2 className={`shrink-0 text-brand-500 ${isExpanded ? 'w-4 h-4 mt-1' : 'w-3.5 h-3.5 mt-0.5'}`} />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom helper pill */}
                  <div className="mt-4 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>
                      {isExpanded 
                        ? (language === 'fr' ? '✓ Vue agrandie active • Cliquez pour réduire' : '✓ Expanded view active • Click to collapse') 
                        : (language === 'fr' ? '🔍 Cliquez pour agrandir et lire en détail' : '🔍 Click to expand for full reading')}
                    </span>
                    <span className="text-brand-500 font-semibold">
                      {isExpanded ? (language === 'fr' ? 'Réduire' : 'Collapse') : (language === 'fr' ? 'Agrandir' : 'Expand')}
                    </span>
                  </div>

                </article>

              </div>
            );
          })}

        </div>

      </div>

      {/* Focus Modal for maximum reading comfort */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setModalItem(null)}
            aria-hidden="true"
          />

          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 z-10 text-slate-100"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-600 text-white">
                {language === 'fr' ? modalItem.period.fr : modalItem.period.en}
              </span>
              {modalItem.location && (
                <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-brand-400" />
                  <span>{modalItem.location}</span>
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
              {language === 'fr' ? modalItem.title.fr : modalItem.title.en}
            </h2>

            <p className="text-sm font-semibold text-brand-400 mb-6">
              {modalItem.organization}
            </p>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 mb-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-400" />
                <span>{language === 'fr' ? 'Contexte & Missions :' : 'Context & Missions:'}</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                {language === 'fr' ? modalItem.description.fr : modalItem.description.en}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'fr' ? 'Points clés & Réalisations :' : 'Key Achievements & Takeaways:'}</span>
              </h3>
              <div className="space-y-2.5">
                {(language === 'fr' ? modalItem.highlights.fr : modalItem.highlights.en).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-sm sm:text-base text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setModalItem(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-colors"
              >
                {language === 'fr' ? 'Fermer la vue' : 'Close view'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
