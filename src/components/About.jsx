import { motion } from "framer-motion";
import { Sparkles, Rocket, Globe } from "lucide-react";
import AboutImg from "../assets/digital.jpg";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center">
          <span className="text-blue-500 font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase text-sm md:text-base">
            About Us
          </span>

          <h2 className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Creating Digital
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}Experience
            </span>
            <br />
            Beyond Expectations
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mt-16 md:mt-24 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* OUTER GLOW */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

            {/* IMAGE CARD */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[24px] md:rounded-[40px] p-3 md:p-5 shadow-2xl">

              <img
                src={AboutImg}
                alt="about"
                className="rounded-[20px] md:rounded-[32px] h-[300px] sm:h-[450px] md:h-[650px] w-full object-cover"
              />

              {/* FLOAT CARD */}
              <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-xl">
                <p className="text-slate-400 text-xs md:text-sm">
                  Creative Developer
                </p>

                <h3 className="mt-1 md:mt-2 text-lg md:text-2xl font-bold">
                  Modern Vision
                </h3>
              </div>

            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Nux Space is a creative digital agency focused on Web Development and Graphic Design.
              The name “Nux” stands for “New Experience,” representing our vision to create modern,
              innovative, and memorable digital experiences.
            </p>

            <p className="mt-6 md:mt-8 text-slate-400 text-base md:text-lg leading-relaxed">
              We believe great design is more than visuals — it’s about creating meaningful connections between brands and people. Through creativity, strategy, and technology, we help businesses grow in the digital era.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-14">

              {/* CARD 1 */}
              <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition">
                <Sparkles className="text-blue-500" size={30} />
                <h3 className="mt-4 font-bold text-lg md:text-xl">Creative</h3>
                <p className="mt-2 text-slate-400 text-xs md:text-sm">
                  Futuristic and premium visual experience.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition">
                <Rocket className="text-blue-500" size={30} />
                <h3 className="mt-4 font-bold text-lg md:text-xl">Fast</h3>
                <p className="mt-2 text-slate-400 text-xs md:text-sm">
                  Optimized modern website performance.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition sm:col-span-2 lg:col-span-1">
                <Globe className="text-blue-500" size={30} />
                <h3 className="mt-4 font-bold text-lg md:text-xl">Global</h3>
                <p className="mt-2 text-slate-400 text-xs md:text-sm">
                  Ready for startup and international brands.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}