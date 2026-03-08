import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

interface Certification {
  title: string;
  issuer: string;
  issued?: string;
  expired?: string;
  credentialId?: string;
  skills?: string[];
  link?: string;
  certificateImage?: string;
}

const certifications: Certification[] = [
  {
    title: 'AI for Impact',
    issuer: 'Google Cloud Security',
    credentialId: '2024H2S10AFI-P002031',
    skills: ['AI Agents'],
    certificateImage: '/certificates/ai-for-impact.png',
  },
  {
    title: 'Agentic AI Hackathon',
    issuer: 'Google Developer Student Clubs',
    credentialId: '2025H2S01GSC-P19439',
    skills: ['Cloud Firestore', 'Google Analytics', 'GCP', 'AI Agents'],
  },
  {
    title: 'Walmart Sparkathon Converge',
    issuer: 'Walmart Global Tech India',
    skills: ['Ideas Development', 'Pitching Ideas'],
  },
  {
    title: 'Hacksagon',
    issuer: 'ABV-IIITM',
    skills: ['Embedded Systems'],
  },
  {
    title: 'Unisys Innovation Program Year 16',
    issuer: 'Unisys',
    issued: 'Sep 2024',
    expired: 'Feb 2025',
    skills: ['Python', 'Agentic', 'AI Agents', 'Flask', 'Front-End Development', 'Back-End Web Development', 'RAG'],
  },
  {
    title: 'Google Developer Experts',
    issuer: 'Google',
    link: 'https://g.dev/Kalaivani',
  },
  {
    title: 'Skill Rack',
    issuer: 'skillrack.com',
    skills: ['Python', 'C', 'C++'],
    link: 'https://www.skillrack.com/faces/resume.xhtml?id=466055&key=171d311d109d27259a856b1e8adfc5d1c40d4752',
  },
  {
    title: 'Microsoft Student Ambassadors – Imagine Cup',
    issuer: 'Microsoft',
    issued: 'Mar 2025',
  },
  {
    title: 'Oracle Fusion Cloud Application HCM Certified Foundation Associate',
    issuer: 'Oracle',
    issued: 'Mar 2025',
    link: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5736070&trackId=OMBPHCMCFA1&key=6cf9a96839522cc1c9e3f60965d99831e0f169c1',
  },
  {
    title: 'UiPath Academy Automation Explorer Training',
    issuer: 'UiPath',
    issued: 'May 2024',
    expired: 'May 2026',
    credentialId: '123325650',
    link: 'https://credentials.uipath.com/f9bef52a-7345-4237-8c8e-ee3ab3cf1fde',
  },
  {
    title: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG',
    issuer: 'Google',
    issued: 'Dec 2024',
    skills: ['AI', 'Machine Learning'],
    link: 'https://www.credly.com/badges/419c6a82-1caa-4442-b000-40ea43dc8503/linked_in_profile',
  },
  {
    title: 'Prompt Design in Vertex AI Skill Badge',
    issuer: 'Google',
    issued: 'Sep 2024',
    skills: ['AI', 'Machine Learning'],
    link: 'https://www.credly.com/badges/bbd2550d-707f-4cad-b643-000043cb6d7d/linked_in_profile',
  },
  {
    title: 'Develop GenAI Apps with Gemini and Streamlit Skill Badge',
    issuer: 'Google',
    issued: 'Dec 2024',
    skills: ['AI', 'Machine Learning'],
  },
  {
    title: 'Agentic AI Fundamentals: Architectures, Frameworks, and Applications',
    issuer: 'LinkedIn',
    issued: 'Dec 2024',
    skills: ['AI Agents', 'AI for Business'],
  },
  {
    title: 'Signal Processing Onramp',
    issuer: 'MathWorks',
    issued: 'Aug 2024',
  },
  {
    title: 'Introduction to AI and Vector Search',
    issuer: 'MongoDB',
    issued: 'Aug 2024',
    credentialId: 'MDB2048cslwj7',
    skills: ['AI'],
  },
  {
    title: 'Machine Learning Onramp',
    issuer: 'MathWorks',
    issued: 'Aug 2024',
    skills: ['Machine Learning'],
  },
  {
    title: 'Introduction to MongoDB (For Students)',
    issuer: 'MongoDB',
    issued: 'Aug 2024',
    credentialId: 'MDB4cg4b8cs6j',
  },
  {
    title: 'Image Processing Onramp',
    issuer: 'MathWorks',
    issued: 'Aug 2024',
    skills: ['Image Processing'],
  },
  {
    title: 'Myntra HackerRamp: WeForShe 2024',
    issuer: 'Unstop',
    issued: 'Aug 2024',
    credentialId: '8913cc09-1eee-422a-aae1-d7100f8c58f3',
  },
];

const INITIAL_SHOW = 6;

const getCertificateLink = (cert: Certification) => {
  if (cert.link) return cert.link;
  const query = encodeURIComponent(`${cert.title} ${cert.issuer} credential`);
  return `https://www.google.com/search?q=${query}`;
};

const CertificationCard = ({ cert, index }: { cert: Certification; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      <a
        href={getCertificateLink(cert)}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card-hover p-5 rounded-2xl group block cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-semibold text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </div>
            <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
            {(cert.issued || cert.credentialId) && (
              <div className="text-xs text-muted-foreground/70 space-y-0.5">
                {cert.issued && (
                  <p>
                    {cert.issued}
                    {cert.expired && ` — ${cert.expired}`}
                  </p>
                )}
                {cert.credentialId && <p className="font-mono text-[10px]">ID: {cert.credentialId}</p>}
              </div>
            )}
            {cert.skills && cert.skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-muted/50 text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

const CertificationsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? certifications : certifications.slice(0, INITIAL_SHOW);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-medium mb-4 block">Credentials</span>
            <h2 className="section-heading">
              Licenses & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Professional certifications and skill badges earned across top tech platforms
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayed.map((cert, index) => (
              <CertificationCard key={cert.title} cert={cert} index={index} />
            ))}
          </div>

          {certifications.length > INITIAL_SHOW && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn-neon inline-flex items-center gap-2 text-sm px-6 py-2.5 hover:scale-105 active:scale-95 transition-transform"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Show All {certifications.length} Certifications <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
