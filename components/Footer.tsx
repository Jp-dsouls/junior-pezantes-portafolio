'use client';

import { useTranslations } from '@/app/[lang]/i18n-context';
import { motion } from 'framer-motion';

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-gray-700 bg-gray-800/30 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-300">
            {t('footer.copyright')} © {currentYear}
          </p>

          <div className="flex items-center gap-2 text-gray-300">
            <span>{t('footer.made')}</span>
            <span>{t('footer.by')} Junior Pezantes</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
