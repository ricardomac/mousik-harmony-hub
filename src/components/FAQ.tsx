import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "São quantas aulas por semana?",
      answer: "Normalmente oferecemos aulas semanais com duração de 50 minutos cada. Você pode optar por aulas individuais ou em grupo, dependendo do curso escolhido e sua preferência de aprendizado.",
    },
    {
      question: "Precisa ter o instrumento para começar?",
      answer: "Não é obrigatório ter o instrumento logo no início. Temos instrumentos disponíveis na escola para as primeiras aulas. Assim você pode experimentar antes de investir na compra. Nossos professores também podem orientá-lo na escolha do melhor instrumento.",
    },
    {
      question: "A partir de que idade a escola atende?",
      answer: "Atendemos alunos a partir dos 5 anos de idade! Temos metodologias adaptadas para cada faixa etária, desde crianças até adultos e terceira idade. Cada um aprende no seu ritmo e com o método mais adequado.",
    },
    {
      question: "Consigo aprender depois de adulto?",
      answer: "Com certeza! Nunca é tarde para aprender música. Temos muitos alunos adultos que começaram do zero e alcançaram excelentes resultados. Nossa metodologia é adaptada para qualquer idade, respeitando o ritmo de cada aluno.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas principais dúvidas sobre nossos cursos
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border-0 shadow-card rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
