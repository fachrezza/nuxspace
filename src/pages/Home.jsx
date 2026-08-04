import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Catalog from "../components/Catalog";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <main
      className="
        relative

        bg-[#FAFAFA]
        dark:bg-[#0A0A0A]

        text-[#0A0A0A]
        dark:text-[#FAFAFA]

        font-body

        overflow-x-hidden

        transition-colors duration-300
      "
    >

      <Navbar />

      <div className="relative overflow-visible">
        <Hero />
      </div>

      <WhyChooseUs />

      <Catalog />

      <Portfolio />

      <About />

      <Contact />

      <Footer />

    </main>
  );
}