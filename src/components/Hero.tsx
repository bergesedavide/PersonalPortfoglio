import { Button } from '@/components/ui/button';
import { Github, Mail, Download } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Ciao, sono{' '}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Davide Bergese
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Studente di Informatica e Telecomunicazioni
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Appassionato di programmazione e sviluppo software. 
                Specializzato in automazione, web development e soluzioni innovative.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-hero-gradient hover:shadow-glow transition-all duration-300"
              >
                Vedi i Progetti
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contattami
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/bergesedavide"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="mailto:davide.bergese07@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Workspace di sviluppatore" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};