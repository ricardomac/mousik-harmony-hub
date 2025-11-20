import { Button } from "@/components/ui/button";
import { Music2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-music.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#localizacao");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl  bg-background/80 backdrop-blur-sm p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-muted text-foreground px-3 py-1 rounded-full border border-border">
                <Music2 className="w-4 h-4 text-foreground/80" />
                <span className="text-xs font-medium">Instituto Musical</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                Descubra o seu <em className="italic">talento</em> musical
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                A MOUSIK é mais que uma escola, é um espaço de arte e aprendizado para todas as idades. Venha viver a música.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-background text-foreground border border-border hover:bg-background/90"
                >
                  Agendar Aula Experimental
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector("#cursos");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-foreground/10 text-foreground border border-border hover:bg-foreground/20"
                >
                  Conhecer Cursos
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Aluno tocando piano no instituto musical"
                className="w-full h-[320px] md:h-[420px] object-cover rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
