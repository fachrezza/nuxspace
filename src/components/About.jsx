import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Globe,
} from "lucide-react";
import AboutImg from "../assets/digital.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TITLE */}
        <div className="text-center">
          <span
            className="
              text-blue-500
              font-semibold
              tracking-[0.3em]
              uppercase
            "
          >
            About Us
          </span>

          <h2
            className="
              mt-6
              text-5xl
              md:text-6xl
              font-black
              tracking-tight
              leading-tight
            "
          >
            Creating Digital
            <span
              className="
                bg-gradient-to-r
                from-blue-500
                to-indigo-500 
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              Experience
            </span>
            <br />
            Beyond Expectations
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 mt-24 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* OUTER GLOW */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            {/* IMAGE CARD */}
            <div
              className="
                relative
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                rounded-[40px]
                p-5
                shadow-2xl
              "
            >
              <img
                src={AboutImg}
                alt="about"
                className="
                  rounded-[32px]
                  h-[650px]
                  w-full
                  object-cover
                "
              />

              {/* FLOAT CARD */}
              <div
                className="
                  absolute
                  bottom-10
                  left-10
                  bg-[#0f172a]/80
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-6
                  shadow-xl
                "
              >
                <p className="text-slate-400 text-sm">
                  Creative Developer
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Modern Vision
                </h3>
              </div>
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 text-lg leading-relaxed">
              Nux Space is a creative digital agency focused on Web Development and Graphic Design.
              The name “Nux” stands for “New Experience,” representing our vision to create modern,
              innovative, and memorable digital experiences.

            </p>

            <p className="mt-8 text-slate-400 text-lg leading-relaxed">
              
              We believe great design is more than visuals t’s about 
              creating meaningful connections between brands and people. Through creativity, strategy, and technology, we help businesses grow in the digital era.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-3 gap-6 mt-14">
              {/* CARD */}
              <div
                className="
                  p-6
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  hover:border-blue-500/30
                  transition
                "
              >
                <Sparkles
                  className="text-blue-500"
                  size={36}
                />

                <h3 className="mt-5 font-bold text-xl">
                  Creative
                </h3>

                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Futuristic and premium visual experience.
                </p>
              </div>

              {/* CARD */}
              <div
                className="
                  p-6
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  hover:border-blue-500/30
                  transition
                "
              >
                <Rocket
                  className="text-blue-500"
                  size={36}
                />

                <h3 className="mt-5 font-bold text-xl">
                  Fast
                </h3>

                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Optimized modern website performance.
                </p>
              </div>

              {/* CARD */}
              <div
                className="
                  p-6
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  hover:border-blue-500/30
                  transition
                "
              >
                <Globe
                  className="text-blue-500"
                  size={36}
                />

                <h3 className="mt-5 font-bold text-xl">
                  Global
                </h3>

                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
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