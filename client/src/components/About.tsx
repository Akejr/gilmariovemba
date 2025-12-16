import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mr-auto">
              <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4" />
              <img 
                src="/images/profile.jpg" 
                alt="Gilmario Vemba Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-primary font-bold tracking-widest mb-2 text-sm uppercase">Sobre o Artista</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white mb-8 leading-tight">
              O REI DA COMÉDIA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                ANGOLANA
              </span>
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                Gilmario Vemba é mais do que um comediante; é um fenômeno cultural. 
                Ex-membro do grupo "Os Tuneza", ele conquistou uma carreira solo brilhante, 
                enchendo teatros e arenas em Angola, Portugal e além.
              </p>
              <p>
                Com um estilo único que mistura observações do cotidiano, crítica social 
                e uma capacidade inata de contar histórias, Gilmario transforma tragédias 
                diárias em gargalhadas incontroláveis.
              </p>
              <p>
                Seu novo espetáculo, "3º ROUND", explora as fases da vida com uma 
                perspectiva madura, hilária e, acima de tudo, humana.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="text-center">
                <span className="block text-4xl font-oswald font-bold text-primary">1M+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Seguidores</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <span className="block text-4xl font-oswald font-bold text-primary">500+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Shows Realizados</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <span className="block text-4xl font-oswald font-bold text-primary">3</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Continentes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
