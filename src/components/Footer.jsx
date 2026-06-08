export default function Footer() {
  return (
    <footer
      className="
        py-10

        border-t
        border-slate-200
        dark:border-white/10

        bg-white/70
        dark:bg-transparent

        backdrop-blur-xl
      "
    >

      <div className="
        max-w-7xl
        mx-auto

        px-4 sm:px-6

        flex flex-col md:flex-row
        items-center
        justify-between

        gap-4

        text-center md:text-left
      ">

        {/* LOGO */}
        <h1 className="
          text-xl md:text-2xl
          font-bold
        ">
          <span className="
            bg-gradient-to-r
            from-blue-500
            to-indigo-500

            bg-clip-text
            text-transparent
          ">
            NuX
          </span>

          <span className="
            text-slate-900
            dark:text-white
          ">
            Space
          </span>
        </h1>

        {/* TEXT */}
        <p className="
          text-slate-500
          dark:text-slate-400

          text-xs md:text-sm
        ">
          © 2026 NuX Space. All rights reserved.
        </p>

      </div>

    </footer>
  );
}