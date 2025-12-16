import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Shows from "@/components/Shows";
import Videos from "@/components/Videos";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Shows />
        <Videos />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
