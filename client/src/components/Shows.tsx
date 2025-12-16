import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const shows = [
  {
    id: 1,
    city: "V. N. CERVEIRA",
    date: "07",
    month: "FEVEREIRO",
    year: "2026",
    time: "21:00",
    venue: "Auditório Municipal",
    status: "available",
    link: "#"
  },
  {
    id: 2,
    city: "LISBOA",
    date: "15",
    month: "FEVEREIRO",
    year: "2026",
    time: "21:00",
    venue: "Teatro Tivoli BBVA",
    status: "selling_fast",
    link: "#"
  },
  {
    id: 3,
    city: "FIGUEIRA DA FOZ",
    date: "21",
    month: "MARÇO",
    year: "2026",
    time: "22:00",
    venue: "CAE",
    status: "available",
    link: "#"
  },
  {
    id: 4,
    city: "BRAGA",
    date: "17",
    month: "ABRIL",
    year: "2026",
    time: "21:30",
    venue: "Altice Forum",
    status: "available",
    link: "#"
  },
  {
    id: 5,
    city: "ALMEIRIM",
    date: "09",
    month: "MAIO",
    year: "2026",
    time: "21:00",
    venue: "Cine Teatro",
    status: "available",
    link: "#"
  },
  {
    id: 6,
    city: "PORTO",
    date: "19",
    month: "MAIO",
    year: "2026",
    time: "21:30",
    venue: "Coliseu Porto Ageas",
    status: "sold_out",
    link: "#"
  },
  {
    id: 7,
    city: "PRAIA DA VITÓRIA",
    date: "22",
    month: "MAIO",
    year: "2026",
    time: "21:30",
    venue: "Auditório do Ramo Grande",
    status: "available",
    link: "#"
  },
  {
    id: 8,
    city: "PONTA DELGADA",
    date: "23",
    month: "MAIO",
    year: "2026",
    time: "21:30",
    venue: "Teatro Micaelense",
    status: "available",
    link: "#"
  }
];

export default function Shows() {
  return (
    <section id="shows" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-primary font-bold tracking-widest mb-2 text-sm uppercase">Tour 2026</h2>
            <h3 className="text-4xl md:text-6xl font-oswald font-bold text-white">PRÓXIMOS SHOWS</h3>
          </div>
          <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-right">
            Garanta seu lugar nas melhores noites de comédia. Os ingressos esgotam rápido!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {shows.map((show) => (
            <div 
              key={show.id}
              className="group relative bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Date */}
              <div className="flex flex-col items-center md:items-start min-w-[100px] mb-4 md:mb-0 relative z-10">
                <span className="text-5xl font-oswald font-bold text-white group-hover:text-primary transition-colors">
                  {show.date}
                </span>
                <span className="text-sm tracking-widest text-gray-400 uppercase">
                  {show.month}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 md:px-12 text-center md:text-left mb-6 md:mb-0 relative z-10">
                <h4 className="text-2xl font-bold text-white mb-2">{show.city}</h4>
                <div className="flex flex-col md:flex-row gap-4 text-gray-400 text-sm justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>{show.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    <span>{show.time}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="relative z-10 w-full md:w-auto">
                {show.status === "sold_out" ? (
                  <Button disabled className="w-full md:w-auto bg-gray-800 text-gray-400 border border-gray-700 rounded-none px-8 py-6 uppercase font-bold tracking-wider">
                    Esgotado
                  </Button>
                ) : (
                  <Button 
                    className="w-full md:w-auto bg-transparent border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 rounded-none px-8 py-6 uppercase font-bold tracking-wider"
                  >
                    Comprar Bilhete
                  </Button>
                )}
                
                {show.status === "selling_fast" && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                    Últimos Bilhetes
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
