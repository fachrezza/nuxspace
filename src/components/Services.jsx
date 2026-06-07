import { Code2, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: <Code2 size={34} />,
    title: "Website Development",
    desc: "Modern website using React, Laravel and premium UI experience.",
  },
  {
    icon: <Palette size={34} />,
    title: "Graphic Design",
    desc: "Creative branding, social media, poster and visual identity.",
  },
  {
    icon: <Globe size={34} />,
    title: "Landing Page",
    desc: "High-converting landing page for startup and business.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <div className="text-center">

          <span className="text-blue-500 font-semibold tracking-[0.2em] md:tracking-widest text-sm md:text-base">
            SERVICES
          </span>

          <h2 className="mt-4 md:mt-5 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Premium Digital Solution
          </h2>

          <p className="mt-4 md:mt-6 text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Creating modern digital products with futuristic design and smooth user experience.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20">

          {services.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                p-6 md:p-10
                rounded-2xl md:rounded-[32px]
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                shadow-xl
                hover:-translate-y-2 md:hover:-translate-y-3
                hover:border-blue-500/30
                hover:shadow-indigo-400/10
                transition
              "
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-28 md:w-40 h-28 md:h-40 bg-blue-500/20 rounded-full blur-3xl" />

              {/* ICON */}
              <div className="
                relative
                w-14 md:w-20 h-14 md:h-20
                rounded-xl md:rounded-2xl
                flex items-center justify-center
                bg-blue-500/10
                text-blue-400
              ">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-6 md:mt-8 text-xl md:text-2xl font-bold relative">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 md:mt-5 text-slate-500 text-sm md:text-base leading-relaxed relative">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}