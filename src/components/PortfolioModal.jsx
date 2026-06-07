import { X } from "lucide-react";

export default function PortfolioModal({
  project,
  onClose,
}) {
  if (!project) return null;

  return (
    <div
      className="
        fixed inset-0
        z-[999]
        flex items-center justify-center
        bg-black/70
        backdrop-blur-md
        px-6
      "
    >
      {/* MODAL */}
      <div
        className="
          relative
          max-w-6xl
          w-full
          rounded-[40px]
          overflow-hidden
          bg-[#0f172a]/90
          border border-white/10
          shadow-2xl
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute
            top-6 right-6
            z-20
            w-12 h-12
            rounded-2xl
            bg-white/10
            hover:bg-blue-400
            transition
            flex items-center justify-center
          "
        >
          <X />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* LEFT */}
          <div className="p-12 flex flex-col justify-center">
            <span className="text-blue-400 font-semibold tracking-widest uppercase">
              {project.category}
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight">
              {project.title}
            </h2>

            <p className="mt-8 text-slate-400 leading-relaxed text-lg">
              {project.description}
            </p>

            {/* TECH */}
            <div className="flex flex-wrap gap-4 mt-10">
              {project.tech.map((item, index) => (
                <div
                  key={index}
                  className="
                    px-5 py-3
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    text-blue-400
                    font-semibold
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex gap-5 mt-12">
              <button
                className="
                  px-7 py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-500 
                  font-semibold
                  hover:scale-105
                  hover:shadow-xl
                  hover:shadow-indigo-400/30
                  transition
                "
              >
                Live Preview
              </button>

              <button
                className="
                  px-7 py-4
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  hover:bg-white/10
                  transition
                "
              >
                View Detail
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* GLOW */}
            <div className="absolute inset-0 bg-blue-400/10 blur-3xl"></div>

            <img
              src={project.mockup}
              alt={project.title}
              className="
                relative
                w-full
                h-full
                object-cover
                min-h-[700px]
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}