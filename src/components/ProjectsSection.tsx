import { Video, Receipt, HeartPulse, ArrowRight, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  color: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Unlocking the Power of LLMs',
    subtitle: 'Advanced Video Analysis Platform',
    icon: Video,
    description: 'Built a smart video analyzer leveraging LLM agents for automatic object detection, summarization, and highlight extraction.',
    challenge: 'Manual video analysis is time-consuming and prone to human error, especially for security audits and healthcare monitoring.',
    solution: 'Developed an end-to-end pipeline using YOLOv8 for object detection, LLMs for intelligent summarization, and RAG for contextual querying.',
    impact: 'Reduced manual processing time significantly with automated highlight extraction and searchable video content.',
    techStack: ['GenAI', 'Flask', 'Python', 'YOLOv8', 'Streamlit', 'MongoDB', 'RAG', 'LLMs'],
    color: 'primary',
    githubUrl: 'https://github.com/KALAIVANIMAHALATCHOUMY/Unlocking-the-Power-of-LLMs',
  },
  {
    id: 2,
    title: 'Google Wallet Receipt Management',
    subtitle: 'Agentic AI Hackathon Winner',
    icon: Receipt,
    description: 'Award-winning intelligent agent that automates receipt insights using cloud-based OCR and Agentic AI workflows.',
    challenge: 'Managing receipts manually is tedious. Consumers and businesses need automated categorization and expense tracking.',
    solution: 'Built an agentic AI system using Google ADK and LangChain that performs real-time OCR, categorizes expenses, and provides actionable insights.',
    impact: 'Won the Agentic AI Hackathon (Google Cloud x Hack2Skill). Designed for both consumer and business utility.',
    techStack: ['GenAI', 'Firebase', 'Google ADK', 'LangChain', 'Cloud Integration', 'Agentic AI'],
    color: 'secondary',
    githubUrl: 'https://github.com/KALAIVANIMAHALATCHOUMY/Google-Wallet-Receipt-Management',
  },
  {
    id: 3,
    title: 'Patient Health Monitoring System',
    subtitle: 'IoT-Based Healthcare Solution',
    icon: HeartPulse,
    description: 'Real-time vitals monitoring system with emergency alerts, built on Arduino for accessible healthcare.',
    challenge: 'Remote patients need continuous monitoring without expensive hospital equipment.',
    solution: 'Prototyped a hardware system using Arduino UNO and sensors to track vital signs and trigger emergency alerts.',
    impact: 'Created a working prototype demonstrating low-cost healthcare monitoring for underserved communities.',
    techStack: ['Arduino UNO', 'IoT', 'C++', 'Serial Communication', 'Sensors'],
    color: 'accent',
    githubUrl: 'https://github.com/KALAIVANIMAHALATCHOUMY/Patient-Health-Monitoring-System',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const Icon = project.icon;

  return (
    <div
      ref={ref}
      className={`glass-card-hover rounded-3xl overflow-hidden transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-16 scale-95'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="p-8 lg:p-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div className="flex items-start gap-4">
            <div 
              className={`w-16 h-16 rounded-2xl bg-${project.color}/10 flex items-center justify-center shrink-0 transition-all duration-500 ${
                isVisible ? 'rotate-0 scale-100' : '-rotate-12 scale-75'
              }`}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
              <Icon className={`w-8 h-8 text-${project.color}`} />
            </div>
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">
                {project.title}
              </h3>
              <p className={`text-${project.color} font-medium`}>{project.subtitle}</p>
            </div>
          </div>
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 glass-card hover:bg-muted/50 rounded-xl transition-all duration-500 hover:scale-110 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: `${index * 200 + 300}ms` }}
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg mb-8">
          {project.description}
        </p>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Challenge', value: project.challenge, color: 'destructive' },
            { label: 'Solution', value: project.solution, color: 'primary' },
            { label: 'Impact', value: project.impact, color: 'accent' },
          ].map((detail, detailIndex) => (
            <div 
              key={detail.label}
              className={`glass-card p-5 rounded-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 200 + 400 + detailIndex * 100}ms` }}
            >
              <h4 className={`font-semibold text-${detail.color} mb-2`}>{detail.label}</h4>
              <p className="text-sm text-muted-foreground">{detail.value}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="font-semibold mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <span
                key={tech}
                className={`skill-badge transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: `${index * 200 + 600 + techIndex * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-medium mb-4 block">Featured Work</span>
            <h2 className="section-heading">
              Projects & <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Real-world AI solutions that solve meaningful problems
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/KALAIVANIMAHALATCHOUMY" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium"
            >
              View All Projects on GitHub
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
