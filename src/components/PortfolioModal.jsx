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
          rounded-3xl
          overflow-hidden
          bg-white/10
          backdrop-blur-2xl
          border border-white/15
          shadow-[0_40px_100px_-30px_rgba(37,99,235,0.5)]
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute
            top-6 right-6
            z-20
            w-12 h-12
            rounded-xl
            border border-white/15
            hover:bg-[#2563EB]
            hover:border-[#2563EB]
            hover:shadow-[0_0_24px_-4px_rgba(37,99,235,0.7)]
            transition
            flex items-center justify-center
          "
        >
          <X className="text-white" />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* LEFT */}
          <div className="p-12 flex flex-col justify-center">
            <span className="font-mono text-xs text-[#5B9BFF] font-semibold tracking-widest uppercase">
              {project.category}
            </span>

            <h2 className="mt-6 font-display text-5xl font-bold leading-tight text-white">
              {project.title}
            </h2>

            <p className="mt-8 text-white/60 leading-relaxed text-lg">
              {project.description}
            </p>

            {/* TECH */}
            <div className="flex flex-wrap gap-3 mt-10">
              {project.tech.map((item, index) => (
                <div
                  key={index}
                  className="
                    px-4 py-2.5
                    rounded-full
                    bg-white/5
                    backdrop-blur-xl
                    border border-white/15
                    font-mono
                    text-xs
                    uppercase
                    tracking-wide
                    text-[#5B9BFF]
                    font-semibold
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex gap-4 mt-12">
              <button
                className="
                  px-7 py-4
                  rounded-xl
                  bg-[#2563EB]
                  text-white
                  font-semibold
                  hover:bg-[#1D4ED8]
                  hover:shadow-[0_0_32px_-6px_rgba(37,99,235,0.8)]
                  transition
                "
              >
                Live Preview
              </button>

              <button
                className="
                  px-7 py-4
                  rounded-xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/15
                  text-white
                  hover:border-[#2563EB]
                  hover:text-[#2563EB]
                  transition
                "
              >
                View Detail
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
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