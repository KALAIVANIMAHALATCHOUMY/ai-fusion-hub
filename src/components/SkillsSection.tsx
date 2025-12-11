import { Brain, Code, Globe, Eye, Cloud, Cpu, Workflow, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SkillGroup {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: { name: string; level: 'basic' | 'intermediate' | 'advanced'; usedIn?: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'primary',
    skills: [
      { name: 'Large Language Models', level: 'advanced', usedIn: 'Video Analysis Platform' },
      { name: 'Generative AI', level: 'advanced', usedIn: 'All Projects' },
      { name: 'RAG Systems', level: 'advanced', usedIn: 'Video Analysis' },
      { name: 'Agentic AI', level: 'advanced', usedIn: 'Receipt Management' },
      { name: 'Machine Learning', level: 'intermediate' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'secondary',
    skills: [
      { name: 'Python', level: 'advanced', usedIn: 'All AI Projects' },
      { name: 'JavaScript', level: 'intermediate', usedIn: 'Web Applications' },
      { name: 'C', level: 'intermediate' },
      { name: 'C++', level: 'intermediate', usedIn: 'Arduino Projects' },
    ],
  },
  {
    title: 'Web & Backend',
    icon: Globe,
    color: 'accent',
    skills: [
      { name: 'Flask', level: 'advanced', usedIn: 'Video Analysis Platform' },
      { name: 'Streamlit', level: 'advanced', usedIn: 'AI Dashboards' },
      { name: 'HTML/CSS', level: 'intermediate', usedIn: 'Unisys Internship' },
      { name: 'Bootstrap', level: 'intermediate' },
      { name: 'PHP', level: 'basic' },
    ],
  },
  {
    title: 'Computer Vision & DL',
    icon: Eye,
    color: 'neon-blue',
    skills: [
      { name: 'YOLOv8', level: 'advanced', usedIn: 'Video Analysis' },
      { name: 'OpenCV', level: 'intermediate' },
      { name: 'PyTorch', level: 'intermediate' },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    color: 'neon-teal',
    skills: [
      { name: 'Azure OpenAI', level: 'intermediate' },
      { name: 'Firebase', level: 'intermediate', usedIn: 'Receipt Management' },
      { name: 'MongoDB', level: 'intermediate', usedIn: 'Video Analysis' },
      { name: 'Jira', level: 'intermediate', usedIn: 'Unisys Internship' },
      { name: 'n8n', level: 'basic' },
    ],
  },
  {
    title: 'Embedded & IoT',
    icon: Cpu,
    color: 'neon-purple',
    skills: [
      { name: 'Arduino UNO', level: 'advanced', usedIn: 'Health Monitoring' },
      { name: 'Raspberry Pi', level: 'intermediate' },
      { name: 'IoT Systems', level: 'advanced', usedIn: 'Health Monitoring' },
    ],
  },
  {
    title: 'AI Orchestration',
    icon: Workflow,
    color: 'primary',
    skills: [
      { name: 'LangChain', level: 'advanced', usedIn: 'Receipt Management' },
      { name: 'Google ADK', level: 'advanced', usedIn: 'Hackathon Project' },
      { name: 'UiPath', level: 'intermediate' },
      { name: 'AI Automation', level: 'advanced' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Heart,
    color: 'secondary',
    skills: [
      { name: 'Leadership', level: 'advanced' },
      { name: 'Teamwork', level: 'advanced' },
      { name: 'Problem Solving', level: 'advanced' },
      { name: 'Communication', level: 'advanced' },
    ],
  },
];

const levelColors = {
  basic: 'w-1/3',
  intermediate: 'w-2/3',
  advanced: 'w-full',
};

interface SkillCardProps {
  group: SkillGroup;
  index: number;
}

const SkillCard = ({ group, index }: SkillCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const Icon = group.icon;

  return (
    <div
      ref={ref}
      className={`glass-card-hover p-6 rounded-2xl transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div 
          className={`w-10 h-10 rounded-xl bg-${group.color}/10 flex items-center justify-center transition-transform duration-500 ${
            isVisible ? 'rotate-0 scale-100' : '-rotate-12 scale-75'
          }`}
          style={{ transitionDelay: `${index * 100 + 150}ms` }}
        >
          <Icon className={`w-5 h-5 text-${group.color}`} />
        </div>
        <h3 className="font-display font-semibold text-sm">{group.title}</h3>
      </div>

      <div className="space-y-4">
        {group.skills.map((skill, skillIndex) => (
          <div 
            key={skill.name} 
            className={`group transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: `${index * 100 + 200 + skillIndex * 50}ms` }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs text-muted-foreground capitalize">{skill.level}</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-500 group-hover:shadow-[0_0_10px_hsl(var(--primary))] ${levelColors[skill.level]}`}
              />
            </div>
            {skill.usedIn && (
              <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Used in: {skill.usedIn}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-medium mb-4 block">Technical Expertise</span>
            <h2 className="section-heading">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              A comprehensive toolkit for building intelligent systems, from AI models to embedded hardware
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, index) => (
              <SkillCard key={group.title} group={group} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
