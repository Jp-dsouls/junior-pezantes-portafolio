'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import { useTranslations } from '@/app/[lang]/i18n-context';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const t = useTranslations('contact');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="relative z-[100]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-card rounded-lg shadow-2xl max-w-md w-full border border-gray-700 pointer-events-auto">
              <div className="p-6 md:p-8 relative">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Success icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2,
                  }}
                  className="flex justify-center mb-6"
                >
                  <CheckCircle className="w-16 h-16 text-blue-400" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {t('success.title')}
                  </h2>
                  <p className="text-gray-300 mb-2">
                    {t('success.message')}
                  </p>
                  <p className="text-sm text-gray-300">
                    {t('success.response')}
                  </p>
                </motion.div>

                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={onClose}
                  className="w-full mt-6 px-4 py-2 bg-blue-500 text-blue-400-foreground rounded-lg hover:bg-blue-500/90 transition-colors font-medium"
                >
                  {t('success.close')}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
