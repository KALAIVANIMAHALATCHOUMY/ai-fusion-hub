import { ArrowDown, Sparkles, Brain, Code2, ExternalLink } from 'lucide-react';
import TypeWriter from './TypeWriter';
import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Holographic Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `perspective(500px) rotateX(60deg) translateY(-50%)`,
            transformOrigin: 'center top',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          }}
        />
      </div>

      {/* 3D Floating Orbs with Mouse Parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translate3d(${mousePosition.x * 40}px, ${mousePosition.y * 40}px, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-pulse-glow"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--neon-purple) / 0.35) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '1s',
          transform: `translate3d(${mousePosition.x * -50}px, ${mousePosition.y * -50}px, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }} 
      />
      <div 
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full animate-pulse-glow"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--neon-teal) / 0.25) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animationDelay: '2s',
          transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 30}px, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }} 
      />

      {/* 3D Floating Geometric Shapes */}
      <div 
        className="absolute top-20 right-[15%] hidden lg:block"
        style={{
          transform: `translate3d(${mousePosition.x * -60}px, ${mousePosition.y * -60}px, 0) rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`,
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Rotating Ring */}
        <div className="relative w-40 h-40">
          <div 
            className="absolute inset-0 border-2 border-primary/40 rounded-full animate-spin-slow"
            style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.3), inset 0 0 20px hsl(var(--primary) / 0.1)' }}
          />
          <div 
            className="absolute inset-4 border border-neon-purple/30 rounded-full animate-spin-slow"
            style={{ animationDirection: 'reverse', animationDuration: '15s' }}
          />
          <div 
            className="absolute inset-8 border border-neon-teal/20 rounded-full animate-spin-slow"
            style={{ animationDuration: '25s' }}
          />
          {/* Center Glow */}
          <div 
            className="absolute inset-12 rounded-full animate-pulse-glow"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)' }}
          />
        </div>
      </div>

      {/* 3D Floating Cube */}
      <div 
        className="absolute bottom-32 left-[10%] hidden lg:block"
        style={{
          transform: `translate3d(${mousePosition.x * 50}px, ${mousePosition.y * 50}px, 0)`,
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div 
          className="w-20 h-20 animate-float-3d"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(45deg) rotateZ(45deg)',
          }}
        >
          <div 
            className="absolute inset-0 border border-neon-cyan/40"
            style={{ 
              transform: 'translateZ(40px)',
              boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.3)',
              background: 'hsl(var(--neon-cyan) / 0.05)',
            }}
          />
          <div 
            className="absolute inset-0 border border-neon-purple/30"
            style={{ 
              transform: 'translateZ(-40px)',
              background: 'hsl(var(--neon-purple) / 0.05)',
            }}
          />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 3 === 0 
                ? 'hsl(var(--primary) / 0.6)' 
                : i % 3 === 1 
                  ? 'hsl(var(--neon-purple) / 0.5)'
                  : 'hsl(var(--neon-teal) / 0.5)',
              boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with Glow */}
          <div 
            className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full mb-8 animate-fade-up hover:scale-105 transition-all duration-300 cursor-default group"
            style={{ 
              boxShadow: '0 0 20px hsl(var(--primary) / 0.2), inset 0 0 20px hsl(var(--primary) / 0.05)',
            }}
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">AI & LLM Developer</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>

          {/* Main Heading with TypeWriter Effect */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-fade-up leading-tight" style={{ animationDelay: '0.1s' }}>
            <span className="block sm:inline text-foreground">Hi, I'm </span>
            <span className="relative inline-block mt-2 sm:mt-0">
              <span className="text-white">
                <TypeWriter 
                  text="Kalaivani M" 
                  delay={100}
                  startDelay={800}
                  onComplete={() => setShowContent(true)}
                />
              </span>
            </span>
          </h1>

          {/* Subtitle with Smooth Fade + Slide Up */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 max-w-3xl mx-auto leading-relaxed">
              Building <span className="text-primary font-medium">agentic</span>, <span className="text-neon-purple font-medium">automated</span>, and <span className="text-neon-teal font-medium">real-world</span> AI solutions
            </p>
            <p className="text-sm sm:text-base text-muted-foreground/70 mb-6">
              Specializing in GenAI workflows, LLM Agents, RAG Systems & Cloud-based AI products
            </p>
          </div>

          {/* Tech Stack Tags with Staggered Animation */}
          <div 
            className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 transition-all duration-1000 delay-200 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {['GenAI', 'LLM Agents', 'RAG Systems', 'AI Automation', 'Computer Vision', 'IoT'].map((tech, index) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 glass-card text-xs sm:text-sm text-muted-foreground rounded-full border border-border/50 hover:border-primary/50 hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons with Enhanced Glow Effects */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a 
              href="#projects" 
              className="group relative w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--neon-purple)))',
                boxShadow: '0 0 30px hsl(var(--primary) / 0.4), 0 10px 40px hsl(var(--primary) / 0.3)',
              }}
            >
              {/* Shimmer Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              {/* Glow Pulse */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-neon-purple opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <Code2 size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 text-primary-foreground">View My Projects</span>
              <ExternalLink size={16} className="relative z-10 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
            <a 
              href="#" 
              className="group w-full sm:w-auto px-8 py-3.5 glass-card transition-all duration-300 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 border border-border/50 hover:border-primary/50"
              style={{
                boxShadow: '0 0 20px hsl(var(--background) / 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px hsl(var(--neon-purple) / 0.3), 0 10px 40px hsl(var(--neon-purple) / 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px hsl(var(--background) / 0.5)';
              }}
            >
              <Brain size={20} className="group-hover:animate-pulse text-neon-purple" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Stats with 3D Glass Card Effect */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { value: '3+', label: 'AI Projects', color: 'primary' },
              { value: '2', label: 'Hackathon Wins', color: 'neon-purple' },
              { value: '3', label: 'Certifications', color: 'neon-teal' },
              { value: '1', label: 'Internship', color: 'neon-cyan' },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="group glass-card p-4 sm:p-5 rounded-2xl cursor-default transition-all duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                  const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.05)`;
                  e.currentTarget.style.boxShadow = `
                    ${x * 20}px ${y * 20}px 40px hsl(var(--${stat.color}) / 0.2),
                    0 0 20px hsl(var(--${stat.color}) / 0.1)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div 
                  className="text-3xl sm:text-4xl font-display font-bold mb-1"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${stat.color})), hsl(var(--${stat.color}) / 0.7))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: `0 0 30px hsl(var(--${stat.color}) / 0.5)`,
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a href="#about" className="group flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs sm:text-sm mb-2 group-hover:-translate-y-1 transition-transform duration-300">Scroll to explore</span>
            <div className="relative w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div 
                className="w-1.5 h-3 rounded-full bg-current animate-bounce"
                style={{ animationDuration: '1.5s' }}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
