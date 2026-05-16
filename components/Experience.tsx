'use client';

import { useTranslations, useLocale } from '@/app/[lang]/i18n-context';
import { motion } from 'framer-motion';
import { experience } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const t = useTranslations();
  const locale = useLocale();

  const formatExperienceDate = (date: string) => date.replace('-', '/');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-gray-300">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experience.map((job, index) => {
            const company = locale === 'es' ? job.companyEs : job.companyEn;
            const position = locale === 'es' ? job.positionEs : job.positionEn;
            const description = locale === 'es' ? job.descriptionEs : job.descriptionEn;

            return (
              <motion.div
                key={job.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>

                <div className="mb-2">
                  <h3 className="text-xl font-bold text-foreground">{position}</h3>
                  <p className="text-primary font-semibold">{company}</p>
                </div>

                <div className="text-sm text-muted-foreground mb-4 flex flex-wrap items-center gap-2">
                  {(() => {
                    const formattedStartDate = formatExperienceDate(job.startDate);
                    const formattedEndDate = job.endDate
                      ? formatExperienceDate(job.endDate)
                      : '';

                    return formattedEndDate
                      ? `${formattedStartDate} — ${formattedEndDate}`
                      : formattedStartDate;
                  })()}
                  {job.current && !job.endDate && (
                    <>
                      <span className="text-muted-foreground">—</span>
                      <Badge className="bg-primary/10 text-primary border border-primary/20">
                        {t('experience.current')}
                      </Badge>
                    </>
                  )}
                </div>

                <p className="text-muted-foreground mb-4">{description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
