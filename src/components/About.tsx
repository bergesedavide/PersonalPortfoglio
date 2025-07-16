import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, GraduationCap, Code } from 'lucide-react';

export const About = () => {
  const facts = [
    {
      icon: Calendar,
      label: 'Nato il',
      value: '11 Giugno 2007'
    },
    {
      icon: MapPin,
      label: 'Città',
      value: 'Savigliano (CN), Italia'
    },
    {
      icon: GraduationCap,
      label: 'Studi',
      value: '4º anno - Informatica e Telecomunicazioni'
    },
    {
      icon: Code,
      label: 'Istituto',
      value: 'Istituto Vallauri'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Chi sono
            </h2>
            <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sono un giovane appassionato di informatica con una forte curiosità per lo sviluppo software 
                e l'automazione. Attualmente frequento il quarto anno dell'indirizzo Informatica e 
                Telecomunicazioni presso l'Istituto Vallauri.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi piace esplorare nuove tecnologie e creare soluzioni innovative per problemi reali. 
                Ho esperienza nello sviluppo di applicazioni web, automazione di processi e 
                programmazione in diversi linguaggi.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Il mio obiettivo è continuare a crescere come developer, contribuire a progetti 
                open source e un giorno lavorare in un'azienda tecnologica dove posso mettere 
                in pratica le mie competenze.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map((fact, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-card-gradient border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-tech-gradient rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <fact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {fact.label}
                        </p>
                        <p className="text-foreground font-semibold mt-1">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};