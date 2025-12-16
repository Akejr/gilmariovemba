import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    text: "O humor de Gilmario é universal. Ele consegue conectar culturas diferentes através do riso de uma forma genial.",
    author: "RTP África",
    role: "Imprensa"
  },
  {
    id: 2,
    text: "Uma energia contagiante. Saí do espetáculo com dores na barriga de tanto rir. Simplesmente o melhor!",
    author: "Maria Silva",
    role: "Fã em Lisboa"
  },
  {
    id: 3,
    text: "Inteligente, rápido e incrivelmente carismático. Gilmario elevou o stand-up angolano a um nível mundial.",
    author: "BANTUMEN",
    role: "Revista Cultural"
  },
  {
    id: 4,
    text: "Cada show é uma experiência única. A improvisação dele com o público é algo que nunca vi igual.",
    author: "João Paulo",
    role: "Fã no Porto"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest mb-2 text-sm uppercase">O que dizem</h2>
          <h3 className="text-4xl md:text-5xl font-oswald font-bold text-white">CRÍTICA & FÃS</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-6 md:p-12 border border-white/10 bg-card/50 text-center relative">
                    <Quote className="absolute top-6 left-6 text-primary/20 w-16 h-16 rotate-180" />
                    
                    <blockquote className="text-xl md:text-3xl font-light text-gray-200 italic leading-relaxed mb-8 relative z-10 pt-8">
                      "{item.text}"
                    </blockquote>
                    
                    <div className="relative z-10">
                      <cite className="not-italic font-bold text-primary text-lg block mb-1">
                        {item.author}
                      </cite>
                      <span className="text-sm text-gray-500 uppercase tracking-widest">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-transparent border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary" />
            <CarouselNext className="hidden md:flex -right-12 bg-transparent border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
