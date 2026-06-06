import Navbar from "../assets/components/Navbar";
import Hero from "../assets/components/Hero";
import Services from "../assets/components/Services";
import Portfolio from "../assets/components/Portfolio";
import About from "../assets/components/About";
import Contact from "../assets/components/Contact";
import Footer from "../assets/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f5f7fb] text-slate-900 overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}