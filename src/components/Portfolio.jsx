import { Link } from "react-router-dom";
import ImgH from "../assets/Mockup.png";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="
        relative
        py-20 md:py-32
        overflow-hidden
      "
    >

      {/* GLOW */}
      <div className="
        absolute top-0 right-0
        w-[250px] md:w-[400px]
        h-[250px] md:h-[400px]

        bg-blue-400/10
        blur-3xl
        rounded-full
      " />

      <div className="
        absolute bottom-0 left-0
        w-[300px] md:w-[500px]
        h-[300px] md:h-[500px]

        bg-indigo-400/10
        blur-3xl
        rounded-full
      " />

      <div className="
        max-w-7xl
        mx-auto
        px-4 sm:px-6
        relative z-10
      ">

        {/* HEADER */}
        <div className="
          flex flex-col md:flex-row
          md:items-end
          justify-between
          gap-6
        ">

          <div>

            <span className="
              text-blue-500
              font-semibold
              tracking-[0.2em] md:tracking-[0.3em]
              uppercase
              text-sm md:text-base
            ">
              Portfolio
            </span>

            <h2 className="
              mt-3 md:mt-5

              text-3xl
              sm:text-4xl
              md:text-5xl

              font-black
              tracking-tight

              text-slate-900
            ">
              Featured Projects
            </h2>

          </div>

          <Link
            to="/portfolio"
            className="
              group
              relative

              px-7 py-4

              rounded-2xl

              bg-gradient-to-r
              from-blue-500
              to-indigo-500

              text-white
              font-semibold

              shadow-lg
              shadow-blue-300/30

              transition-all duration-300

              hover:scale-105
              hover:shadow-2xl
              hover:shadow-blue-300/40

              overflow-hidden
            "
          >

            <span className="
              absolute inset-0
              bg-white/10

              opacity-0
              group-hover:opacity-100

              transition
            " />

            View All Portfolio

          </Link>

        </div>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1 md:grid-cols-3

          gap-6 md:gap-8

          mt-12 md:mt-20
        ">

          {/* MAIN CARD */}
          <div className="
            group
            relative
            overflow-hidden

            rounded-2xl md:rounded-[32px]

            bg-white/80
            backdrop-blur-xl

            border border-slate-200

            shadow-xl
            shadow-slate-200/40

            hover:border-blue-400/30
            hover:shadow-2xl
            hover:shadow-blue-100/40

            transition
          ">

            {/* IMAGE */}
            <img
              src={ImgH}
              alt=""
              className="
                h-[220px]
                sm:h-[300px]
                md:h-[350px]

                w-full
                object-cover

                group-hover:scale-110
                transition duration-700
              "
            />

            {/* OVERLAY */}
            <div className="
              absolute inset-0

              bg-gradient-to-t
              from-slate-900/90
              via-blue-900/20
              to-transparent
            " />

            {/* CONTENT */}
            <div className="
              absolute bottom-0 left-0
              p-5 md:p-8
            ">

              <span className="
                px-3 md:px-4
                py-1 md:py-2

                rounded-full

                bg-blue-500/10

                border border-blue-300/20

                text-blue-200

                text-[10px] md:text-xs
                font-semibold

                tracking-widest
                uppercase
              ">
                Vision Concept
              </span>

              <h3 className="
                mt-3 md:mt-5

                text-xl md:text-3xl
                font-black

                text-white
              ">
                Futuristic Digital Landing Experience
              </h3>

              <p className="
                mt-3 md:mt-4

                text-slate-200

                text-sm md:text-base
                leading-relaxed

                line-clamp-3
              ">
                Creating futuristic websites,
                modern branding, and immersive
                user experiences with clean design
                and premium technology.
              </p>

            </div>

          </div>

          {/* UPCOMING 1 */}
          <div className="
            relative
            overflow-hidden

            rounded-2xl md:rounded-[32px]

            bg-white/80
            backdrop-blur-xl

            border border-dashed border-slate-300

            shadow-xl
            shadow-slate-200/40

            h-[220px]
            sm:h-[300px]
            md:h-[350px]

            flex items-center justify-center
          ">

            <div className="
              absolute inset-0
              bg-white/50
            " />

            <div className="
              relative
              text-center
              px-6
            ">

              <div className="
                w-14 md:w-20
                h-14 md:h-20

                rounded-full

                bg-blue-500/10

                border border-blue-300/20

                flex items-center justify-center

                mx-auto
              ">

                <div className="
                  w-3 md:w-4
                  h-3 md:h-4

                  rounded-full

                  bg-blue-500

                  animate-pulse
                " />

              </div>

              <h3 className="
                mt-5 md:mt-8

                text-xl md:text-3xl
                font-black

                text-slate-900
              ">
                Upcoming Project
              </h3>

              <p className="
                mt-3 md:mt-4

                text-slate-600

                text-sm md:text-base
                leading-relaxed
              ">
                New creative project currently
                under development.
              </p>

            </div>

          </div>

          {/* UPCOMING 2 */}
          <div className="
            relative
            overflow-hidden

            rounded-2xl md:rounded-[32px]

            bg-white/80
            backdrop-blur-xl

            border border-dashed border-slate-300

            shadow-xl
            shadow-slate-200/40

            h-[220px]
            sm:h-[300px]
            md:h-[350px]

            flex items-center justify-center
          ">

            <div className="
              absolute
              w-32 md:w-40
              h-32 md:h-40

              bg-blue-400/10
              blur-3xl

              rounded-full
            " />

            <div className="
              relative
              text-center
              px-6
            ">

              <span className="
                text-blue-500

                text-xs md:text-sm
                font-semibold

                tracking-[0.2em] md:tracking-[0.3em]
                uppercase
              ">
                NuxSpace
              </span>

              <h3 className="
                mt-4 md:mt-6

                text-xl md:text-3xl
                font-black

                text-slate-900
              ">
                Building Something Extraordinary
              </h3>

              <p className="
                mt-3 md:mt-4

                text-slate-600

                text-sm md:text-base
                leading-relaxed
              ">
                More premium website and design
                projects coming soon.
              </p>

              <div className="
                mt-6 md:mt-8

                inline-flex

                px-4 md:px-5
                py-2 md:py-3

                rounded-full

                bg-slate-100

                border border-slate-200

                text-slate-600

                text-xs md:text-sm
              ">
                Currently Expanding Portfolio
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}