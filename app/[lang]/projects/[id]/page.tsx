import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Breadcrumb } from '@/components/Breadcrumb';
import { LaptopMockup, PhoneMockup } from '@/components/ProjectDetails/DeviceMockups';
import { FeaturesGrid } from '@/components/ProjectDetails/FeaturesGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Smartphone, Globe, Github, Calendar, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectPageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.flatMap((project) => [
    { lang: 'es', id: project.id },
    { lang: 'en', id: project.id },
  ]);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { lang, id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const isEn = lang === 'en';
  const title = isEn ? project.titleEn : project.titleEs;
  const description = isEn ? project.descriptionLongEn : project.descriptionLongEs;

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Hero / Header Section */}
      <div className="relative overflow-hidden bg-muted/30 border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <Breadcrumb
            items={[
              { label: isEn ? 'Home' : 'Inicio', href: `/${lang}` },
              { label: isEn ? 'Projects' : 'Proyectos', href: `/${lang}#projects` },
              { label: title },
            ]}
          />
          
          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground tracking-tight">
                {title}
              </h1>
              <div className="flex flex-wrap gap-3 mt-4">
                <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {project.year}
                </Badge>
                {/* <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-primary/20 text-primary">
                  <Briefcase className="w-3.5 h-3.5 mr-1.5" />
                  {isEn ? 'Case Study' : 'Caso de Estudio'}
                </Badge> */}
              </div>
            </div>
            
            <div className="flex gap-4">
              {project.link && project.status !== 'disabled' && project.status !== 'inProgress' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <Globe className="w-4 h-4" />
                  {isEn ? 'Live Demo' : 'Ver Proyecto'}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/80 transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Column: Mockups */}
          <div className="lg:col-span-7 xl:col-span-8">
            <Tabs defaultValue="desktop" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-muted/50 p-1 rounded-full">
                  <TabsTrigger value="desktop" className="rounded-full px-6 flex gap-2">
                    <Monitor className="w-4 h-4" />
                    Desktop
                  </TabsTrigger>
                  <TabsTrigger value="mobile" className="rounded-full px-6 flex gap-2">
                    <Smartphone className="w-4 h-4" />
                    Mobile
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="desktop" className="mt-0 focus-visible:outline-none">
                <LaptopMockup image={project.image} alt={`${title} Desktop`} />
              </TabsContent>
              
              <TabsContent value="mobile" className="mt-0 focus-visible:outline-none">
                <PhoneMockup image={project.mobileImage || project.image} alt={`${title} Mobile`} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column: Project Details */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8 relative">
            {/* Decorative dashed lines connecting from the mockup (only on desktop) */}
            <div className="hidden lg:block absolute -left-48 xl:-left-64 top-24 w-48 xl:w-64 border-t-2 border-dashed border-primary/20 z-0" />
            <div className="hidden lg:block absolute -left-48 xl:-left-64 top-[65%] w-48 xl:w-64 border-t-2 border-dashed border-primary/20 z-0" />

            <Card className="border-border bg-card shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-4">
                  {isEn ? 'Overview' : 'Resumen'}
                </h2>
                <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  {description.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-4">
                  {isEn ? 'Tech Stack' : 'Tecnologías'}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1.5 font-medium bg-muted hover:bg-primary/10 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        {project.features && project.features.length > 0 && (
          <div className="mt-20">
            <FeaturesGrid features={project.features} locale={lang} />
          </div>
        )}

        {/* Back to Projects Footer */}
        <div className="mt-20 pt-12 border-t border-border flex justify-center">
          <a
            href={`/${lang}#projects`}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-border rounded-full font-semibold hover:bg-muted transition-all"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            {isEn ? 'Back to Projects' : 'Volver a Proyectos'}
          </a>
        </div>
      </div>
    </div>
  );
}
