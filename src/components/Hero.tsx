import { Button } from "@/components/ui/button";
import { Music2, ArrowRight } from "lucide-react";
import teclado from "@/assets/teclado.jpg";
import violao from "@/assets/violao.jpg";
import violino from "@/assets/violino.jpg";
import guitarra from "@/assets/guitarra.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#localizacao");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative py-16 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-background/80 backdrop-blur-sm p-6 md:p-10">
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
                <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                  Agendar Aula Experimental
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const element = document.querySelector("#cursos");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-lg px-8"
                >
                  Conhecer Cursos
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden border border-border shadow-card">
                    <img src={teclado} alt="Teclado" className="w-full h-[160px] md:h-[200px] object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border shadow-card">
                    <img src={violao} alt="Violão" className="w-full h-[240px] md:h-[300px] object-cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden border border-border shadow-card">
                    <img src={violino} alt="Violino" className="w-full h-[220px] md:h-[260px] object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border shadow-card">
                    <img src={guitarra} alt="Guitarra" className="w-full h-[180px] md:h-[220px] object-cover" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
