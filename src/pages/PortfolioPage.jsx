import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import HeroImage from "../assets/FullMockup.png";

export default function PortfolioPage() {
  return (
    <main
      className="
        bg-[#f8fafc]
        dark:bg-[#060816]

        text-slate-900
        dark:text-white

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

        {/* GLOW */}
        <div
          className="
            absolute
            top-0 left-0

            w-[300px] md:w-[500px]
            h-[300px] md:h-[500px]

            bg-blue-500/10

            blur-3xl
            rounded-full
          "
        />

        <div
          className="
            max-w-7xl
            mx-auto

            px-4 sm:px-6

            relative z-10
          "
        >

          <span
            className="
              text-blue-500

              font-semibold

              tracking-[0.2em] md:tracking-[0.3em]
              uppercase

              text-sm md:text-base
            "
          >
            Portfolio
          </span>

          <h1
            className="
              mt-4 md:mt-6

              text-3xl
              sm:text-5xl
              md:text-7xl

              font-black
              tracking-tight
              leading-tight
            "
          >
            Building The

            <span
              className="
                bg-gradient-to-r
                from-blue-500
                to-indigo-500

                bg-clip-text
                text-transparent
              "
            >
              {" "}Future
            </span>

            <br />

            Digital Experience
          </h1>

          <p
            className="
              mt-6 md:mt-8

              text-slate-600
              dark:text-slate-400

              max-w-2xl

              text-sm md:text-lg
              leading-relaxed
            "
          >
            NuxSpace is currently crafting modern website experiences,
            futuristic interfaces, and premium digital branding
            for upcoming projects.
          </p>

        </div>

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
            <div
              className="
                lg:col-span-2

                relative
                overflow-hidden

                rounded-2xl md:rounded-[40px]

                border border-slate-200
                dark:border-white/10

                bg-white/80
                dark:bg-white/5

                backdrop-blur-2xl

                shadow-xl
                shadow-slate-200/40
                dark:shadow-black/20

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
                "
              />

              <div
                className="
                  absolute inset-0

                  bg-gradient-to-t
                  from-slate-900/80
                  via-blue-900/20
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
                    text-2xl md:text-5xl
                    font-black
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
                    gap-3 md:gap-4

                    mt-6 md:mt-10
                  "
                >

                  {["React", "UI/UX", "Motion"].map((item, index) => (
                    <div
                      key={index}
                      className="
                        px-3 md:px-5
                        py-2 md:py-3

                        rounded-xl md:rounded-2xl

                        bg-white/70
                        dark:bg-white/5

                        backdrop-blur-xl

                        border border-slate-200
                        dark:border-white/10

                        text-slate-700
                        dark:text-slate-300

                        text-xs md:text-base
                      "
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* SIDE CARDS */}
            <div className="space-y-6 md:space-y-8">

              {/* CARD 1 */}
              <div
                className="
                  relative
                  overflow-hidden

                  rounded-2xl md:rounded-[32px]

                  border border-dashed
                  border-slate-300
                  dark:border-white/10

                  bg-white/80
                  dark:bg-white/5

                  backdrop-blur-xl

                  shadow-xl
                  shadow-slate-200/40
                  dark:shadow-black/20

                  p-6 md:p-10

                  h-[200px]
                  md:h-[235px]

                  flex flex-col
                  justify-center
                "
              >

                <div
                  className="
                    absolute
                    top-0 right-0

                    w-24 md:w-32
                    h-24 md:h-32

                    bg-blue-500/10

                    blur-3xl
                    rounded-full
                  "
                />

                <span
                  className="
                    text-blue-500

                    text-xs md:text-sm
                    font-semibold

                    tracking-[0.2em] md:tracking-[0.3em]
                    uppercase
                  "
                >
                  Upcoming
                </span>

                <h3
                  className="
                    mt-3 md:mt-5

                    text-xl md:text-3xl
                    font-black

                    text-slate-900
                    dark:text-white
                  "
                >
                  Next Launch
                </h3>

                <p
                  className="
                    mt-2 md:mt-4

                    text-slate-600
                    dark:text-slate-400

                    text-sm md:text-base
                    leading-relaxed
                  "
                >
                  New creative project currently under development.
                </p>

              </div>

              {/* CARD 2 */}
              <div
                className="
                  relative
                  overflow-hidden

                  rounded-2xl md:rounded-[32px]

                  border border-dashed
                  border-slate-300
                  dark:border-white/10

                  bg-white/80
                  dark:bg-white/5

                  backdrop-blur-xl

                  shadow-xl
                  shadow-slate-200/40
                  dark:shadow-black/20

                  p-6 md:p-10

                  h-[200px]
                  md:h-[235px]

                  flex flex-col
                  justify-center
                "
              >

                <div
                  className="
                    flex items-center
                    gap-2 md:gap-3
                  "
                >

                  <div
                    className="
                      w-2 md:w-3
                      h-2 md:h-3

                      rounded-full

                      bg-blue-500
                      animate-pulse
                    "
                  />

                  <span
                    className="
                      text-slate-600
                      dark:text-slate-400

                      text-xs md:text-sm
                    "
                  >
                    In Progress
                  </span>

                </div>

                <h3
                  className="
                    mt-4 md:mt-6

                    text-xl md:text-3xl
                    font-black

                    text-slate-900
                    dark:text-white
                  "
                >
                  Future Experience
                </h3>

                <p
                  className="
                    mt-2 md:mt-4

                    text-slate-600
                    dark:text-slate-400

                    text-sm md:text-base
                    leading-relaxed
                  "
                >
                  Experimental UI concepts and futuristic digital interfaces.
                </p>

              </div>

            </div>

          </div>

          {/* CTA */}
          <div
            className="
              mt-16 md:mt-20

              rounded-2xl md:rounded-[40px]

              border border-slate-200
              dark:border-white/10

              bg-white/80
              dark:bg-white/5

              backdrop-blur-2xl

              shadow-xl
              shadow-slate-200/40
              dark:shadow-black/20

              p-8 md:p-12

              text-center
            "
          >

            <span
              className="
                text-blue-500

                font-semibold

                tracking-[0.2em] md:tracking-[0.3em]
                uppercase

                text-sm md:text-base
              "
            >
              Start With NuxSpace
            </span>

            <h2
              className="
                mt-4 md:mt-6

                text-2xl md:text-5xl
                font-black

                text-slate-900
                dark:text-white
              "
            >
              Let’s Build Something

              <span className="text-blue-500">
                {" "}Extraordinary
              </span>
            </h2>

            <p
              className="
                mt-4 md:mt-6

                text-slate-600
                dark:text-slate-400

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

                rounded-xl md:rounded-2xl

                bg-gradient-to-r
                from-blue-500
                to-indigo-500

                text-white
                font-semibold

                hover:scale-105
                hover:shadow-2xl
                hover:shadow-blue-500/30

                transition

                text-sm md:text-base
              "
            >
              Start a Project
            </HashLink>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}