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
        flex items-center
        overflow-hidden
        
      "
    >

      {/* GLOW */}
      <div className="
        absolute top-[-150px] left-[-100px]
        w-[350px] h-[350px]
        bg-blue-400/10
        blur-3xl
        rounded-full
      " />

      <div className="
        absolute bottom-[-150px] right-[-100px]
        w-[400px] h-[400px]
        bg-indigo-400/10
        blur-3xl
        rounded-full
      " />

      {/* GRID */}
      <div className="
        max-w-7xl
        mx-auto
        px-6

        grid lg:grid-cols-2
        gap-20
        items-center

        relative z-10
      ">

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

                bg-white/80
                backdrop-blur-xl

                border border-slate-200

                shadow-lg shadow-slate-200/40
              "
            >

              <Sparkles
                size={18}
                className="text-blue-500"
              />

              <span className="
                text-sm
                font-semibold
                text-slate-700
              ">
                Futuristic Digital Agency
              </span>

            </div>

            {/* TITLE */}
            <h1
              className="
                mt-10

                text-4xl
                md:text-6xl

                font-black

                leading-[1.1]
                tracking-tight

                text-slate-900
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
                {" "}Digital
              </span>

              <br />

              Presence With a New Experience

            </h1>

            {/* DESC */}
            <p className="
              mt-8

              text-lg
              leading-relaxed

              text-slate-600

              max-w-xl
            ">
              Nux Space delivers modern websites
              and creative visual designs to help brands,
              businesses, and creators stand out
              in the digital world.
            </p>

            {/* BUTTON */}
            <div className="
              flex flex-wrap
              gap-5
              mt-10
            ">

              {/* PRIMARY */}
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
                  hover:shadow-blue-300/40

                  transition
                "
              >
                Explore Work

                <ArrowRight
                  size={18}
                  className="
                    group-hover:translate-x-1
                    transition
                  "
                />
              </a>

              {/* SECONDARY */}
              <a
                href="#catalog"
                className="
                  px-8 py-4

                  rounded-2xl

                  bg-white/80
                  backdrop-blur-xl

                  border border-slate-200

                  text-slate-700
                  font-semibold

                  shadow-lg shadow-slate-200/30

                  hover:bg-white
                  hover:shadow-xl
                  hover:-translate-y-1

                  transition
                "
              >
                Order Now
              </a>

            </div>

          </motion.div>

        </div>

        {/* RIGHT */}
        <div className="
          relative
          flex items-center justify-center
        ">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
              relative
              w-full
              max-w-md
            "
          >

            {/* Glow */}
            <div className="
              absolute -top-10 -left-10
              w-72 h-72
              bg-blue-400/10
              blur-3xl
              rounded-full
            " />

            <div className="
              absolute -bottom-10 -right-10
              w-72 h-72
              bg-indigo-400/10
              blur-3xl
              rounded-full
            " />

            {/* Card */}
            <div className="
              relative

              bg-white/80
              backdrop-blur-2xl

              border border-slate-200

              rounded-3xl

              p-6

              shadow-2xl
              shadow-slate-200/50
            ">

              {/* Header */}
              <div className="mb-6">

                <h3 className="
                  text-blue-500
                  font-semibold
                  text-lg
                ">
                  How We Work
                </h3>

                <p className="
                  text-slate-500
                  text-sm
                  mt-1
                ">
                  Simple process, powerful results
                </p>

              </div>

              {/* Steps */}
              <div className="space-y-4">

                {/* STEP 1 */}
                <div className="flex gap-3">

                  <span className="
                    w-8 h-8

                    flex items-center justify-center

                    rounded-full

                    bg-blue-500/10
                    text-blue-500

                    text-sm
                    font-bold
                  ">
                    1
                  </span>

                  <div>

                    <p className="
                      text-slate-900
                      font-semibold
                      text-sm
                    ">
                      Discovery
                    </p>

                    <p className="
                      text-slate-500
                      text-xs
                    ">
                      Understanding your needs and goals
                    </p>

                  </div>

                </div>

                {/* STEP 2 */}
                <div className="flex gap-3">

                  <span className="
                    w-8 h-8

                    flex items-center justify-center

                    rounded-full

                    bg-indigo-500/10
                    text-indigo-500

                    text-sm
                    font-bold
                  ">
                    2
                  </span>

                  <div>

                    <p className="
                      text-slate-900
                      font-semibold
                      text-sm
                    ">
                      Design & Build
                    </p>

                    <p className="
                      text-slate-500
                      text-xs
                    ">
                      Crafting modern UI and clean code
                    </p>

                  </div>

                </div>

                {/* STEP 3 */}
                <div className="flex gap-3">

                  <span className="
                    w-8 h-8

                    flex items-center justify-center

                    rounded-full

                    bg-purple-500/10
                    text-purple-500

                    text-sm
                    font-bold
                  ">
                    3
                  </span>

                  <div>

                    <p className="
                      text-slate-900
                      font-semibold
                      text-sm
                    ">
                      Launch
                    </p>

                    <p className="
                      text-slate-500
                      text-xs
                    ">
                      Deploy and optimize for performance
                    </p>

                  </div>

                </div>

              </div>

              {/* Bottom Value */}
              <div className="
                mt-6

                p-4

                rounded-2xl

                bg-gradient-to-r
                from-blue-50
                to-indigo-50

                border border-slate-200
              ">

                <p className="
                  text-sm
                  text-slate-600
                ">
                  We help startups and small businesses
                  build a strong digital presence from zero.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}