import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import ImgH from "../assets/Mockup.png";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="
        relative
        py-20 md:py-32

        border-t
        border-black/10
        dark:border-white/10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          px-4 sm:px-6

          relative z-10
        "
      >

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            flex flex-col
            md:flex-row md:items-end
            justify-between

            gap-6
          "
        >

          <div>

            <span
              className="
                flex items-center gap-2

                font-mono
                text-[#2563EB]

                tracking-[0.2em] md:tracking-[0.3em]
                uppercase

                text-xs md:text-sm
              "
            >
              <Plus size={12} strokeWidth={3} />
              Portfolio
            </span>

            <h2
              className="
                mt-3 md:mt-5

                font-display
                text-3xl
                sm:text-4xl
                md:text-5xl

                font-bold
                tracking-tight

                text-[#0A0A0A]
                dark:text-[#FAFAFA]
              "
            >
              Featured Projects
            </h2>

          </div>

          <Link
            to="/portfolio"
            className="
              group

              px-7 py-4

              rounded-xl

              bg-[#0A0A0A]
              dark:bg-[#FAFAFA]

              text-[#FAFAFA]
              dark:text-[#0A0A0A]

              font-semibold

              hover:bg-[#2563EB]
              dark:hover:bg-[#2563EB]
              dark:hover:text-white

              hover:shadow-[0_0_28px_-6px_rgba(37,99,235,0.6)]

              transition
            "
          >
            View All Portfolio
          </Link>

        </motion.div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1 md:grid-cols-3

            gap-6 md:gap-8

            mt-12 md:mt-20
          "
        >

          {/* MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden

              rounded-3xl

              border
              border-white/60
              dark:border-white/10

              hover:border-[#2563EB]/50
              hover:-translate-y-1
              hover:shadow-[0_24px_60px_-24px_rgba(37,99,235,0.5)]

              transition-all duration-300
            "
          >

            {/* IMAGE */}
            <img
              src={ImgH}
              alt="Portfolio Preview"
              className="
                h-[220px]
                sm:h-[300px]
                md:h-[350px]

                w-full
                object-cover

                group-hover:scale-105

                transition duration-700
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute inset-0

                bg-gradient-to-t
                from-black/80
                via-black/10
                to-transparent
              "
            />

            {/* CONTENT */}
            <div
              className="
                absolute
                bottom-0 left-0

                p-5 md:p-8
              "
            >

              <span
                className="
                  font-mono
                  text-[10px] md:text-xs

                  text-[#5B9BFF]

                  tracking-widest
                  uppercase
                "
              >
                Vision Concept
              </span>

              <h3
                className="
                  mt-3 md:mt-5

                  font-display
                  text-xl md:text-3xl
                  font-bold

                  text-white
                "
              >
                Futuristic Digital Landing Experience
              </h3>

              <p
                className="
                  mt-3 md:mt-4

                  text-slate-200

                  text-sm md:text-base
                  leading-relaxed

                  line-clamp-3
                "
              >
                Creating futuristic websites, modern branding,
                and immersive user experiences with clean design
                and premium technology.
              </p>

            </div>

          </motion.div>

          {/* UPCOMING 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden

              bg-white/40
              dark:bg-white/[0.03]

              backdrop-blur-xl

              rounded-3xl

              border border-dashed
              border-black/15
              dark:border-white/15

              h-[220px]
              sm:h-[300px]
              md:h-[350px]

              flex items-center justify-center

              hover:border-[#2563EB]/50

              transition-colors duration-300
            "
          >

            <div
              className="
                relative
                text-center

                px-6
              "
            >

              <span
                className="
                  font-mono
                  text-[#2563EB]

                  text-xs
                  uppercase
                  tracking-widest
                "
              >
                In Progress
              </span>

              <h3
                className="
                  mt-4 md:mt-6

                  font-display
                  text-xl md:text-3xl
                  font-bold

                  text-[#0A0A0A]
                  dark:text-[#FAFAFA]
                "
              >
                Upcoming Project
              </h3>

              <p
                className="
                  mt-3 md:mt-4

                  text-[#0A0A0A]/60
                  dark:text-[#FAFAFA]/60

                  text-sm md:text-base
                  leading-relaxed
                "
              >
                New creative project currently under development.
              </p>

            </div>

          </motion.div>

          {/* UPCOMING 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden

              bg-white/40
              dark:bg-white/[0.03]

              backdrop-blur-xl

              rounded-3xl

              border border-dashed
              border-black/15
              dark:border-white/15

              h-[220px]
              sm:h-[300px]
              md:h-[350px]

              flex items-center justify-center

              hover:border-[#2563EB]/50

              transition-colors duration-300
            "
          >

            <div
              className="
                relative
                text-center

                px-6
              "
            >

              <span
                className="
                  font-mono
                  text-[#2563EB]

                  text-xs
                  uppercase
                  tracking-[0.3em]
                "
              >
                NuxSpace
              </span>

              <h3
                className="
                  mt-4 md:mt-6

                  font-display
                  text-xl md:text-3xl
                  font-bold

                  text-[#0A0A0A]
                  dark:text-[#FAFAFA]
                "
              >
                Building Something Extraordinary
              </h3>

              <p
                className="
                  mt-3 md:mt-4

                  text-[#0A0A0A]/60
                  dark:text-[#FAFAFA]/60

                  text-sm md:text-base
                  leading-relaxed
                "
              >
                More premium website and design projects
                coming soon.
              </p>

              <div
                className="
                  mt-6 md:mt-8

                  inline-flex

                  px-4 md:px-5
                  py-2 md:py-3

                  rounded-full

                  bg-white/40
                  dark:bg-white/5

                  backdrop-blur-xl

                  border
                  border-black/15
                  dark:border-white/15

                  text-[#0A0A0A]/60
                  dark:text-[#FAFAFA]/60

                  font-mono
                  text-xs

                  uppercase
                  tracking-wide
                "
              >
                Currently Expanding Portfolio
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
