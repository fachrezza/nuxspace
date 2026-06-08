import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Catalog from "../components/Catalog";

export default function Home() {
  return (
    <main className="relative bg-[#F8FAFC] text-slate-900 overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none">

        <div className="
          absolute top-[-200px] left-[-100px]
          w-[300px] md:w-[500px]
          h-[300px] md:h-[500px]
          bg-sky-400/10 rounded-full blur-3xl
        " />

        <div className="
          absolute top-[100px] right-[-100px]
          w-[250px] md:w-[400px]
          h-[250px] md:h-[400px]
          bg-blue-400/10 rounded-full blur-3xl
        " />

        <div className="
          absolute bottom-[-200px] left-[20%]
          w-[350px] md:w-[600px]
          h-[350px] md:h-[600px]
          bg-cyan-300/10 rounded-full blur-3xl
        " />

      </div>

      <Navbar />

      <div className="relative overflow-visible">
        <Hero />
      </div>

      <Catalog />
      <Portfolio />
      <About />
      <Contact />
      <Footer />

    </main>
  );
}