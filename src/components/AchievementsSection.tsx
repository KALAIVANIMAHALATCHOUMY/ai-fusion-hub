import { Trophy, Award, Medal, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Achievement {
  id: number;
  title: string;
  event: string;
  year: string;
  description: string;
  tech: string[];
  icon: React.ElementType;
  color: string;
  rank?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Winner',
    event: 'Infosys Consulting AI Innovation Hackathon',
    year: '2025',
    description: 'Developed an innovative AI solution that impressed judges with its practical application and technical excellence.',
    tech: ['Generative AI', 'LLM Agents', 'Cloud Integration'],
    icon: Trophy,
    color: 'from-yellow-500 to-amber-600',
    rank: '1st Place',
  },
  {
    id: 2,
    title: 'Second Runner-up',
    event: 'Unisys Innovation Program Y15',
    year: '2024',
    description: 'Showcased innovation capabilities among top performers in the prestigious Unisys program.',
    tech: ['AI Automation', 'Enterprise Tools'],
    icon: Award,
    color: 'from-orange-400 to-red-500',
    rank: '3rd Place',
  },
  {
    id: 3,
    title: 'Participant & Builder',
    event: 'Agentic AI Hackathon (Google Cloud x Hack2Skill)',
    year: '2024',
    description: 'Built the Google Wallet Receipt Management system using cutting-edge agentic AI technologies.',
    tech: ['Google ADK', 'LangChain', 'Firebase'],
    icon: Medal,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 4,
    title: 'National Record Holder',
    event: 'Yoga Guinness World Record',
    year: '',
    description: 'Participated in a national-level yoga event that achieved a Guinness World Record.',
    tech: [],
    icon: Star,
    color: 'from-purple-400 to-pink-500',
  },
];

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const Icon = achievement.icon;

  return (
    <div
      ref={ref}
      className={`glass-card-hover rounded-2xl overflow-hidden group transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Gradient Top Bar */}
      <div className={`h-1 bg-gradient-to-r ${achievement.color}`} />
      
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div 
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg transition-transform duration-500 ${
              isVisible ? 'rotate-0' : '-rotate-12'
            }`}
            style={{ transitionDelay: `${index * 150 + 200}ms` }}
          >
            <Icon className="w-8 h-8 text-background" />
          </div>
          {achievement.rank && (
            <span 
              className={`px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${achievement.color} text-background transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              {achievement.rank}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-bold mb-2">
          {achievement.title}
        </h3>
        <p className="text-primary font-medium mb-1">{achievement.event}</p>
        {achievement.year && (
          <p className="text-sm text-muted-foreground mb-4">{achievement.year}</p>
        )}
        
        <p className="text-muted-foreground mb-6">
          {achievement.description}
        </p>

        {achievement.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {achievement.tech.map((tech, techIndex) => (
              <span
                key={tech}
                className={`px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: `${index * 150 + 400 + techIndex * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const AchievementsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-medium mb-4 block">Recognition</span>
            <h2 className="section-heading">
              Achievements & <span className="text-gradient">Awards</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Milestones that mark my journey in AI innovation
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard 
                key={achievement.id} 
                achievement={achievement} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
