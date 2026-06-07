import {
  Code2,
  Palette,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={40} />,
    title: "Website Development",
    desc: "Modern website using React, Laravel and premium UI experience.",
  },
  {
    icon: <Palette size={40} />,
    title: "Graphic Design",
    desc: "Creative branding, social media, poster and visual identity.",
  },
  {
    icon: <Globe size={40} />,
    title: "Landing Page",
    desc: "High-converting landing page for startup and business.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center">
          <span className="text-blue-500 font-semibold tracking-widest">
            SERVICES
          </span>

          <h2 className="mt-5 text-5xl font-black tracking-tight">
            Premium Digital Solution
          </h2>

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Creating modern digital products with futuristic
            design and smooth user experience.
          </p>
        </div>

        {/* CARD */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {services.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                p-10
                rounded-[32px]
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                shadow-xl
                hover:-translate-y-3
                hover:border-blue-500/30
                hover:shadow-indigo-400/10
                transition
              "
            >
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl"></div>

              <div
                className="
                  relative
                  w-20 h-20
                  rounded-2xl
                  flex items-center justify-center
                  bg-blue-100
                  text-blue-500
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold relative">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-500 leading-relaxed relative">
                {item.desc}
              </p>

 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}