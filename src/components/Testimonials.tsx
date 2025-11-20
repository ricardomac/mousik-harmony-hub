import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Aluna de Piano",
      content: "A MOUSIK transformou minha relação com a música. Os professores são incríveis e o método de ensino é muito eficaz. Em 6 meses já consigo tocar minhas músicas favoritas!",
      rating: 5,
    },
    {
      name: "João Pedro",
      role: "Aluno de Violão",
      content: "Sempre quis aprender violão e a MOUSIK tornou isso possível. As aulas são dinâmicas e aprendo muito a cada encontro. Super recomendo!",
      rating: 5,
    },
    {
      name: "Ana Carolina",
      role: "Aluna de Canto",
      content: "Minha filha está fazendo aulas de canto e a evolução dela é impressionante. A estrutura da escola é ótima e os professores muito atenciosos.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas através da música
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 border-0 shadow-card"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-display font-semibold text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
