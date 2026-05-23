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
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
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
    setResultMessage(null);
    setIsErrorMessage(false);

    const form = e.currentTarget;
    const formDataToSend = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setResultMessage('Falta la clave de Web3Forms. Verifica la configuración.');
      setIsErrorMessage(true);
      setIsLoading(false);
      return;
    }

    formDataToSend.append('access_key', accessKey);
    formDataToSend.append('subject', `Nuevo mensaje de contacto de ${formData.name}`);
    formDataToSend.append('from_name', 'Portafolio Contacto');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      let result: any = null;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error('Web3Forms response parse error:', jsonError);
      }

      if (response.ok && result?.success) {
        setShowModal(true);
        setResultMessage(t('contact.successSimple'));
        setIsErrorMessage(false);
        setFormData({ name: '', email: '', message: '' });
        form.reset();
      } else {
        setResultMessage(
          result?.message || result?.error || t('contact.error')
        );
        setIsErrorMessage(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setResultMessage('Error de red. Intenta nuevamente más tarde.');
      setIsErrorMessage(true);
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

            {resultMessage && (
              <p
                className={`mt-3 text-sm ${
                  isErrorMessage ? 'text-rose-400' : 'text-emerald-400'
                }`}
              >
                {resultMessage}
              </p>
            )}
          </form>
        </motion.div>

        <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </section>
  );
}
