import React from 'react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  ExternalLink, 
  Info, 
  UserCheck, 
  Clock, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const { t, language } = useLanguage();

  const getStatusBadge = () => {
    switch (project.status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-3 h-3" />
            <span>{t.projects.statusCompleted}</span>
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
            <Clock className="w-3 h-3" />
            <span>{t.projects.statusInProgress}</span>
          </span>
        );
      case 'prototype':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <Sparkles className="w-3 h-3" />
            <span>{t.projects.statusPrototype}</span>
          </span>
        );
      default:
        return null;
    }
  };

  const getTypeBadge = () => {
    const labels = {
      personnel: { fr: 'Personnel', en: 'Personal' },
      académique: { fr: 'Académique (Epitech)', en: 'Academic (Epitech)' },
      professionnel: { fr: 'Professionnel (Stage)', en: 'Professional (Internship)' },
    };
    return (
      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {language === 'fr' ? labels[project.type].fr : labels[project.type].en}
      </span>
    );
  };

  return (
    <article className="group flex flex-col justify-between rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 overflow-hidden hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl">
      
      {/* Top Banner / Visual Representation */}
      <div className="relative h-44 bg-gradient-to-tr from-slate-900 via-brand-950 to-slate-900 p-5 flex flex-col justify-between overflow-hidden">
        
        {/* Subtle decorative mesh / background badge */}
        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-brand-500/10 blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
        
        <div className="flex items-center justify-between z-10">
          {getTypeBadge()}
          {getStatusBadge()}
        </div>

        <div className="z-10">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-brand-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-brand-200/80 font-mono mt-1 line-clamp-1">
            {project.technologies.slice(0, 3).join(' • ')}
          </p>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-3">
          {/* Short Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'fr' ? project.shortDescription.fr : project.shortDescription.en}
          </p>

          {/* Role Preview */}
          <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 bg-slate-100/70 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <UserCheck className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
            <span className="line-clamp-2">
              <strong className="text-slate-900 dark:text-slate-200">
                {language === 'fr' ? 'Rôle : ' : 'Role: '}
              </strong>
              {language === 'fr' ? project.role.fr : project.role.en}
            </span>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
          
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-500 py-1.5 px-3 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-950/50 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{t.projects.viewDetails}</span>
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500 transition-colors"
                title={t.projects.viewCode}
                aria-label={`${t.projects.viewCode} pour ${project.title}`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-sm shadow-brand-500/20 transition-all hover:scale-105"
                title={t.projects.liveDemo}
              >
                <span>{t.projects.liveDemo}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

        </div>

      </div>

    </article>
  );
};
