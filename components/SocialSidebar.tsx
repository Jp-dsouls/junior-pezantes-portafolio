'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/data/portfolio';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
  mail: <Mail className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
};

export function SocialSidebar() {
  return (
    <div className="fixed left-4 bottom-0 z-50 hidden flex-col items-center gap-4 lg:flex">
      {socialLinks.map((link) => {
        const isExternalLink = /^(https?:|mailto:)/.test(link.url);

        return (
          <motion.a
            key={link.name}
            href={link.url}
            target={isExternalLink ? '_blank' : undefined}
            rel={isExternalLink ? 'noopener noreferrer' : undefined}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 text-slate-100 shadow-lg shadow-black/20 transition-colors hover:bg-slate-800"
          >
            {iconMap[link.icon] || <Mail className="h-5 w-5" />}
          </motion.a>
        );
      })}
      <div className="h-20 w-px bg-slate-500/40" />
    </div>
  );
}
