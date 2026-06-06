export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 pt-5">
        <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg rounded-2xl px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight">
            NuX
            <span className="text-sky-400">Space</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-sky-400 transition">
              Home
            </a>

            <a href="#services" className="hover:text-sky-400 transition">
              Services
            </a>

            <a href="#portfolio" className="hover:text-sky-400 transition">
              Portfolio
            </a>

            <a href="#about" className="hover:text-sky-400 transition">
              About
            </a>

            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="
              hidden md:flex
              px-5 py-3
              rounded-xl
              bg-sky-400
              text-white
              font-semibold
              hover:scale-105
              hover:bg-sky-500
              transition
            "
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}