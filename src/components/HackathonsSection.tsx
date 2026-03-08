import { Zap, Medal, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Hackathon {
  id: number;
  title: string;
  event: string;
  year: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  icon: React.ElementType;
  color: string;
  team?: string;
}

const hackathons: Hackathon[] = [
  {
    id: 1,
    title: 'Agentic AI Hackathon',
    event: 'Google Cloud x Hack2Skill',
    year: '2024',
    location: 'Virtual',
    description: 'Built the Google Wallet Receipt Management system using cutting-edge agentic AI technologies.',
    highlights: [
      'Developed agentic AI solution with Google ADK',
      'Integrated LangChain for intelligent workflows',
      'Deployed on Firebase for scalable performance',
    ],
    tech: ['Google ADK', 'LangChain', 'Firebase', 'Agentic AI'],
    icon: Zap,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 2,
    title: 'Vibeathon 2025 — 30-Hour Sprint',
    event: 'Polaris School of Technology x Replit',
    year: '2025',
    location: 'Bangalore',
    description: 'Team FDRK participated in a high-energy 30-hour hackathon built around Replit\'s AI tools. Built Project AURA — AI for Urban Resilience & Adaptation.',
    highlights: [
      'Built Project AURA using GenAI-powered visual intelligence',
      'Location-based reasoning for real-time disaster detection & response',
      'Deployed end-to-end with live environment demonstration',
      'Used Replit Agent3 Mode with vibe coding approach',
    ],
    tech: ['Replit Agent', 'GenAI', 'Agentic AI', 'Prompt Engineering'],
    icon: Zap,
    color: 'from-green-400 to-emerald-500',
    team: 'Team FDRK',
  },
  {
    id: 3,
    title: 'Spark-n-Elevate Hackathon',
    event: 'Merck Group x AWS x nasscom',
    year: '2025',
    location: 'Bengaluru',
    description: 'Built a multi-agent orchestration solution using AWS Bedrock Agents to automate workflows across doctor, patient, and administrative operations in healthcare.',
    highlights: [
      'Multi-agent orchestration with AWS Bedrock Agents',
      'Automated healthcare workflows for doctors, patients & admin',
      'Learned from winning teams\' innovative approaches',
    ],
    tech: ['AWS Bedrock', 'Multi-Agent AI', 'Healthcare AI', 'Cloud'],
    icon: Medal,
    color: 'from-teal-400 to-cyan-500',
  },
  {
    id: 4,
    title: 'Yoga Guinness World Record',
    event: 'National Level Event',
    year: '',
    location: 'India',
    description: 'Participated in a national-level yoga event that achieved a Guinness World Record, showcasing dedication beyond technology.',
    highlights: ['Part of a record-breaking national event'],
    tech: [],
    icon: Star,
    color: 'from-purple-400 to-pink-500',
  },
];

const HackathonCard = ({ hackathon, index }: { hackathon: Hackathon; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const Icon = hackathon.icon;

  return (
    <div
      ref={ref}
      className={`glass-card-hover rounded-2xl overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`h-1 bg-gradient-to-r ${hackathon.color}`} />
      <div className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${hackathon.color} flex items-center justify-center shrink-0`}>
            <Icon className="w-6 h-6 text-background" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">{hackathon.title}</h3>
            <p className="text-primary text-sm font-medium">{hackathon.event}</p>
            <p className="text-muted-foreground text-xs">
              {hackathon.location} {hackathon.year && `• ${hackathon.year}`}
              {hackathon.team && ` • ${hackathon.team}`}
            </p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4">{hackathon.description}</p>

        <ul className="space-y-1.5 mb-4">
          {hackathon.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {hackathon.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {hackathon.tech.map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const HackathonsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="hackathons" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-medium mb-4 block">Participation</span>
            <h2 className="section-heading">
              Hackathon <span className="text-gradient">Participations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Building, learning, and competing at high-energy hackathons
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((h, i) => (
              <HackathonCard key={h.id} hackathon={h} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
