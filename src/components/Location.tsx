import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Location = () => {
  const address = "Av. Carlos Hugueney, 575 - Centro, Alto Araguaia - MT, 78780-000";
  
  const handleSchedule = () => {
    toast.success("Entraremos em contato em breve!", {
      description: "Obrigado pelo interesse! Nossa equipe vai agendar sua aula experimental.",
    });
  };

  return (
    <section id="localizacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Venha Nos Visitar
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos localizados no centro de Alto Araguaia, prontos para receber você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Endereço</p>
                      <p className="text-muted-foreground">{address}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Telefone</p>
                      <p className="text-muted-foreground">(66) 9999-9999</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">E-mail</p>
                      <p className="text-muted-foreground">contato@mousik.com.br</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Horário de Funcionamento</p>
                      <p className="text-muted-foreground">Segunda a Sexta: 08h às 20h</p>
                      <p className="text-muted-foreground">Sábado: 08h às 12h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-white">
                  <h4 className="font-display font-bold text-xl mb-3">
                    Agende Sua Aula Experimental Gratuita!
                  </h4>
                  <p className="mb-4 opacity-90">
                    Entre em contato conosco e experimente uma aula sem compromisso.
                  </p>
                  <Button
                    onClick={handleSchedule}
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                  >
                    Quero Agendar Minha Aula
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className="border-0 shadow-card overflow-hidden h-full min-h-[600px]">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.8899999999994!2d-53.21666668509658!3d-17.314444988090816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9494e5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sAv.%20Carlos%20Hugueney%2C%20575%20-%20Centro%2C%20Alto%20Araguaia%20-%20MT%2C%2078780-000!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MOUSIK"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
