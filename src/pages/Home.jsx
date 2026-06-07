import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#060816] text-white overflow-x-hidden">
      {/* BACKGROUND GLOW LAYERS (OPTIONAL tambahan visual depth) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* TOP LEFT */}
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl" />

        {/* TOP RIGHT */}
        <div className="absolute top-[100px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />

        {/* BOTTOM */}
        <div className="absolute bottom-[-200px] left-[20%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      {/* CONTENT */}
      <Navbar />

      {/* IMPORTANT: jangan overflow-hidden di Hero */}
      <div className="relative overflow-visible">
        <Hero />
      </div>

      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}