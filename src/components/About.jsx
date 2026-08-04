import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import AboutImg from "../assets/digital.jpg";

const features = [
  {
    number: "01",
    title: "Creative",
    description: "Futuristic and premium visual experience.",
  },
  {
    number: "02",
    title: "Fast",
    description: "Optimized modern website performance.",
  },
  {
    number: "03",
    title: "Global",
    description: "Ready for startup and international brands.",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
          px-4 sm:px-6 lg:px-8
          relative z-10
        "
      >

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <span
            className="
              flex items-center gap-2

              font-mono
              text-[#2563EB]

              tracking-[0.2em] md:tracking-[0.3em]

              uppercase
              text-xs sm:text-sm
            "
          >
            <Plus size={12} strokeWidth={3} />
            About Us
          </span>

          <h2
            className="
              mt-4 md:mt-6

              font-display
              text-3xl
              sm:text-4xl
              md:text-6xl

              font-bold
              tracking-tight
              leading-tight

              text-[#0A0A0A]
              dark:text-[#FAFAFA]

              max-w-3xl
            "
          >
            Creating Digital
            <span className="text-[#2563EB]"> Experience</span>
            {" "}Beyond Expectations
          </h2>

        </motion.div>

        {/* CONTENT */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2

            gap-12 lg:gap-16

            mt-16 md:mt-24

            items-center
          "
        >

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              order-2 lg:order-1
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute -inset-6

                bg-[#2563EB]/20
                dark:bg-[#2563EB]/25

                rounded-full
                blur-[100px]

                pointer-events-none
              "
            />

            <div
              className="
                group
                relative
                overflow-hidden

                bg-white/40
                dark:bg-white/[0.03]

                backdrop-blur-xl

                border
                border-white/60
                dark:border-white/10

                rounded-3xl

                p-2 sm:p-3

                shadow-[0_20px_60px_-24px_rgba(37,99,235,0.4)]
              "
            >

              <div className="overflow-hidden">
                <img
                  src={AboutImg}
                  alt="about"
                  className="
                    h-[220px]
                    sm:h-[340px]
                    md:h-[550px]
                    lg:h-[650px]

                    w-full
                    object-cover

                    grayscale
                    group-hover:grayscale-0

                    transition-all duration-500
                  "
                />
              </div>

              {/* FLOAT CARD */}
              <div
                className="
                  absolute

                  bottom-3 left-3
                  md:bottom-8 md:left-8

                  bg-white/70
                  dark:bg-[#0A0A0A]/70

                  backdrop-blur-xl

                  border
                  border-white/60
                  dark:border-white/10

                  rounded-2xl

                  px-3 py-2
                  md:px-6 md:py-5

                  max-w-[160px]
                  sm:max-w-xs

                  shadow-[0_10px_30px_-12px_rgba(37,99,235,0.4)]
                "
              >

                <p
                  className="
                    font-mono
                    text-[#0A0A0A]/50
                    dark:text-[#FAFAFA]/50

                    text-[9px]
                    md:text-xs

                    uppercase
                    tracking-wide
                  "
                >
                  Creative Developer
                </p>

                <h3
                  className="
                    mt-1

                    font-display
                    text-sm
                    sm:text-base
                    md:text-2xl

                    font-bold

                    text-[#0A0A0A]
                    dark:text-[#FAFAFA]
                  "
                >
                  Modern Vision
                </h3>

              </div>

            </div>

          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >

            <p
              className="
                text-[#0A0A0A]/60
                dark:text-[#FAFAFA]/60

                text-sm sm:text-base md:text-lg
                leading-relaxed
              "
            >
              Nux Space is a creative digital agency focused on
              Web Development and Graphic Design. The name “Nux”
              stands for “New Experience,” representing our vision
              to create modern, innovative, and memorable digital experiences.
            </p>

            <p
              className="
                mt-5 md:mt-8

                text-[#0A0A0A]/60
                dark:text-[#FAFAFA]/60

                text-sm sm:text-base md:text-lg
                leading-relaxed
              "
            >
              We believe great design is more than visuals — it’s about
              creating meaningful connections between brands and people.
              Through creativity, strategy, and technology,
              we help businesses grow in the digital era.
            </p>

            {/* FEATURES */}
            <div
              className="
                grid
                grid-cols-1 sm:grid-cols-3
                gap-4

                mt-8 md:mt-14
              "
            >

              {features.map(({ number, title, description }, index) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    p-5 md:p-6

                    bg-white/40
                    dark:bg-white/[0.03]

                    backdrop-blur-xl

                    border
                    border-white/60
                    dark:border-white/10

                    rounded-2xl

                    hover:-translate-y-1
                    hover:border-[#2563EB]/40
                    hover:shadow-[0_16px_40px_-18px_rgba(37,99,235,0.45)]

                    transition-all duration-300
                  "
                >

                  <span
                    className="
                      font-mono
                      text-sm
                      font-semibold

                      text-[#2563EB]
                    "
                  >
                    {number}
                  </span>

                  <h3
                    className="
                      mt-3

                      font-display
                      font-bold
                      text-base md:text-lg

                      text-[#0A0A0A]
                      dark:text-[#FAFAFA]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-[#0A0A0A]/60
                      dark:text-[#FAFAFA]/60

                      text-sm
                    "
                  >
                    {description}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
