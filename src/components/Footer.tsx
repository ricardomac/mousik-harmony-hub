import { Music, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-border flex items-center justify-center">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-display font-bold">MOUSIK</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Instituto Musical dedicado a transformar vidas através da música. 
              Educação musical de qualidade em Alto Araguaia - MT.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-border hover:bg-primary/10 transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-border hover:bg-primary/10 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-border hover:bg-primary/10 transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#cursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>(66) 9999-9999</li>
              <li>contato@mousik.com.br</li>
              <li className="text-sm">
                Av. Carlos Hugueney, 575<br />
                Centro, Alto Araguaia - MT
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} MOUSIK - Instituto Musical. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
