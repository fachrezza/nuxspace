import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        pt-32
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-sky-300/40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl"></div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5 py-3
                rounded-full
                bg-white/70
                backdrop-blur-xl
                border border-white
                shadow-lg
              "
            >
              <Sparkles size={18} className="text-sky-400" />

              <span className="text-sm font-semibold text-slate-700">
                Modern Digital Agency
              </span>
            </div>

            <h1
              className="
                mt-10
                text-3xl
                md:text-6xl
                font-black
                tracking-tight
                leading-[1.1]
                text-slate-900
              "
            >
              We Build
              <span
                className="
                  bg-gradient-to-r
                  from-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                Futuristic
              </span>
              <br />
              Website &
              <br />
              Digital Brand
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-slate-500 max-w-xl">
              Helping startup, UMKM, and businesses create
              premium digital experiences with modern website
              development and creative branding.
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#portfolio"
                className="
                  group
                  px-8 py-4
                  rounded-2xl
                  bg-sky-400
                  text-white
                  font-semibold
                  flex items-center gap-3
                  hover:scale-105
                  hover:shadow-2xl
                  hover:shadow-sky-200
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
                href="#contact"
                className="
                  px-8 py-4
                  rounded-2xl
                  bg-white/70
                  backdrop-blur-xl
                  border border-white
                  font-semibold
                  hover:bg-white
                  hover:shadow-lg
                  transition
                "
              >
                Contact Me
              </a>
            </div>

            {/* STATS */}
            <div className="flex gap-10 mt-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900">
                  20+
                </h2>

                <p className="text-slate-500 mt-2">
                  Projects Completed
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-slate-900">
                  10+
                </h2>

                <p className="text-slate-500 mt-2">
                  Happy Clients
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-slate-900">
                  2+
                </h2>

                <p className="text-slate-500 mt-2">
                  Years Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* CARD */}
          <div
            className="
              relative
              bg-white/60
              backdrop-blur-2xl
              border border-white
              rounded-[40px]
              p-5
              shadow-2xl
            "
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt=""
              className="
                rounded-[30px]
                h-[550px]
                w-full
                object-cover
              "
            />

            {/* FLOATING CARD */}
            <div
              className="
                absolute
                bottom-10
                left-10
                bg-white/80
                backdrop-blur-xl
                border border-white
                rounded-3xl
                p-6
                shadow-xl
              "
            >
              <p className="text-sm text-slate-500">
                UI/UX Design
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Modern Agency
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}