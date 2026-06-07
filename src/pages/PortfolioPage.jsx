import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import HeroImage from "../assets/FullMockup.png";

export default function PortfolioPage() {
  return (
    <main className="bg-[#060816] text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-blue-500 font-semibold tracking-[0.3em] uppercase">
            Portfolio
          </span>

          <h1 className="mt-6 text-6xl md:text-7xl font-black tracking-tight leading-tight">
            Building The
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}
              Future
            </span>
            <br />
            Digital Experience
          </h1>

          <p className="mt-8 text-slate-400 max-w-2xl text-lg leading-relaxed">
            NuxSpace is currently crafting modern website
            experiences, futuristic interfaces, and premium
            digital branding for upcoming projects.
          </p>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="pb-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* GRID */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* MAIN CARD */}
            <div
              className="
                lg:col-span-2
                relative
                overflow-hidden
                rounded-[40px]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                min-h-[500px]
              "
            >
              {/* IMAGE */}
              <img
                src={HeroImage}
                alt=""
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  opacity-40
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-blue-900/30 to-transparent"></div>

              {/* CONTENT */}
              <div className="relative z-10 p-12 flex flex-col justify-end h-full">
                

                <h2 className="mt-8 text-5xl font-black leading-tight">
                  
                  Futuristic Digital <br />
                  Landing Experience
                </h2>

                <p className="mt-6 text-slate-300 max-w-2xl text-lg leading-relaxed">
                  Creating futuristic websites, modern
                  branding, and immersive user experiences
                  with clean design and premium technology.
                </p>

                {/* TAG */}
                <div className="flex flex-wrap gap-4 mt-10">
                  {[
                    "React",
                    "UI/UX",
                    "Motion",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                        px-5 py-3
                        rounded-2xl
                        bg-white/5
                        border border-white/10
                        text-slate-300
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDE CARDS */}
            <div className="space-y-8">
              {/* CARD 1 */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-dashed border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-10
                  h-[235px]
                  flex flex-col justify-center
                "
              >
                {/* GLOW */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>

                <span className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase">
                  Upcoming
                </span>

                <h3 className="mt-5 text-3xl font-black">
                  Next Launch
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">
                  New creative project currently under
                  development.
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-dashed border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-10
                  h-[235px]
                  flex flex-col justify-center
                "
              >
                {/* PULSE */}
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>

                  <span className="text-slate-400 text-sm">
                    In Progress
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-black">
                  Future Experience
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">
                  Experimental UI concepts and futuristic
                  digital interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className="
              mt-20
              rounded-[40px]
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-12
              text-center
            "
          >
            <span className="text-blue-400 font-semibold tracking-[0.3em] uppercase">
              Start With NuxSpace
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Let’s Build Something
              <span className="text-blue-500">
                {" "}
                Extraordinary
              </span>
            </h2>

            <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We are ready to help startups, personal brands,
              and businesses create futuristic digital
              experiences with modern technology and premium
              design.
            </p>

            <HashLink
              smooth
              to="/#contact"
              className="
                inline-flex
                mt-10
                px-8 py-4
                rounded-2xl
                bg-blue-500
                font-semibold
                hover:scale-105
                hover:shadow-2xl
                hover:shadow-blue-500/30
                transition
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