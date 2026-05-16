import dynamic from 'next/dynamic';
import { Hero } from '@/components/Hero';

// Dynamically import components below the fold
const Projects = dynamic(() => import('@/components/Projects').then(mod => mod.Projects), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-card/50 rounded-lg" />
});
const Experience = dynamic(() => import('@/components/Experience').then(mod => mod.Experience), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-card/50 rounded-lg" />
});
const Skills = dynamic(() => import('@/components/Skills').then(mod => mod.Skills), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-card/50 rounded-lg" />
});
const Certifications = dynamic(() => import('@/components/Certifications').then(mod => mod.Certifications), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-card/50 rounded-lg" />
});
const Contact = dynamic(() => import('@/components/Contact').then(mod => mod.Contact), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-card/50 rounded-lg" />
});

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}
