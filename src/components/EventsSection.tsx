import { Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TechEvent {
  id: number;
  title: string;
  organizer: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
  color: string;
}

const events: TechEvent[] = [
  {
    id: 1,
    title: 'Adobe ColdFusion Summit India 2025',
    organizer: 'Adobe',
    date: '6th December 2025',
    location: 'Bangalore',
    description: 'Attended an insightful summit focused on how AI is reshaping Adobe ColdFusion applications, with sessions backed by live demos and hands-on implementation.',
    highlights: [
      'Generative AI & LLM Basics for CF Developers',
      'AI Coding Assistants for CFML & CFScript',
      'Agentic Workflows with MCP in ColdFusion',
      'RAG for Enterprise CF Applications',
      'AI-Driven Exam Generator & Auto-Grader',
    ],
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Microsoft "Season of AI" Workshop',
    organizer: 'Microsoft India',
    date: '2025',
    location: 'Bengaluru',
    description: 'Attended the Season of AI workshop at Microsoft India, gaining profound insights into the future of AI and its revolutionary applications.',
    highlights: [
      'Getting Started with Azure AI Studio',
      'Microsoft Responsible AI principles',
      'Generative AI for Developers with Azure',
      'Networking with industry experts',
    ],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 3,
    title: 'Atlassian ACE Event — JIRA & Trello',
    organizer: 'Atlassian Community',
    date: '2025',
    location: 'Bangalore',
    description: 'Attended the Atlassian ACE community event focused on JIRA Reporting, Dashboards, and Trello Integration for workflow optimization.',
    highlights: [
      'Customized JIRA dashboards & JQL for reporting',
      'Trello integration for task management',
      'Live demos for workflow efficiency',
    ],
    color: 'from-blue-400 to-cyan-400',
  },
];

const EventCard = ({ event, index }: { event: TechEvent; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`glass-card-hover rounded-2xl overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`h-1 bg-gradient-to-r ${event.color}`} />
      <div className="p-8">
        <h3 className="font-display text-lg font-bold mb-1">{event.title}</h3>
        <p className="text-primary text-sm font-medium mb-2">{event.organizer}</p>
        <div className="flex items-center gap-4 text-muted-foreground text-xs mb-4">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{event.date}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
        <ul className="space-y-1.5">
          {event.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-neon-teal/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-medium mb-4 block">Community</span>
            <h2 className="section-heading">
              Tech <span className="text-gradient">Events</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Summits, workshops, and community events I've attended
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <EventCard key={e.id} event={e} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
