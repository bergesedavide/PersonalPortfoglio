import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, FileText, Zap } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Autofattura Web',
      description: 'Un\'applicazione Python avanzata che automatizza il processo di analisi di file Excel per generare fatture in modo intelligente. Il sistema legge dati strutturati, li elabora e produce documenti di fatturazione pronti all\'uso.',
      technologies: ['Python', 'Excel Processing', 'File Automation', 'Data Analysis'],
      features: [
        'Analisi automatica file Excel',
        'Generazione fatture intelligente',
        'Elaborazione dati strutturati',
        'Interface utente intuitiva'
      ],
      github: 'https://github.com/bergesedavide/AutofatturaWeb',
      demo: null,
      status: 'Completato',
      icon: FileText
    },
    {
      title: 'Portfolio Web',
      description: 'Questo stesso sito web! Un portfolio moderno e responsive sviluppato con React e TypeScript. Presenta un design pulito e animazioni fluide per mostrare progetti e competenze.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      features: [
        'Design moderno e pulito',
        'Animazioni fluide',
        'Layout responsive',
        'Sezioni interattive'
      ],
      github: 'https://github.com/bergesedavide/PersonalPortfoglio',
      demo: null,
      status: 'Completato',
      icon: Zap
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completato':
        return 'bg-accent text-accent-foreground';
      case 'In corso':
        return 'bg-primary/20 text-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Progetti
            </h2>
            <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Ecco alcuni dei progetti che ho sviluppato, mostrando le mie competenze in diverse tecnologie.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 bg-card-gradient border-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-tech-gradient rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Caratteristiche principali:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tecnologie utilizzate:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <Button 
                        variant="outline" 
                        asChild
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Codice
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button 
                        asChild
                        className="bg-hero-gradient hover:shadow-glow transition-all duration-300"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-tech-gradient border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Altri progetti in arrivo
                </h3>
                <p className="text-muted-foreground mb-6">
                  Sto lavorando su nuovi progetti interessanti che saranno presto disponibili. 
                  Seguimi su GitHub per rimanere aggiornato!
                </p>
                <Button 
                  variant="outline"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a href="https://github.com/bergesedavide" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Vedi tutti i progetti
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};