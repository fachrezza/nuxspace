export default function Footer() {
  return (
    <footer className="
      relative

      py-10

      border-t border-slate-200

      bg-white/60
      backdrop-blur-xl

      overflow-hidden
    ">

      {/* GLOW */}
      <div className="
        absolute bottom-0 left-0
        w-[250px] h-[250px]

        bg-blue-400/10
        blur-3xl
        rounded-full
      " />

      <div className="
        max-w-7xl
        mx-auto
        px-4 sm:px-6

        relative z-10

        flex flex-col md:flex-row
        items-center
        justify-between

        gap-4

        text-center md:text-left
      ">

        {/* LOGO */}
        <div>

          <h1 className="
            text-2xl md:text-3xl
            font-black
            tracking-tight
          ">
            NuX

            <span className="
              bg-gradient-to-r
              from-blue-500
              to-indigo-500

              bg-clip-text
              text-transparent
            ">
              Space
            </span>

          </h1>

          <p className="
            mt-2
            text-sm
            text-slate-500
          ">
            New Experience Digital Agency
          </p>

        </div>

        {/* TEXT */}
        <p className="
          text-slate-500
          text-xs md:text-sm
        ">
          © 2026 NuX Space. All rights reserved.
        </p>

      </div>
    </footer>
  );
}