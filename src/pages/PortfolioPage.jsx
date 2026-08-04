import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import { Plus } from "lucide-react";
import HeroImage from "../assets/FullMockup.png";

export default function PortfolioPage() {
  return (
    <main
      className="
        bg-[#FAFAFA]
        dark:bg-[#0A0A0A]

        text-[#0A0A0A]
        dark:text-[#FAFAFA]

        font-body

        min-h-screen
        overflow-x-hidden

        transition-colors duration-300
      "
    >

      <Navbar />

      {/* HERO */}
      <section
        className="
          pt-28 md:pt-40
          pb-16 md:pb-24

          relative
          overflow-hidden
        "
      >

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            max-w-7xl
            mx-auto

            px-4 sm:px-6

            relative z-10
          "
        >

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

          <h1
            className="
              mt-4 md:mt-6

              font-display
              text-3xl
              sm:text-5xl
              md:text-7xl

              font-bold
              tracking-tight
              leading-[1.05]

              text-[#0A0A0A]
              dark:text-[#FAFAFA]
            "
          >
            Building The
            <span className="text-[#2563EB]"> Future</span>
            <br />
            Digital Experience
          </h1>

          <p
            className="
              mt-6 md:mt-8

              text-[#0A0A0A]/60
              dark:text-[#FAFAFA]/60

              max-w-2xl

              text-sm md:text-lg
              leading-relaxed
            "
          >
            NuxSpace is currently crafting modern website experiences,
            futuristic interfaces, and premium digital branding
            for upcoming projects.
          </p>

        </motion.div>

      </section>

      {/* SHOWCASE */}
      <section
        className="
          pb-20 md:pb-32

          relative
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto

            px-4 sm:px-6
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3

              gap-6 md:gap-8
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

                lg:col-span-2

                relative
                overflow-hidden

                rounded-3xl

                border
                border-white/60
                dark:border-white/10

                hover:border-[#2563EB]/50
                hover:shadow-[0_24px_60px_-24px_rgba(37,99,235,0.5)]

                transition-all duration-300

                min-h-[350px]
                md:min-h-[500px]
              "
            >

              <img
                src={HeroImage}
                alt="Portfolio Showcase"
                className="
                  absolute inset-0

                  w-full h-full
                  object-cover

                  opacity-40

                  group-hover:scale-105

                  transition-transform duration-700
                "
              />

              <div
                className="
                  absolute inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              />

              <div
                className="
                  relative z-10

                  p-6 md:p-12

                  flex flex-col
                  justify-end

                  h-full
                "
              >

                <h2
                  className="
                    font-display
                    text-2xl md:text-5xl
                    font-bold
                    leading-tight

                    text-white
                  "
                >
                  Futuristic Digital <br />
                  Landing Experience
                </h2>

                <p
                  className="
                    mt-4 md:mt-6

                    text-slate-200

                    max-w-2xl

                    text-sm md:text-lg
                    leading-relaxed
                  "
                >
                  Creating futuristic websites, modern branding,
                  and immersive user experiences with clean design
                  and premium technology.
                </p>

                <div
                  className="
                    flex flex-wrap
                    gap-3

                    mt-6 md:mt-10
                  "
                >

                  {["React", "UI/UX", "Motion"].map((item, index) => (
                    <div
                      key={index}
                      className="
                        px-3 md:px-4
                        py-2

                        rounded-full

                        bg-white/5
                        backdrop-blur-xl

                        border border-white/20

                        font-mono
                        text-white/80

                        text-xs md:text-sm
                      "
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </motion.div>

            {/* SIDE CARDS */}
            <div className="space-y-6 md:space-y-8">

              {/* CARD 1 */}
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

                  p-6 md:p-10

                  h-[200px]
                  md:h-[235px]

                  flex flex-col
                  justify-center

                  hover:border-[#2563EB]/50

                  transition-colors duration-300
                "
              >

                <span
                  className="
                    font-mono
                    text-[#2563EB]

                    text-xs
                    font-semibold

                    tracking-[0.2em]
                    uppercase
                  "
                >
                  Upcoming
                </span>

                <h3
                  className="
                    mt-3 md:mt-5

                    font-display
                    text-xl md:text-3xl
                    font-bold

                    text-[#0A0A0A]
                    dark:text-[#FAFAFA]
                  "
                >
                  Next Launch
                </h3>

                <p
                  className="
                    mt-2 md:mt-4

                    text-[#0A0A0A]/60
                    dark:text-[#FAFAFA]/60

                    text-sm md:text-base
                    leading-relaxed
                  "
                >
                  New creative project currently under development.
                </p>

              </motion.div>

              {/* CARD 2 */}
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

                  p-6 md:p-10

                  h-[200px]
                  md:h-[235px]

                  flex flex-col
                  justify-center

                  hover:border-[#2563EB]/50

                  transition-colors duration-300
                "
              >

                <div
                  className="
                    flex items-center
                    gap-2
                  "
                >

                  <div
                    className="
                      w-2 h-2

                      rounded-full

                      bg-[#2563EB]
                      animate-pulse
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[#0A0A0A]/60
                      dark:text-[#FAFAFA]/60

                      text-xs
                      uppercase
                      tracking-wide
                    "
                  >
                    In Progress
                  </span>

                </div>

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
                  Future Experience
                </h3>

                <p
                  className="
                    mt-2 md:mt-4

                    text-[#0A0A0A]/60
                    dark:text-[#FAFAFA]/60

                    text-sm md:text-base
                    leading-relaxed
                  "
                >
                  Experimental UI concepts and futuristic digital interfaces.
                </p>

              </motion.div>

            </div>

          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              mt-16 md:mt-20

              bg-white/40
              dark:bg-white/[0.03]

              backdrop-blur-xl

              rounded-3xl

              border
              border-white/60
              dark:border-white/10

              p-8 md:p-12

              text-center

              shadow-[0_24px_60px_-28px_rgba(37,99,235,0.4)]
            "
          >

            <span
              className="
                flex items-center justify-center gap-2

                font-mono
                text-[#2563EB]

                tracking-[0.2em] md:tracking-[0.3em]
                uppercase

                text-xs md:text-sm
              "
            >
              <Plus size={12} strokeWidth={3} />
              Start With NuxSpace
            </span>

            <h2
              className="
                mt-4 md:mt-6

                font-display
                text-2xl md:text-5xl
                font-bold

                text-[#0A0A0A]
                dark:text-[#FAFAFA]
              "
            >
              Let's Build Something
              <span className="text-[#2563EB]"> Extraordinary</span>
            </h2>

            <p
              className="
                mt-4 md:mt-6

                text-[#0A0A0A]/60
                dark:text-[#FAFAFA]/60

                max-w-2xl
                mx-auto

                text-sm md:text-lg
                leading-relaxed
              "
            >
              We are ready to help startups, personal brands,
              and businesses create futuristic digital experiences.
            </p>

            <HashLink
              smooth
              to="/#contact"
              className="
                inline-flex

                mt-6 md:mt-10

                px-6 md:px-8
                py-3 md:py-4

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

                text-sm md:text-base
              "
            >
              Start a Project
            </HashLink>

          </motion.div>

        </div>

      </section>

      <Footer />

    </main>
  );
}
