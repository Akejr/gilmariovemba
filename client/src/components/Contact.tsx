import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest mb-2 text-sm uppercase">Booking & Imprensa</h2>
            <h3 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6">ENTRE EM CONTATO</h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Para contratação de shows, parcerias comerciais ou assessoria de imprensa, 
              utilize o formulário abaixo ou nossos canais diretos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card p-8 border border-white/5 hover:border-primary/30 transition-colors">
                <Mail className="text-primary w-10 h-10 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                <p className="text-gray-400 mb-4">Para booking e informações gerais</p>
                <a href="mailto:booking@gilmariovemba.com" className="text-white hover:text-primary transition-colors font-medium">
                  booking@gilmariovemba.com
                </a>
              </div>

              <div className="bg-card p-8 border border-white/5 hover:border-primary/30 transition-colors">
                <Phone className="text-primary w-10 h-10 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Telefone</h4>
                <p className="text-gray-400 mb-4">Segunda a Sexta, 9h às 18h</p>
                <a href="tel:+244923456789" className="text-white hover:text-primary transition-colors font-medium">
                  +244 923 456 789
                </a>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6 bg-card p-8 border border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Nome</label>
                  <Input id="name" placeholder="Seu nome" className="bg-black/50 border-white/10 focus:border-primary rounded-none h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="bg-black/50 border-white/10 focus:border-primary rounded-none h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Assunto</label>
                <Input id="subject" placeholder="Booking, Imprensa, Outros..." className="bg-black/50 border-white/10 focus:border-primary rounded-none h-12" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Mensagem</label>
                <Textarea id="message" placeholder="Como podemos ajudar?" className="bg-black/50 border-white/10 focus:border-primary rounded-none min-h-[150px]" />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide rounded-none py-6 uppercase">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
