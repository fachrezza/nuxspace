import { ArrowUpRight } from "lucide-react";

export default function PortfolioCard({
  title,
  category,
  image,
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-md
        border border-white/15
        hover:border-[#2563EB]
        transition
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-[350px]
            w-full
            object-cover
            group-hover:scale-105
            transition duration-700
          "
        />
      </div>

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/80
          via-black/10
          to-transparent
        "
      ></div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <p className="font-mono text-xs uppercase tracking-widest text-[#5B9BFF]">
          {category}
        </p>

        <div className="flex items-center justify-between mt-3">
          <h3 className="font-display text-2xl font-bold text-white">
            {title}
          </h3>

          <button
            className="
              w-12 h-12
              rounded-md
              border border-white/20
              flex items-center justify-center
              hover:bg-[#2563EB]
              hover:border-[#2563EB]
              transition
            "
          >
            <ArrowUpRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}