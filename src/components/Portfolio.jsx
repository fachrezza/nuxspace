
import { Link } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";
import projects from "../data/portfolio";
import ImgH from "../assets/Mockup.png";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-32 overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="text-blue-500 font-semibold tracking-[0.3em] uppercase">
              Portfolio
            </span>

            <h2 className="mt-5 text-5xl font-black tracking-tight">
              Featured Projects
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="
              px-7 py-4
              rounded-2xl
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              hover:border-blue-500/30
              hover:bg-blue-500
              transition
            "
          >
            View All Portfolio
          </Link>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* MAIN CONCEPT */}
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              hover:border-blue-500/30
              transition
            "
          >
            {/* IMAGE */}
            <img
              src={ImgH}
              alt=""
              className="
                h-[350px]
                w-full
                object-cover
                group-hover:scale-110
                transition duration-700
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-blue-900/30 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-8">
              <span
                className="
                  px-4 py-2
                  rounded-full
                  bg-blue-500/20
                  border border-blue-500/30
                  text-blue-400
                  text-xs
                  font-semibold
                  tracking-widest
                  uppercase
                "
              >
                Vision Concept
              </span>

              <h3 className="mt-5 text-3xl font-black">
                Futuristic Digital Landing Experience
                  
              </h3>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Creating futuristic websites, modern
                branding, and immersive user experiences
                with clean design and premium technology.
              </p>
            </div>
          </div>

          {/* UPCOMING 1 */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              bg-white/5
              backdrop-blur-xl
              border border-dashed border-white/10
              h-[350px]
              flex items-center justify-center
            "
          >
            {/* BG */}
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt=""
              className="
                absolute inset-0
                w-full h-full
                object-cover
                blur-md
                scale-110
                opacity-40
              "
            />

            <div className="absolute inset-0 bg-black/70"></div>

            {/* CONTENT */}
            <div className="relative text-center px-8">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto">
                <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
              </div>

              <h3 className="mt-8 text-3xl font-black">
                Upcoming Project
              </h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                New creative project currently under
                development.
              </p>
            </div>
          </div>

          {/* UPCOMING 2 */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              bg-white/5
              backdrop-blur-xl
              border border-dashed border-white/10
              h-[350px]
              flex items-center justify-center
            "
          >
            {/* GLOW */}
            <div className="absolute w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

            {/* CONTENT */}
            <div className="relative text-center px-8">
              <span className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase">
                NuxSpace
              </span>

              <h3 className="mt-6 text-3xl font-black">
                Building Something Extraordinary
              </h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                More premium website and design projects
                coming soon.
              </p>

              {/* STATUS */}
              <div className="mt-8 inline-flex px-5 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
                Currently Expanding Portfolio
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}