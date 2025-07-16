import { Github, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Davide Bergese</h3>
              <p className="text-background/80 leading-relaxed">
                Studente di Informatica appassionato di programmazione 
                e sviluppo software. Sempre pronto per nuove sfide tecnologiche.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Link Utili</h4>
              <div className="space-y-2">
                <a 
                  href="#home" 
                  className="block text-background/80 hover:text-primary-glow transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block text-background/80 hover:text-primary-glow transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Chi sono
                </a>
                <a 
                  href="#projects" 
                  className="block text-background/80 hover:text-primary-glow transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Progetti
                </a>
                <a 
                  href="#contact" 
                  className="block text-background/80 hover:text-primary-glow transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contatti
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Seguimi</h4>
              <div className="space-y-4">
                <a 
                  href="https://github.com/bergesedavide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-background/80 hover:text-primary-glow transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="mailto:davide.bergese07@gmail.com"
                  className="flex items-center space-x-2 text-background/80 hover:text-primary-glow transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-background/60 text-sm">
                © {currentYear} Davide Bergese. Tutti i diritti riservati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};