import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5">

        <div className="
          bg-white/5
          backdrop-blur-2xl
          border border-white/10
          rounded-2xl
          px-5 md:px-8 py-3 md:py-4
          flex items-center justify-between
          shadow-2xl
        ">

          {/* LOGO */}
          <Link to="/">
            <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">NuX<span className="text-white-400 ">Space </span> </h1>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex gap-6 lg:gap-8 text-sm text-slate-300">

            {isHome ? (
              <>
                <a href="#home" className="hover:text-blue-500 transition">Home</a>
                <a href="#services" className="hover:text-blue-500 transition">Services</a>
                <a href="#portfolio" className="hover:text-blue-500 transition">Portfolio</a>
                <a href="#about" className="hover:text-blue-500 transition">About</a>
                <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
              </>
            ) : (
              <>
                <Link to="/" className="hover:text-blue-500 transition">Home</Link>
                <Link to="/portfolio" className="text-blue-500">Portfolio</Link>
              </>
            )}

          </nav>

          {/* BUTTON */}
          {isHome ? (
            <a
              href="#contact"
              className="
                hidden md:flex
                px-4 md:px-5 py-2 md:py-3
                rounded-xl
                bg-gradient-to-r from-blue-500 to-indigo-500
                text-white font-semibold
                hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40
                transition
              "
            >
              Let's Talk
            </a>
          ) : (
            <Link
              to="/"
              className="
                hidden md:flex
                px-4 md:px-5 py-2 md:py-3
                rounded-xl
                bg-gradient-to-r from-blue-500 to-indigo-500
                text-white font-semibold
                hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40
                transition
              "
            >
              Back Home
            </Link>
          )}

        </div>
      </div>
    </header>
  );
}