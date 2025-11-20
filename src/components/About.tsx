import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Ensino Qualificado",
      description: "Formação musical e experiência em ensino de qualidade",
    },
    {
      icon: Heart,
      title: "Ensino Personalizado",
      description: "Metodologia adaptada ao ritmo de cada aluno",
    },
    {
      icon: Users,
      title: "Ambiente Acolhedor",
      description: "Espaço moderno e confortável para seu aprendizado",
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description: "Centenas de alunos satisfeitos e evoluindo",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Sobre a MOUSIK
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                A <span className="text-primary font-semibold">MOUSIK - Instituto Musical</span> nasceu 
                do sonho de levar educação musical de qualidade para Alto Araguaia e região. 
                Somos mais do que uma escola de música, somos uma família que acredita no 
                poder transformador da arte.
              </p>
              <p>
                Nossa missão é despertar e desenvolver o talento musical em pessoas de todas 
                as idades, proporcionando um ambiente acolhedor, ensino qualificado e 
                metodologia moderna.
              </p>
              <p>
                Acreditamos que todos podem aprender música, independente da idade ou 
                experiência prévia. Com dedicação, prática e a orientação certa, você 
                descobrirá o músico que existe dentro de você.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:-translate-y-1 transition-all duration-300 border border-border"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
