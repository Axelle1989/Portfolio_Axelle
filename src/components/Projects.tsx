import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { FolderGit2, Sparkles, Code2, Terminal, Cpu, User, GraduationCap } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: { id: ProjectCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: t.projects.filterAll, icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'web', label: t.projects.filterWeb, icon: <Code2 className="w-3.5 h-3.5" /> },
    { id: 'software', label: t.projects.filterSoftware, icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'ai-data', label: t.projects.filterAiData, icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'personal', label: t.projects.filterPersonal, icon: <User className="w-3.5 h-3.5" /> },
    { id: 'academic', label: t.projects.filterAcademic, icon: <GraduationCap className="w-3.5 h-3.5" /> },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web' && project.category.includes('web')) return true;
    if (activeFilter === 'software' && project.category.includes('software')) return true;
    if (activeFilter === 'ai-data' && project.category.includes('ai-data')) return true;
    if (activeFilter === 'personal' && (project.type === 'personnel' || project.category.includes('personal'))) return true;
    if (activeFilter === 'academic' && (project.type === 'académique' || project.category.includes('academic'))) return true;
    return false;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            {t.projects.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.projects.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 text-slate-500">
            <p>{t.projects.noProjectsFound}</p>
          </div>
        )}

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
