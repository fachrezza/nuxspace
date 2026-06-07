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
        rounded-[32px]
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        hover:border-blue-500/30
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
            group-hover:scale-110
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
          via-black/20
          to-transparent
        "
      ></div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <p className="text-blue-500 text-sm font-semibold">
          {category}
        </p>

        <div className="flex items-center justify-between mt-3">
          <h3 className="text-2xl font-bold">
            {title}
          </h3>

          <button
            className="
              w-12 h-12
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              flex items-center justify-center
              hover:bg-blue-500
              transition
            "
          >
            <ArrowUpRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}