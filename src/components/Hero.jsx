import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageCircle, Plus } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your needs and goals",
  },
  {
    number: "02",
    title: "Design & Build",
    description: "Crafting modern UI and clean code",
  },
  {
    number: "03",
    title: "Launch",
    description: "Deploy and optimize for performance",
  },
];

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

      {/* DECORATIVE LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* SOFT GLOW */}
        <div
          className="
            absolute
            top-1/2 right-[-160px]
            -translate-y-1/2

            w-[600px] h-[600px]

            rounded-full

            bg-[#2563EB]/20
            dark:bg-[#2563EB]/25

            blur-[110px]
          "
        />

        {/* LARGE OUTLINE CIRCLE */}
        <div
          className="
            absolute
            top-1/2 right-[-180px]
            -translate-y-1/2

            w-[500px] h-[500px]

            rounded-full

            border border-[#2563EB]/20
          "
        />

        <div
          className="
            absolute
            top-1/2 right-[-180px]
            -translate-y-1/2

            w-[380px] h-[380px]

            rounded-full

            border border-[#2563EB]/15
          "
        />

        {/* CROSSHAIR MARKS */}
        <Plus
          size={16}
          className="
            absolute
            top-24 left-4 md:left-10

            text-[#0A0A0A]/20
            dark:text-[#FAFAFA]/20
          "
        />

        <Plus
          size={16}
          className="
            absolute
            bottom-16 left-1/2

            text-[#0A0A0A]/20
            dark:text-[#FAFAFA]/20
          "
        />

      </div>

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
            variants={container}
            initial="hidden"
            animate="show"
          >

            {/* LABEL */}
            <motion.span
              variants={item}
              className="
                flex items-center gap-2

                font-mono
                text-xs
                uppercase
                tracking-[0.3em]

                text-[#2563EB]
              "
            >
              <Plus size={12} strokeWidth={3} />
              NUX SPACE Agency
            </motion.span>

            {/* TITLE */}
            <motion.h1
              variants={item}
              className="
                mt-6

                font-display

                text-4xl
                sm:text-5xl
                md:text-7xl

                font-bold

                leading-[1.02]
                tracking-tight

                text-[#0A0A0A]
                dark:text-[#FAFAFA]
              "
            >
              Build Your

              <span className="text-[#2563EB]">
                {" "}Digital
              </span>

              <br />

              Presence With a New Experience

            </motion.h1>

            {/* DESC */}
            <motion.p
              variants={item}
              className="
              mt-8

              text-lg
              leading-relaxed

              text-[#0A0A0A]/60
              dark:text-[#FAFAFA]/60

              max-w-xl
            ">
              Nux Space delivers modern websites
              and creative visual designs to help brands,
              businesses, and creators stand out in the digital world.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={item}
              className="
              flex flex-wrap
              gap-4
              mt-10
            ">

              <a
                href="#portfolio"
                className="
                  group

                  px-8 py-4

                  rounded-xl

                  bg-[#0A0A0A]
                  dark:bg-[#FAFAFA]

                  text-[#FAFAFA]
                  dark:text-[#0A0A0A]

                  font-semibold

                  flex items-center gap-3

                  hover:bg-[#2563EB]
                  dark:hover:bg-[#2563EB]
                  dark:hover:text-white

                  hover:shadow-[0_0_32px_-6px_rgba(37,99,235,0.6)]

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

              <a
                href="#catalog"
                className="
                  px-8 py-4

                  rounded-xl

                  bg-white/50
                  dark:bg-white/5

                  backdrop-blur-xl

                  border border-white/60
                  dark:border-white/15

                  text-[#0A0A0A]
                  dark:text-[#FAFAFA]

                  font-semibold

                  hover:border-[#2563EB]
                  hover:text-[#2563EB]

                  transition
                "
              >
                Order Now
              </a>

            </motion.div>

            {/* TRUST CHIPS */}
            <motion.div
              variants={item}
              className="
                flex flex-wrap
                items-center
                gap-x-5 gap-y-2

                mt-6

                font-mono
                text-xs
                uppercase
                tracking-wide

                text-[#0A0A0A]/50
                dark:text-[#FAFAFA]/50
              "
            >

              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#2563EB]" />
                Fast Response
              </span>

              <span className="hidden sm:inline">/</span>

              <span className="flex items-center gap-1.5">
                <MessageCircle size={13} className="text-[#2563EB]" />
                Free Consultation
              </span>

            </motion.div>

          </motion.div>

        </div>

        {/* RIGHT */}
        <div className="
          relative
          flex items-center justify-center
        ">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="
              relative
              w-full
              max-w-md
            "
          >

            {/* Card */}
            <div
              className="
                relative

                bg-white/60
                dark:bg-white/[0.05]

                backdrop-blur-2xl

                border border-white/60
                dark:border-white/10

                rounded-3xl

                p-8

                shadow-[0_20px_60px_-20px_rgba(37,99,235,0.35)]
                dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]
              "
            >

              {/* Header */}
              <div className="mb-8">

                <h3 className="
                  font-display
                  font-bold
                  text-lg

                  text-[#0A0A0A]
                  dark:text-[#FAFAFA]
                ">
                  How We Work
                </h3>

                <p className="
                  text-[#0A0A0A]/50
                  dark:text-[#FAFAFA]/50

                  text-sm
                  mt-1
                ">
                  Simple process, powerful results
                </p>

              </div>

              {/* Steps */}
              <div className="space-y-6">

                {steps.map(({ number, title, description }) => (
                  <div
                    key={number}
                    className="
                      group
                      flex gap-4
                    "
                  >

                    <span
                      className="
                        font-mono
                        text-sm
                        font-semibold

                        text-[#2563EB]

                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    >
                      {number}
                    </span>

                    <div>

                      <p className="
                        text-[#0A0A0A]
                        dark:text-[#FAFAFA]

                        font-semibold
                        text-sm
                      ">
                        {title}
                      </p>

                      <p className="
                        text-[#0A0A0A]/50
                        dark:text-[#FAFAFA]/50

                        text-xs
                        mt-0.5
                      ">
                        {description}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

              {/* Bottom */}
              <div
                className="
                  mt-8
                  pt-6

                  border-t
                  border-white/60
                  dark:border-white/10
                "
              >

                <p className="
                  text-sm
                  leading-relaxed

                  text-[#0A0A0A]/60
                  dark:text-[#FAFAFA]/60
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
