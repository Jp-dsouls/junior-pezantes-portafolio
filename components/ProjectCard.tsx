'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale, useTranslations } from '@/app/[lang]/i18n-context';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations();
  const locale = useLocale();

  const title = locale === 'es' ? project.titleEs : project.titleEn;
  const description = locale === 'es' ? project.descriptionEs : project.descriptionEn;

  const detailsHref = `/${locale}/projects/${project.id}`;
  const isInProgress = project.status === 'inProgress';
  const isDisabled = project.status === 'disabled';
  const hasExternalLink = Boolean(project.link);
  const projectHref = project.link ?? detailsHref;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group rounded-lg border border-gray-700 bg-card overflow-hidden hover:shadow-lg transition-shadow"
      role="article"
    >
      {/* Project Screenshot */}
      <div className="h-48 overflow-hidden relative bg-gray-900">
        <Image
          src={project.image}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-xs text-white font-medium px-2.5 py-1 rounded-full">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mb-4 flex-1">{description}</p>

        <div className="mb-6">
          <p className="text-xs font-semibold text-blue-400 mb-2">
            {t('projects.technologies')}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-700">
          <Link
            href={detailsHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>{t('projects.viewDetails')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {isDisabled ? (
            <Button variant="secondary" size="sm" className="min-w-[160px] opacity-70" disabled>
              {t('projects.disabled')}
            </Button>
          ) : isInProgress ? (
            <Button variant="secondary" size="sm" className="min-w-[160px]" disabled>
              {t('projects.comingSoon')}
            </Button>
          ) : (
            <Button 
              asChild={hasExternalLink} 
              variant="secondary" 
              size="sm" 
              className="min-w-[160px]" 
              disabled={!hasExternalLink}
            >
              {hasExternalLink ? (
                <Link href={projectHref} target="_blank" rel="noreferrer">
                  {t('projects.goToProject')}
                </Link>
              ) : (
                <span>{t('projects.goToProject')}</span>
              )}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
