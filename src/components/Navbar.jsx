import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 md:pt-5">

        <div
          className="
            bg-white/60
            dark:bg-white/[0.04]

            backdrop-blur-2xl

            border
            border-white/50
            dark:border-white/10

            rounded-2xl

            px-4 sm:px-6

            h-16 md:h-18

            flex items-center justify-between

            shadow-[0_8px_32px_-12px_rgba(37,99,235,0.25)]
            dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]

            transition-colors duration-300
          "
        >

        {/* LOGO */}
        <Link
          to="/"
          className="shrink-0"
        >

          <h1
            className="
              font-display
              text-xl md:text-2xl
              font-bold
              tracking-tight
            "
          >

            <span className="text-[#2563EB]">
              NuX
            </span>

            <span
              className="
                text-[#0A0A0A]
                dark:text-[#FAFAFA]
              "
            >
              Space
            </span>

          </h1>

        </Link>

        {/* NAV */}
        <nav
          className="
            hidden md:flex

            items-center

            gap-8

            font-mono
            text-xs
            uppercase
            tracking-widest
          "
        >

          {isHome ? (
            <>
              <a
                href="#home"
                className="
                  text-[#0A0A0A]/70
                  dark:text-[#FAFAFA]/70

                  hover:text-[#2563EB]

                  transition
                "
              >
                Home
              </a>

              <a
                href="#catalog"
                className="
                  text-[#0A0A0A]/70
                  dark:text-[#FAFAFA]/70

                  hover:text-[#2563EB]

                  transition
                "
              >
                Catalog
              </a>

              <a
                href="#portfolio"
                className="
                  text-[#0A0A0A]/70
                  dark:text-[#FAFAFA]/70

                  hover:text-[#2563EB]

                  transition
                "
              >
                Portfolio
              </a>

              <a
                href="#about"
                className="
                  text-[#0A0A0A]/70
                  dark:text-[#FAFAFA]/70

                  hover:text-[#2563EB]

                  transition
                "
              >
                About
              </a>

              <a
                href="#contact"
                className="
                  text-[#0A0A0A]/70
                  dark:text-[#FAFAFA]/70

                  hover:text-[#2563EB]

                  transition
                "
              >
                Contact
              </a>
            </>
          ) : null}

        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* THEME TOGGLE */}
          <ThemeToggle />

          {/* BUTTON */}
          {isHome ? (
            <a
              href="#contact"
              className="
                hidden md:flex

                px-5 py-2.5

                rounded-xl

                bg-[#0A0A0A]
                dark:bg-[#FAFAFA]

                text-[#FAFAFA]
                dark:text-[#0A0A0A]

                font-mono
                text-xs
                uppercase
                tracking-widest
                font-semibold

                hover:bg-[#2563EB]
                dark:hover:bg-[#2563EB]
                dark:hover:text-white

                hover:shadow-[0_0_24px_-4px_rgba(37,99,235,0.6)]

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

                px-5 py-2.5

                rounded-xl

                bg-[#0A0A0A]
                dark:bg-[#FAFAFA]

                text-[#FAFAFA]
                dark:text-[#0A0A0A]

                font-mono
                text-xs
                uppercase
                tracking-widest
                font-semibold

                hover:bg-[#2563EB]
                dark:hover:bg-[#2563EB]
                dark:hover:text-white

                hover:shadow-[0_0_24px_-4px_rgba(37,99,235,0.6)]

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
