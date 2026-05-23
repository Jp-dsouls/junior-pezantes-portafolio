import { PageTransition } from '@/components/PageTransition';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SocialSidebar } from '@/components/SocialSidebar';
import { I18nContextProvider } from './i18n-context';
import { locales } from '@/i18n/config';
import { Metadata } from 'next';

type Locale = (typeof locales)[number];

async function getMessages(locale: Locale) {
  return (
    await (locale === 'en'
      ? import('@/messages/en.json')
      : import('@/messages/es.json'))
  ).default;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang || 'es') as Locale;
  const messages = await getMessages(locale);
  const metadata = messages.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'es-ES': '/es',
        'en-US': '/en',
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      url: `/${locale}`,
      images: [
        {
          url: '/og-image.webp',
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      title: metadata.title,
      description: metadata.description,
      images: ['/og-image.webp'],
    },
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}



export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang || 'es') as Locale;

  if (lang && !locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <I18nContextProvider locale={locale} messages={messages}>
      <div className="relative flex flex-col min-h-screen text-foreground">
        <SocialSidebar />
        <Navbar />
        <PageTransition>
          <main className="flex-grow pt-16">{children}</main>
        </PageTransition>
        <Footer />
      </div>
    </I18nContextProvider>
  );
}
