import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import DevImg from "../assets/dev.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex items-center
        overflow-hidden
        pt-32
      "
    >
      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5 py-3
                rounded-full
                bg-white/5
                backdrop-blur-xl
                border border-white/10
              "
            >
              <Sparkles size={18} className="text-blue-500" />

              <span className="text-sm font-semibold text-slate-300">
                Futuristic Digital Agency
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                mt-10
                text-3xl
                md:text-6xl
                font-black
                leading-[1.1]
                tracking-tight
              "
            >
              Build Your 
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
                Digital 
              </span>
              <br />
              Presence With a New Experience
            
            </h1>

            {/* DESC */}
            <p className="mt-8 text-lg leading-relaxed text-slate-400 max-w-xl">
              Nux Space delivers modern websites 
              and creative visual designs to help brands, 
              businesses, and creators stand out in the digital world.
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#portfolio"
                className="
                  group
                  px-8 py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-500 
                  text-white
                  font-semibold
                  flex items-center gap-3
                  hover:scale-105
                  hover:shadow-2xl
                  hover:shadow-indigo-400/40
                  transition
                "
              >
                Explore Work

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href="#catalog"
                className="
                  px-8 py-4
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  font-semibold
                  hover:bg-white/10
                  transition
                "
              >
                Order Now
              </a>
            </div>

          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-md"
          >
            {/* Glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl">

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-blue-500 font-semibold text-lg">
                  How We Work
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Simple process, powerful results
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold">
                    1
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">Discovery</p>
                    <p className="text-slate-400 text-xs">
                      Understanding your needs and goals
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-bold">
                    2
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">Design & Build</p>
                    <p className="text-slate-400 text-xs">
                      Crafting modern UI and clean code
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">
                    3
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">Launch</p>
                    <p className="text-slate-400 text-xs">
                      Deploy and optimize for performance
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Value */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-white/10">
                <p className="text-sm text-slate-300">
                  We help startups and small businesses build a strong digital presence from zero.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}