import { Trophy } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SwagSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="swag" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            ref={ref}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-medium mb-4 block">Rewards</span>
            <h2 className="section-heading">
              Swag & <span className="text-gradient">Rewards</span>
            </h2>
          </div>

          <div
            className={`glass-card-hover rounded-2xl overflow-hidden max-w-3xl mx-auto transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shrink-0">
                  <Trophy className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Google Cloud Arcade Swag — Trooper Tier</h3>
                  <p className="text-primary font-medium text-sm">Google Cloud Quicklabs Arcade Program • 2024</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                My Google Cloud Quicklabs Arcade swag journey — from casual labs to late-night debugging and the satisfaction of "wait... it finally worked!" moments.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Labs Completed', value: '254' },
                  { label: 'Courses', value: '52' },
                  { label: 'Skill Checks', value: '64' },
                  { label: 'Games', value: '18' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-sm">
                Earned <span className="text-primary font-semibold">40 points</span> and reached the <span className="text-primary font-semibold">Arcade Trooper Tier</span> — a testament to dedication, learning, and persistence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwagSection;
