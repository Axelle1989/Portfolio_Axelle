import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Mail, X } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div 
        className="relative w-full max-w-md rounded-3xl glass-card bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-7 z-10 text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {t.cvModal.title}
            </h3>
            <span className="text-xs text-brand-400 font-mono">
              Axelle Kafui HOSSOU
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {t.cvModal.description}
        </p>

        <div className="space-y-3">
          <a
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-500/20 transition-all hover:scale-[1.01]"
          >
            <Mail className="w-4 h-4" />
            <span>{t.cvModal.actionContact}</span>
          </a>

          <button
            onClick={onClose}
            className="w-full px-4 py-2.5 rounded-xl font-medium text-xs text-slate-400 hover:text-white transition-colors"
          >
            {t.cvModal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
