'use client';

import { useTranslations } from '@/app/[lang]/i18n-context';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function Hero() {
  const t = useTranslations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-lg text-blue-400 font-semibold mb-4"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white"
        >
          <span className="block mb-2">Junior Pezantes</span>
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text">
            {t('hero.title')}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-blue-400 font-semibold mb-8"
        >
          {t('hero.experience')}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="gap-2 bg-blue-500 hover:bg-blue-500/90 text-blue-400-foreground"
          >
            <a href="#projects">
              {t('hero.cta')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          <div className="flex items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-r-none border-r-0"
                >
                  {t('hero.cv')}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-7xl w-[95%] h-[95vh] flex flex-col gap-2 p-4 sm:p-6">
                <DialogHeader className="flex-none">
                  <DialogTitle>{t('hero.cv')}</DialogTitle>
                </DialogHeader>
                <div className="flex-1 w-full min-h-0">
                  <iframe
                    src="/Cesar_Junior_Pezantes_Silva.pdf"
                    className="w-full h-full rounded-md border"
                    title="CV"
                  />
                </div>
              </DialogContent>
            </Dialog>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-l-none px-3"
            >
              <a href="/Cesar_Junior_Pezantes_Silva.pdf" download="Cesar_Junior_Pezantes_Silva.pdf" aria-label="Download CV">
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
