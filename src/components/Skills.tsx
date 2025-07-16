import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Linguaggi di Programmazione',
      skills: [
        { name: 'Python', level: 'Intermedio', color: 'bg-yellow-500' },
        { name: 'JavaScript', level: 'Intermedio', color: 'bg-yellow-400' },
        { name: 'HTML/CSS', level: 'Avanzato', color: 'bg-orange-500' },
        { name: 'C#', level: 'Intermedio', color: 'bg-purple-500' },
        { name: 'PHP', level: 'Base', color: 'bg-indigo-500' },
        { name: 'React', level: 'Base', color: 'bg-gray-500' },
        { name: 'PHP', level: 'Base', color: 'bg-cyan-500' }
      ]
    },
    {
      title: 'Tecnologie & Framework',
      skills: [
        { name: 'Web Development', level: 'Intermedio', color: 'bg-blue-500' },
        { name: 'Automazione', level: 'Avanzato', color: 'bg-green-500' },
        { name: 'Excel Processing', level: 'Avanzato', color: 'bg-emerald-500' },
        { name: 'Git/GitHub', level: 'Intermedio', color: 'bg-gray-700' },
        { name: 'Database', level: 'Avanzato', color: 'bg-teal-500' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 'Avanzato', color: 'bg-red-500' },
        { name: 'Apprendimento Rapido', level: 'Avanzato', color: 'bg-pink-500' },
        { name: 'Lavoro in Team', level: 'Avanzato', color: 'bg-cyan-500' },
        { name: 'Creatività', level: 'Intermedio', color: 'bg-violet-500' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Avanzato':
        return 'bg-accent text-accent-foreground';
      case 'Intermedio':
        return 'bg-primary/20 text-primary';
      case 'Base':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Competenze
            </h2>
            <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Ecco le tecnologie e competenze che ho sviluppato durante il mio percorso di studi e progetti personali.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="group hover:shadow-elegant transition-all duration-300 bg-card-gradient border-0"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex items-center justify-between p-3 rounded-lg bg-tech-gradient hover:bg-muted/50 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div 
                            className={`w-3 h-3 rounded-full ${skill.color}`}
                          ></div>
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={getLevelColor(skill.level)}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-tech-gradient border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  In costante apprendimento
                </h3>
                <p className="text-muted-foreground">
                  Sono sempre interessato a imparare nuove tecnologie e migliorare le mie competenze. 
                  Attualmente sto esplorando framework moderni e metodologie di sviluppo avanzate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};