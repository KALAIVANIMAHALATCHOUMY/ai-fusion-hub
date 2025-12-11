import { MapPin, Mail, Phone, Linkedin, Target, Lightbulb, Users, Zap } from 'lucide-react';
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

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  const highlights = [
    { icon: Target, text: 'Innovation Mindset' },
    { icon: Zap, text: 'Quick Execution' },
    { icon: Users, text: 'Team Collaborator' },
    { icon: Lightbulb, text: 'Adaptable Learner' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-medium mb-4 block">Get to Know Me</span>
            <h2 className="section-heading">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <AnimatedCard index={0} className="glass-card p-8 rounded-2xl">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate <span className="text-primary font-semibold">AI Developer</span> focused on building real-world automation and intelligent platforms. Currently pursuing my B.Tech at Sri Manakula Vinayagar Engineering College, I specialize in{' '}
                  <span className="text-secondary font-semibold">Generative AI</span>,{' '}
                  <span className="text-accent font-semibold">LLM Agents</span>, and{' '}
                  <span className="text-neon-blue font-semibold">IoT Systems</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Driven by innovation and hands-on experimentation, I've participated in multiple hackathons, winning the Infosys AI Innovation Hackathon 2025 and securing Second Runner-up at the Unisys Innovation Program. I believe in building solutions that solve real problems in healthcare, sustainability, and digital automation.
                </p>
              </AnimatedCard>

              {/* Contact Info */}
              <AnimatedCard index={1} className="glass-card p-6 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">Puducherry, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-sm truncate">kalaivanimagudeswaran23@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-sm">+91 9488293674</span>
                  </div>
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                </div>
              </AnimatedCard>
            </div>

            {/* Right Side - Why Me */}
            <div className="space-y-6">
              <AnimatedCard index={0}>
                <h3 className="font-display text-2xl font-bold mb-6">Why Work With Me?</h3>
              </AnimatedCard>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map(({ icon: Icon, text }, index) => (
                  <AnimatedCard 
                    key={text} 
                    index={index + 1}
                    className="glass-card-hover p-6 rounded-2xl flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="font-medium">{text}</span>
                  </AnimatedCard>
                ))}
              </div>

              {/* Quick Facts */}
              <AnimatedCard index={5} className="glass-card p-6 rounded-2xl">
                <h4 className="font-semibold mb-4 text-lg">Quick Facts</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Built multiple AI-powered platforms including video analyzers and receipt management systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2" />
                    <span className="text-muted-foreground">Experience with enterprise tools at Unisys during internship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <span className="text-muted-foreground">National Level Yoga Guinness World Record holder</span>
                  </li>
                </ul>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
