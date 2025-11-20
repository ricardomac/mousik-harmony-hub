import { Button } from "@/components/ui/button";
import { Music2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-music.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#localizacao");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Music2 className="w-5 h-5" />
            <span className="text-sm font-medium">Instituto Musical</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Desperte o Músico
            <br />
            que Existe em Você
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Aprenda música com os melhores professores de Alto Araguaia. 
            Cursos para todas as idades e níveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8"
            >
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
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
            >
              Nossos Cursos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
