import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import { ParticlesBackground } from '@/components/ParticlesBackground'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: '--font-geist-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://tu-portafolio.vercel.app'),
  title: {
    default: 'Junior Pezantes | Full Stack Developer',
    template: '%s | Junior Pezantes',
  },
  description: 'Especialista en Vue, Node.js y Arquitectura de Datos. Explora mis proyectos y habilidades.',
  keywords: ['Vue', 'Node.js', 'Full Stack Developer', 'Arquitectura de Datos', 'Software Engineer'],
  authors: [{ name: 'Junior Pezantes' }],
  creator: 'Junior Pezantes',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: 'Junior Pezantes | Full Stack Developer',
    description: 'Especialista en Vue, Node.js y Arquitectura de Datos. Explora mis proyectos y habilidades.',
    siteName: 'Portafolio Profesional',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Junior Pezantes | Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junior Pezantes | Full Stack Developer',
    description: 'Especialista en Vue, Node.js y Arquitectura de Datos. Explora mis proyectos y habilidades.',
    images: ['/og-image.svg'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark scroll-smooth">
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ParticlesBackground />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
