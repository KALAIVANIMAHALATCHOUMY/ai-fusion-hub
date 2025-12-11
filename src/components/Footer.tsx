import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>by Kalaivani M</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-muted/50 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* SEO Keywords (hidden) */}
        <div className="sr-only">
          <p>AI Developer Portfolio | LLM Engineer | GenAI Projects | Agentic AI Portfolio | Student Innovator India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
