'use client';

import { motion } from 'framer-motion';
import {
  Box,
  Code2,
  Cloud,
  Database,
  Figma,
  Github,
  GitBranch,
  Gitlab,
  Link,
  Monitor,
  Repeat,
  Server,
  Shell,
  Sparkles,
  Terminal,
  Zap,
  MessageCircle,
  Coffee,
  Hash,
  Gem,
  Layers,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillsCategoryProps {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
}

const skillIcons: Record<string, LucideIcon> = {
  React: Code2,
  Vue: Code2,
  Astro: Sparkles,
  HTML: Code2,
  CSS: Code2,
  Sass: Sparkles,
  Bootstrap: Box,
  'Tailwind CSS': Sparkles,
  'Swiper.js': Repeat,
  JavaScript: Code2,
  BigQuery: Cloud,
  'Next.js': Layers,
  TypeScript: Code2,
  'Framer Motion': Zap,
  Redux: Hash,
  'React Query': Code2,
  HTML5: Code2,
  CSS3: Code2,
  'Vue.js': Code2,
  'Material-UI': Box,
  'Node.js': Terminal,
  'Express.js': Server,
  NestJS: Box,
  Python: Code2,
  Django: Server,
  'REST APIs': Link,
  GraphQL: Database,
  Microservicios: Cloud,
  gRPC: Cloud,
  Git: GitBranch,
  GitHub: Github,
  GitLab: Gitlab,
  Docker: Code2,
  'Google Cloud': Cloud,
  Jenkins: Box,
  'GitHub Actions': Github,
  Postman: Code2,
  apidog: Code2,
  Figma: Figma,
  'Adobe XD': Code2,
  PostgreSQL: Database,
  MongoDB: Database,
  MySQL: Database,
  Redis: Database,
  SQL: Database,
  Firebase: Zap,
  'VS Code': Monitor,
  Jira: Code2,
  Java: Coffee,
  'C#': Hash,
  Golang: Code2,
  'C++': Code2,
  'Kotlin (Android)': Code2,
  'xamarin': Code2,
  'Bash/Shell': Shell,
  PowerShell: Shell,
  PHP: Code2,
  Ruby: Gem,
  'Español (Nativo)': MessageCircle,
  'Inglés (Avanzado - B2)': MessageCircle,
  'Portugués (Intermedio - A2)': MessageCircle,
};

import { useTranslations } from '@/app/[lang]/i18n-context';

export function SkillsCategory({ title, skills, icon }: SkillsCategoryProps) {
  const t = useTranslations();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 mb-4">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {skills.map((skill, index) => {
          const Icon = skillIcons[skill] ?? Code2;

          return (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg hover:border-primary hover:bg-primary/20 transition-all cursor-default text-sm font-medium text-primary"
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{t(`skillNames.${skill}`, skill)}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
