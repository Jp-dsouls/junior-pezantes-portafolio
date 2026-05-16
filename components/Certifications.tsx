'use client';

import { useTranslations, useLocale } from '@/app/[lang]/i18n-context';
import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolio';
import { ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

export function Certifications() {
  const t = useTranslations();
  const locale = useLocale();

  const parseDate = (dateStr: string) => {
    if (dateStr.includes('-')) {
      const parts = dateStr.split('-');
      const year = parseInt(parts[parts.length - 1].trim(), 10);
      return year * 100 + 12;
    }
    const [year, month] = dateStr.split('/');
    return parseInt(year, 10) * 100 + parseInt(month || '1', 10);
  };

  const education = certifications
    .filter((c) => c.type === 'education')
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const certs = certifications
    .filter((c) => c.type === 'certification')
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const renderEducation = (
    title: string,
    items: typeof certifications,
    index: number
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-400">{title}</h3>
      <div className="space-y-4">
        {items.map((item) => {
          const name = locale === 'es' ? item.nameEs : item.nameEn;
          const issuer = locale === 'es' ? item.issuerEs : item.issuerEn;

          return (
            <motion.div
              key={item.id + item.date}
              whileHover={{ x: 5 }}
              className="p-4 rounded-lg border border-gray-700 bg-card hover:bg-card/80 transition-colors select-none"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-1">{name}</h4>
                  <p className="text-sm text-gray-300">{issuer}</p>
                  <p className="text-xs text-gray-300 mt-2">{item.date}</p>
                </div>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-400/80 transition-colors flex-shrink-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            {t('certifications.title')}
          </h2>
          <p className="text-lg text-gray-300">
            {t('certifications.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {renderEducation(t('certifications.education'), education, 0)}

          {/* Certifications vertical carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              {t('certifications.certifications')}
            </h3>

            <div className="relative group">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                  axis: 'y',
                  slidesToScroll: 1,
                }}
                orientation="vertical"
                plugins={[plugin.current]}
                setApi={setApi}
                className="w-full"
              >
                <CarouselContent className="-mt-3 h-[420px]">
                  {certs.map((item, idx) => {
                    const name = locale === 'es' ? item.nameEs : item.nameEn;
                    const issuer =
                      locale === 'es' ? item.issuerEs : item.issuerEn;

                    return (
                      <CarouselItem
                        key={item.id + '-' + idx}
                        className="pt-3 basis-1/4"
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="p-4 rounded-lg border border-gray-700 bg-card hover:bg-card/80 transition-colors h-full select-none"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <h4 className="font-semibold text-white mb-1 truncate">
                                {name}
                              </h4>
                              <p className="text-sm text-gray-300">{issuer}</p>
                              <p className="text-xs text-gray-300 mt-2">
                                {item.date}
                              </p>
                            </div>
                            {item.url && (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-400/80 transition-colors flex-shrink-0"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>


              {/* Dot indicators */}
              <div className="flex justify-center gap-1.5 mt-4">
                {Array.from({ length: Math.min(count, 8) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      current === idx
                        ? 'bg-blue-400 w-4'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
