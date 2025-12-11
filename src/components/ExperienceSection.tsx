import { Building2, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

const AnimatedCard = ({ children, index, className = '' }: AnimatedCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      } ${className}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {children}
    </div>
  );
};

const ExperienceSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  const certifications = [
    {
      title: 'Cybersecurity Virtual Internship',
      issuer: 'AICTE',
      date: 'June 2024',
    },
    {
      title: 'Introduction to IoT',
      issuer: 'NPTEL',
      date: 'May 2024',
    },
    {
      title: 'Automation Explorer',
      issuer: 'UiPath',
      date: 'April 2024',
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-teal/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-medium mb-4 block">Background</span>
            <h2 className="section-heading">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Internship & Education */}
            <div className="space-y-8">
              {/* Internship */}
              <div>
                <AnimatedCard index={0}>
                  <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    Work Experience
                  </h3>
                </AnimatedCard>
                <AnimatedCard index={1} className="glass-card-hover rounded-2xl p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-display text-xl font-bold">Unisys India Pvt Ltd</h4>
                      <p className="text-primary font-medium">Intern</p>
                    </div>
                    <span className="px-3 py-1 glass-card text-sm rounded-full">
                      Jul - Sep 2024
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                    <MapPin className="w-4 h-4" />
                    Bengaluru, India
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-muted-foreground">
                      Built automation and AI tasks using enterprise tools. Worked on:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        LLM agent prototypes and AI automation workflows
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                        Front-end development using HTML/CSS/JS and Flask
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                        Enterprise project management with Jira
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['HTML/CSS', 'JavaScript', 'Flask', 'Jira', 'GenAI', 'LLM Agents'].map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              </div>

              {/* Education */}
              <div>
                <AnimatedCard index={2}>
                  <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                    Education
                  </h3>
                </AnimatedCard>
                <div className="space-y-4">
                  <AnimatedCard index={3} className="glass-card-hover rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">B.Tech in Computer Science</h4>
                      <span className="text-sm text-muted-foreground">2023 - Present</span>
                    </div>
                    <p className="text-primary text-sm">Sri Manakula Vinayagar Engineering College</p>
                    <p className="text-muted-foreground text-sm mt-1">Puducherry, India</p>
                  </AnimatedCard>
                  
                  <AnimatedCard index={4} className="glass-card-hover rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">Higher Secondary Education</h4>
                      <span className="text-sm text-muted-foreground">Completed</span>
                    </div>
                    <p className="text-primary text-sm">Immaculate Heart of Mary Girls Hr. Sec. School</p>
                  </AnimatedCard>
                </div>
              </div>
            </div>

            {/* Right Column - Certifications */}
            <div>
              <AnimatedCard index={0}>
                <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-accent" />
                  Certifications
                </h3>
              </AnimatedCard>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <AnimatedCard 
                    key={cert.title} 
                    index={index + 1}
                    className="glass-card-hover rounded-2xl p-6 flex items-center gap-6"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{cert.title}</h4>
                      <p className="text-primary text-sm">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              {/* Additional Info Card */}
              <AnimatedCard index={5} className="glass-card mt-8 p-8 rounded-2xl">
                <h4 className="font-display text-xl font-bold mb-4">Continuous Learning</h4>
                <p className="text-muted-foreground mb-6">
                  I'm constantly expanding my skillset through online courses, hackathons, and hands-on projects. Currently exploring:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Advanced RAG', 'Multi-Agent Systems', 'MLOps', 'Cloud Architecture'].map((topic) => (
                    <span
                      key={topic}
                      className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
