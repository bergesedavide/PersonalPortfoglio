import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, MapPin, Phone, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'davide.bergese07@gmail.com',
      href: 'mailto:davide.bergese07@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'bergesedavide',
      href: 'https://github.com/bergesedavide'
    },
    {
      icon: MapPin,
      label: 'Località',
      value: 'Savigliano (CN), Italia',
      href: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Messaggio inviato!",
        description: "Grazie per avermi contattato. Ti risponderò il prima possibile.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contatti
            </h2>
            <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? 
              Non esitare a contattarmi!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Parliamo insieme
                </h3>
                <p className="text-muted-foreground mb-8">
                  Sono sempre interessato a nuove opportunità, progetti interessanti 
                  e collaborazioni. Se vuoi discutere di tecnologia, progetti o 
                  semplicemente dire ciao, sarò felice di sentirti!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card-gradient border-0 hover:shadow-card transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-tech-gradient rounded-lg">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground font-medium">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-foreground font-semibold hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-semibold">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card-gradient border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Invia un messaggio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Il tuo nome"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="la.tua@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Oggetto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Di cosa vuoi parlare?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Messaggio *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Scrivi qui il tuo messaggio..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="focus:ring-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-hero-gradient hover:shadow-glow transition-all duration-300"
                  >
                    {isSubmitting ? (
                      'Invio in corso...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Invia Messaggio
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};