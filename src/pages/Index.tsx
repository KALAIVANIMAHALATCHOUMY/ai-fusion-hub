import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import HackathonsSection from '@/components/HackathonsSection';
import EventsSection from '@/components/EventsSection';
import SwagSection from '@/components/SwagSection';
import CertificationsSection from '@/components/CertificationsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Kalaivani M — AI & LLM Developer Portfolio';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI Developer Portfolio showcasing GenAI projects, LLM agents, RAG systems, and hackathon wins. Kalaivani M - Building intelligent systems for real-world automation.');
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <HackathonsSection />
      <EventsSection />
      <SwagSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
