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
    <section id="depoimentos" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas através da música
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 border border-border bg-card hover:-translate-y-[3px] hover:shadow-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed italic mb-6">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <p className="font-display font-semibold text-lg">
                    {testimonial.name}
                  </p>
                  <span className="px-3 py-1 rounded-full text-xs font-medium border border-border text-muted-foreground">
                    {testimonial.role}
                  </span>
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
