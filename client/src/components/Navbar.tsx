import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SHOWS", href: "#shows" },
    { name: "SOBRE", href: "#about" },
    { name: "CONTATO", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-oswald font-bold tracking-wider text-white hover:text-primary transition-colors">
            GILMARIO <span className="text-primary">VEMBA</span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="default" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide rounded-none px-6"
            onClick={() => window.location.href = "#shows"}
          >
            COMPRAR INGRESSOS
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="default" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide rounded-none"
            onClick={() => {
              window.location.href = "#shows";
              setIsOpen(false);
            }}
          >
            COMPRAR INGRESSOS
          </Button>
        </div>
      )}
    </nav>
  );
}
