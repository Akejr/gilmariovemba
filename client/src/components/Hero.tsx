import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/80 z-10" />
        <img 
          src="/images/hero.jpg" 
          alt="Gilmario Vemba no palco" 
          className="w-full h-full object-cover object-top opacity-60"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 flex flex-col items-start justify-center h-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-primary font-bold tracking-widest mb-4 text-sm md:text-base uppercase">
            Stand Up Comedy Internacional
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold text-white leading-tight mb-6">
            SEM FILTRO.<br />
            IRREVERENTE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
              EXTRAORDINÁRIO.
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
            Do coração de Angola para os palcos do mundo. Gilmario Vemba traz humor inteligente, 
            observações afiadas e uma energia inigualável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide rounded-none px-8 py-6 text-lg"
              onClick={() => document.getElementById('shows')?.scrollIntoView({ behavior: 'smooth' })}
            >
              COMPRAR INGRESSOS
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black font-bold tracking-wide rounded-none px-8 py-6 text-lg bg-transparent"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              SAIBA MAIS
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
}
