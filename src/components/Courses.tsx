import { Card, CardContent } from "@/components/ui/card";
import { Guitar, Music, Mic, Drum, Piano, Users } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: Guitar,
      title: "Violão",
      description: "Do básico ao avançado, aprenda técnicas de violão popular e clássico.",
      color: "0 70% 55%",
    },
    {
      icon: Piano,
      title: "Piano",
      description: "Explore o mundo do piano com metodologia moderna e eficaz.",
      color: "230 80% 45%",
    },
    {
      icon: Drum,
      title: "Bateria",
      description: "Desenvolva ritmo e coordenação com aulas práticas de bateria.",
      color: "140 65% 40%",
    },
    {
      icon: Mic,
      title: "Canto",
      description: "Técnica vocal, afinação e interpretação para todos os estilos.",
      color: "25 95% 55%",
    },
    {
      icon: Music,
      title: "Teoria Musical",
      description: "Entenda a linguagem da música e desenvolva sua percepção musical.",
      color: "50 95% 55%",
    },
    {
      icon: Users,
      title: "Aulas em Grupo",
      description: "Aprenda música de forma colaborativa e divertida em turmas.",
      color: "270 60% 55%",
    },
  ];

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">
            Nossos Cursos
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Oferecemos uma variedade de cursos para todas as idades e níveis de experiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className="group hover:-translate-y-[3px] transition-all duration-300 border border-border hover:shadow-sm bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `hsl(var(--primary) / 0.10)` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: `hsl(var(--primary))` }} />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ color: 'hsl(var(--primary))', backgroundColor: 'hsl(var(--primary) / 0.12)' }}
                    >
                      Curso
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                    {course.title}
                  </h3>
                  <p className="leading-relaxed mb-4 text-muted-foreground">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
