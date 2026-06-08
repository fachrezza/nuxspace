import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5">

        <div className="
          bg-white/80
          backdrop-blur-2xl

          border border-slate-200

          rounded-2xl

          px-5 md:px-8
          py-3 md:py-4

          flex items-center justify-between

          shadow-xl
          shadow-slate-200/40
        ">

          {/* LOGO */}
          <Link to="/" className="shrink-0">

            <h1 className="
              text-2xl
              font-black
              tracking-tight
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

              <span className="text-slate-900">
                Space
              </span>

            </h1>

          </Link>

          {/* NAV */}
          <nav className="
            hidden md:flex
            items-center
            gap-6 lg:gap-8

            text-sm
            font-medium
          ">

            {isHome ? (
              <>
                <a
                  href="#home"
                  className="
                    text-slate-600
                    hover:text-blue-500
                    transition
                  "
                >
                  Home
                </a>

                <a
                  href="#catalog"
                  className="
                    text-slate-600
                    hover:text-blue-500
                    transition
                  "
                >
                  Catalog
                </a>

                <a
                  href="#portfolio"
                  className="
                    text-slate-600
                    hover:text-blue-500
                    transition
                  "
                >
                  Portfolio
                </a>

                <a
                  href="#about"
                  className="
                    text-slate-600
                    hover:text-blue-500
                    transition
                  "
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="
                    text-slate-600
                    hover:text-blue-500
                    transition
                  "
                >
                  Contact
                </a>
              </>
            ) : (
              <>
              </>
            )}

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* THEME */}
            <ThemeToggle />

            {/* BUTTON */}
            {isHome ? (
              <a
                href="#contact"
                className="
                  hidden md:flex

                  px-5 py-3

                  rounded-xl

                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-500

                  text-white
                  font-semibold

                  hover:scale-105
                  hover:shadow-xl
                  hover:shadow-blue-300/40

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

                  px-5 py-3

                  rounded-xl

                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-500

                  text-white
                  font-semibold

                  hover:scale-105
                  hover:shadow-xl
                  hover:shadow-blue-300/40

                  transition
                "
              >
                Back Home
              </Link>
            )}

          </div>

        </div>

      </div>

    </header>
  );
}