import { useParams } from "react-router-dom";
import catalog from "../data/catalog";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MessageCircle } from "lucide-react";

export default function CatalogPage() {
  const { category } = useParams();
  const data = catalog[category];

  if (!data) {
    return (
      <div
        className="
          min-h-screen

          flex items-center justify-center

          bg-[#f8fafc]
          dark:bg-[#060816]

          text-slate-900
          dark:text-white
        "
      >
        Category not found
      </div>
    );
  }

  return (
    <main
      className="
        bg-[#f8fafc]
        dark:bg-[#060816]

        text-slate-900
        dark:text-white

        min-h-screen

        py-32

        transition-colors duration-300
      "
    >

      {/* NAVBAR */}
      <Navbar />

      {/* GLOW */}
      <div
        className="
          fixed
          top-[-100px]
          left-[-100px]

          w-[300px]
          h-[300px]

          bg-blue-500/10

          blur-3xl
          rounded-full

          pointer-events-none
          -z-10
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto

          px-6
        "
      >

        {/* TITLE */}
        <div className="text-center">

          <span
            className="
              text-blue-500

              uppercase
              tracking-[0.3em]

              text-sm
              font-semibold
            "
          >
            Service Category
          </span>

          <h1
            className="
              mt-5

              text-4xl md:text-5xl
              font-black

              text-slate-900
              dark:text-white
            "
          >
            {data.title}
          </h1>

          <p
            className="
              mt-6

              text-slate-600
              dark:text-slate-400

              max-w-2xl
              mx-auto

              leading-relaxed
            "
          >
            Choose the best service for your needs with
            transparent pricing and complete feature lists.
          </p>

        </div>

        {/* ITEMS */}
        <div
          className="
            grid
            md:grid-cols-2

            gap-8

            mt-16
          "
        >

          {data.items.map((item, index) => (
            <div
              key={index}
              className="
                p-8

                rounded-[32px]

                bg-white/80
                dark:bg-white/5

                backdrop-blur-xl

                border border-slate-200
                dark:border-white/10

                shadow-xl
                shadow-slate-200/40
                dark:shadow-black/20

                hover:border-blue-500/30
                hover:-translate-y-1

                transition
              "
            >

              {/* TITLE */}
              <h2
                className="
                  text-2xl
                  font-bold

                  text-slate-900
                  dark:text-white
                "
              >
                {item.name}
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-4

                  text-slate-600
                  dark:text-slate-400

                  leading-relaxed
                "
              >
                {item.description}
              </p>

              {/* FEATURES */}
              <div className="mt-6">

                <p
                  className="
                    text-blue-500
                    font-semibold
                  "
                >
                  What you get:
                </p>

                <ul
                  className="
                    mt-4
                    space-y-3

                    text-slate-700
                    dark:text-slate-300
                  "
                >

                  {item.includes.map((inc, i) => (
                    <li
                      key={i}
                      className="
                        flex items-start
                        gap-3
                      "
                    >

                      <span
                        className="
                          mt-1

                          w-2
                          h-2

                          rounded-full

                          bg-blue-500
                        "
                      />

                      <span>{inc}</span>

                    </li>
                  ))}

                </ul>

              </div>

              {/* PRICE */}
              <div
                className="
                  mt-8

                  text-blue-500

                  font-bold
                  text-2xl
                "
              >
                {item.price}
              </div>

              {/* TEXT */}
              <p
                className="
                  mt-5

                  text-xs

                  text-slate-500
                  dark:text-slate-400
                "
              >
                Interested? Contact us directly on WhatsApp.
              </p>

              {/* BUTTON */}
              <a
                href={`https://wa.me/6285213840489?text=Halo%20saya%20ingin%20order%20${encodeURIComponent(item.name)}`}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-6

                  w-full

                  inline-flex
                  items-center justify-center
                  gap-3

                  px-6 py-4

                  rounded-2xl

                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-500

                  text-white
                  font-semibold

                  hover:scale-[1.02]
                  hover:shadow-xl
                  hover:shadow-blue-500/30

                  transition
                "
              >

                <MessageCircle size={20} />

                Order via WhatsApp

              </a>

            </div>
          ))}

        </div>

      </div>

      <Footer />

    </main>
  );
}