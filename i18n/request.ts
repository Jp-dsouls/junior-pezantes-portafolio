import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from './config';

const getMessages = async (locale: string) => {
  const isEnglish = locale === 'en';
  const messages = (
    await (isEnglish
      ? import('../messages/en.json')
      : import('../messages/es.json'))
  ).default;
  return messages;
};

export default getRequestConfig(async ({ locale }) => {
  // Validar locale con valor por defecto
  const validLocale = (!locale || !locales.includes(locale as any)) ? defaultLocale : locale;
  const resolvedLocale = validLocale as 'es' | 'en';
  
  const messages = await getMessages(resolvedLocale);

  return {
    messages,
    timeZone: 'America/Bogota',
    now: new Date(),
  };
});
