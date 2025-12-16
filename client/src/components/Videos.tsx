import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "O IMORTAL - Especial Completo",
    thumbnail: "/images/hero.jpg", // Fallback to hero image for now
    duration: "1:15:00",
    views: "2.5M Views"
  },
  {
    id: 2,
    title: "Casamento é uma Ditadura",
    thumbnail: "/images/profile.jpg", // Fallback to profile image
    duration: "15:30",
    views: "1.2M Views"
  },
  {
    id: 3,
    title: "Gilmário no Dubai",
    thumbnail: "/images/hero.jpg",
    duration: "12:45",
    views: "800K Views"
  }
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="videos" className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-primary font-bold tracking-widest mb-2 text-sm uppercase">Assista Agora</h2>
            <h3 className="text-4xl md:text-6xl font-oswald font-bold text-white">ESPECIAIS & CLIPES</h3>
          </div>
          <a 
            href="https://www.youtube.com/@GilmarioVemba" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors border-b border-primary pb-1 mt-4 md:mt-0"
          >
            Ver canal completo →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group relative aspect-video bg-gray-900 overflow-hidden cursor-pointer border border-white/10 hover:border-primary/50 transition-all"
            >
              {/* Thumbnail Image (Overlay with gradient) */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                  <Play fill="black" className="text-black ml-1" size={32} />
                </div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                <h4 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {video.title}
                </h4>
                <div className="flex justify-between text-xs text-gray-400 font-medium uppercase tracking-wider">
                  <span>{video.duration}</span>
                  <span>{video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
