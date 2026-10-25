import React, { useEffect } from 'react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  ExternalLink, 
  Target, 
  UserCheck, 
  CheckCircle2, 
  AlertCircle,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 z-10 text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Fermer la modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-brand-950 text-brand-300 border border-brand-800">
              {project.type}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Status: {project.status}
            </span>
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
            {language === 'fr' ? project.description.fr : project.description.en}
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-slate-800" />

        {/* Modal Sections */}
        <div className="space-y-6 text-sm">
          
          {/* Problem Statement */}
          {project.problemStatement && (
            <div className="space-y-2">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-rose-400" />
                <span>{t.projects.modalProblem}</span>
              </h3>
              <p className="text-slate-300 leading-relaxed pl-6">
                {language === 'fr' ? project.problemStatement.fr : project.problemStatement.en}
              </p>
            </div>
          )}

          {/* Role */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-brand-400" />
              <span>{t.projects.modalRole}</span>
            </h3>
            <p className="text-slate-300 leading-relaxed pl-6">
              {language === 'fr' ? project.role.fr : project.role.en}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t.projects.modalFeatures}</span>
            </h3>
            <ul className="space-y-1.5 pl-6">
              {(language === 'fr' ? project.features.fr : project.features.en).map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenges */}
          {project.challenges && (
            <div className="space-y-2">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>{t.projects.modalChallenges}</span>
              </h3>
              <p className="text-slate-300 leading-relaxed pl-6">
                {language === 'fr' ? project.challenges.fr : project.challenges.en}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>{t.projects.modalTech}</span>
            </h3>
            <div className="flex flex-wrap gap-2 pl-6">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Direct Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-500/20 transition-all hover:scale-105"
              >
                <span>{t.projects.liveDemo}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{t.projects.viewCode}</span>
              </a>
            ) : null}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Fermer
          </button>

        </div>

      </div>

    </div>
  );
};
