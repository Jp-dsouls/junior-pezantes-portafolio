'use client';

import { useTranslations } from '@/app/[lang]/i18n-context';
import { motion } from 'framer-motion';
import { SkillsCategory } from './SkillsCategory';
import { skills } from '@/data/portfolio';

export function Skills() {
  const t = useTranslations();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-gray-300">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-12">
          {skills.map((skillGroup) => (
            <SkillsCategory
              key={skillGroup.category}
              title={t(`skills.${skillGroup.category}` as any)}
              skills={skillGroup.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
