import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import catalog from "../data/catalog";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MessageCircle, Plus } from "lucide-react";

export default function CatalogPage() {
  const { category } = useParams();
  const data = catalog[category];

  if (!data) {
    return (
      <div
        className="
          min-h-screen

          flex items-center justify-center

          bg-[#FAFAFA]
          dark:bg-[#0A0A0A]

          text-[#0A0A0A]
          dark:text-[#FAFAFA]

          font-body
        "
      >
        Category not found
      </div>
    );
  }

  return (
    <main
      className="
        bg-[#FAFAFA]
        dark:bg-[#0A0A0A]

        text-[#0A0A0A]
        dark:text-[#FAFAFA]

        font-body

        min-h-screen

        py-32

        transition-colors duration-300
      "
    >

      {/* NAVBAR */}
      <Navbar />

      <div
        className="
          max-w-7xl
          mx-auto

          px-6
        "
      >

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <span
            className="
              flex items-center gap-2

              font-mono
              text-[#2563EB]

              uppercase
              tracking-[0.3em]

              text-xs
              font-semibold
            "
          >
            <Plus size={12} strokeWidth={3} />
            Service Category
          </span>

          <h1
            className="
              mt-4

              font-display
              text-4xl md:text-5xl
              font-bold

              text-[#0A0A0A]
              dark:text-[#FAFAFA]
            "
          >
            {data.title}
          </h1>

          <p
            className="
              mt-6

              text-[#0A0A0A]/60
              dark:text-[#FAFAFA]/60

              max-w-2xl

              leading-relaxed
            "
          >
            Choose the best service for your needs with
            transparent pricing and complete feature lists.
          </p>

        </motion.div>

        {/* ITEMS */}
        <div
          className="
            grid
            md:grid-cols-2
            gap-6

            mt-16
          "
        >

          {data.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              className="
                p-8

                bg-white/50
                dark:bg-white/[0.04]

                backdrop-blur-xl

                border
                border-white/60
                dark:border-white/10

                rounded-3xl

                hover:border-[#2563EB]/40
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.45)]

                transition-all duration-300
              "
            >

              {/* TITLE */}
              <h2
                className="
                  font-display
                  text-2xl
                  font-bold

                  text-[#0A0A0A]
                  dark:text-[#FAFAFA]
                "
              >
                {item.name}
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-4

                  text-[#0A0A0A]/60
                  dark:text-[#FAFAFA]/60

                  leading-relaxed
                "
              >
                {item.description}
              </p>

              {/* FEATURES */}
              <div className="mt-6">

                <p
                  className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-widest

                    text-[#2563EB]
                    font-semibold
                  "
                >
                  What you get
                </p>

                <ul
                  className="
                    mt-4
                    space-y-3

                    text-[#0A0A0A]/80
                    dark:text-[#FAFAFA]/80
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
                          mt-2

                          w-1.5
                          h-1.5

                          bg-[#2563EB]
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

                  font-mono
                  text-[#2563EB]

                  font-bold
                  text-xl
                "
              >
                {item.price}
              </div>

              {/* TEXT */}
              <p
                className="
                  mt-5

                  text-xs

                  text-[#0A0A0A]/50
                  dark:text-[#FAFAFA]/50
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

                  rounded-xl

                  bg-[#0A0A0A]
                  dark:bg-[#FAFAFA]

                  text-[#FAFAFA]
                  dark:text-[#0A0A0A]

                  font-semibold

                  hover:bg-[#2563EB]
                  dark:hover:bg-[#2563EB]
                  dark:hover:text-white

                  hover:shadow-[0_0_28px_-6px_rgba(37,99,235,0.6)]

                  transition
                "
              >

                <MessageCircle size={20} />

                Order via WhatsApp

              </a>

            </motion.div>
          ))}

        </div>

      </div>

      <Footer />

    </main>
  );
}
