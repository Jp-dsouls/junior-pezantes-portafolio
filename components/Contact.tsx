'use client';

import { useState } from 'react';
import { useTranslations } from '@/app/[lang]/i18n-context';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Spinner } from '@/components/ui/spinner';
import { SuccessModal } from '@/components/SuccessModal';

export function Contact() {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.95fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {t('contact.title')}
          </h2>
          <p className="text-lg leading-8 text-gray-300 max-w-xl">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card border border-gray-700 rounded-[32px] p-8 shadow-xl shadow-black/10"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-4">
              <Input
                type="text"
                name="name"
                placeholder={t('contact.name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background border-gray-700"
              />
              <Input
                type="email"
                name="email"
                placeholder={t('contact.email')}
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background border-gray-700"
              />
            </div>

            <Textarea
              name="message"
              placeholder={t('contact.message')}
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-background border-gray-700 resize-none"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 hover:bg-blue-500/90 text-blue-400-foreground gap-2"
            >
              {isLoading ? (
                <>
                  <Spinner className="h-4 w-4" />
                  {t('contact.sending')}
                </>
              ) : (
                t('contact.send')
              )}
            </Button>
          </form>
        </motion.div>

        <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </section>
  );
}
