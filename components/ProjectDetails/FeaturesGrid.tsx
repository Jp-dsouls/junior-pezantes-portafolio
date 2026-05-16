'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ProjectFeature } from '@/data/types';
import { Card, CardContent } from '@/components/ui/card';

interface FeaturesGridProps {
  features: ProjectFeature[];
  locale: string;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features, locale }) => {
  const isEn = locale === 'en';

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
        {isEn ? 'Solution Characteristics' : 'Características de la solución'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          // Dynamically get the icon component from Lucide
          const IconComponent = (LucideIcons as any)[feature.icon || 'CheckCircle2'] || LucideIcons.CheckCircle2;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {isEn ? feature.titleEn : feature.titleEs}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEn ? feature.descriptionEn : feature.descriptionEs}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
