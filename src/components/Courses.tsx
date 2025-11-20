import { Card, CardContent } from "@/components/ui/card";
import { Guitar, Music, Mic, Drum, Piano, Users } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: Guitar,
      title: "Violão",
      description: "Do básico ao avançado, aprenda técnicas de violão popular e clássico.",
      color: "from-orange-500 to-pink-500",
    },
    {
      icon: Piano,
      title: "Piano",
      description: "Explore o mundo do piano com metodologia moderna e eficaz.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Drum,
      title: "Bateria",
      description: "Desenvolva ritmo e coordenação com aulas práticas de bateria.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Mic,
      title: "Canto",
      description: "Técnica vocal, afinação e interpretação para todos os estilos.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Music,
      title: "Teoria Musical",
      description: "Entenda a linguagem da música e desenvolva sua percepção musical.",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: Users,
      title: "Aulas em Grupo",
      description: "Aprenda música de forma colaborativa e divertida em turmas.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="cursos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Nossos Cursos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade de cursos para todas as idades e níveis de experiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-0 shadow-card overflow-hidden"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
