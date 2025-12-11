import { Mail, Phone, Linkedin, Github, MapPin, Send, Download, Calendar } from 'lucide-react';
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

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-500' },
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-foreground' },
    { icon: Mail, label: 'Email', href: 'mailto:kalaivanimagudeswaran23@gmail.com', color: 'hover:text-red-500' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-medium mb-4 block">Get in Touch</span>
            <h2 className="section-heading">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              I'm always open to discussing AI projects, hackathons, or opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Card */}
            <AnimatedCard index={0} className="glass-card rounded-3xl p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                <a
                  href="mailto:kalaivanimagudeswaran23@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      kalaivanimagudeswaran23@gmail.com
                    </p>
                  </div>
                </a>

                <a href="tel:+919488293674" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium group-hover:text-secondary transition-colors">
                      +91 9488293674
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Puducherry, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    className={`w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground transition-colors ${color}`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </AnimatedCard>

            {/* Quick Actions */}
            <div className="space-y-6">
              <AnimatedCard index={1} className="glass-card-hover rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold">Schedule a Call</h4>
                    <p className="text-sm text-muted-foreground">Let's discuss your project</p>
                  </div>
                </div>
                <button className="w-full btn-neon flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Request Interview / Demo
                </button>
              </AnimatedCard>

              <AnimatedCard index={2} className="glass-card-hover rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-neon-teal flex items-center justify-center">
                    <Download className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold">Download Resume</h4>
                    <p className="text-sm text-muted-foreground">Get my full CV in PDF</p>
                  </div>
                </div>
                <a 
                  href="/resume.pdf"
                  download="Kalaivani_M_Resume.pdf"
                  className="w-full px-6 py-3 glass-card hover:bg-muted/50 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </AnimatedCard>

              {/* LinkedIn QR Code */}
              <AnimatedCard index={3} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-32 h-32 mx-auto rounded-xl overflow-hidden mb-4">
                  <img 
                    src="/linkedin-qr.png" 
                    alt="LinkedIn QR Code" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">Scan to connect on LinkedIn</p>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
