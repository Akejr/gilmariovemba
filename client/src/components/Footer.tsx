import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-oswald font-bold text-white mb-2">
              GILMARIO <span className="text-primary">VEMBA</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md">
              O maior comediante de Angola, levando risadas para o mundo inteiro.
              Unfiltered. Unapologetic. Outstanding.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.instagram.com/gilmariovemba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.youtube.com/@GilmarioVemba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <Youtube size={24} />
            </a>
            <a href="https://www.tiktok.com/@gilmariovemba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <Music2 size={24} /> {/* TikTok icon replacement */}
            </a>
            <a href="https://www.facebook.com/gilmariovemba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gilmario Vemba. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
