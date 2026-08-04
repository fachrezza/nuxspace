import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import catalog from "../data/catalog";
import {
  Code2,
  Palette,
  Smartphone,
  ArrowRight,
  Plus,
} from "lucide-react";

const categoryConfig = {
  website: {
    icon: Code2,
    description:
      "Landing page, wedding invitation & more.",
  },

  uiux: {
    icon: Palette,
    description:
      "Branding, UI design, prototype, and visual identity.",
  },

  mobile: {
    icon: Smartphone,
    description:
      "Android apps, business apps, API integration.",
  },
};

export default function Catalog() {
  return (
    <section
      id="catalog"
      className="
        py-28
        relative
      "
    >

      <div className="
        max-w-7xl
        mx-auto
        px-6
      ">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <span className="
            flex items-center gap-2

            font-mono
            text-xs
            uppercase
            tracking-[0.3em]

            text-[#2563EB]
          ">
            <Plus size={12} strokeWidth={3} />
            Service Catalog
          </span>

          <h2 className="
            mt-4

            font-display
            text-3xl md:text-5xl
            font-bold
            tracking-tight

            text-[#0A0A0A]
            dark:text-[#FAFAFA]
          ">
            Explore Our Service Catalog Below
          </h2>

          <p className="
            mt-5

            text-[#0A0A0A]/60
            dark:text-[#FAFAFA]/60

            max-w-2xl
          ">
            Select a category to see detailed services,
            features, and pricing.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="
          grid lg:grid-cols-3
          gap-6

          mt-16
        ">

          {Object.entries(catalog).map(([key, category], catIndex) => {
            const Icon = categoryConfig[key].icon;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden

                  p-8

                  bg-white/50
                  dark:bg-white/[0.04]

                  backdrop-blur-xl

                  border
                  border-white/60
                  dark:border-white/10

                  rounded-3xl

                  hover:-translate-y-1
                  hover:border-[#2563EB]/40
                  hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.45)]
                  dark:hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.5)]

                  transition-all duration-300
                "
              >

                {/* GLOW */}
                <div
                  className="
                    absolute -top-16 -right-16

                    w-40 h-40

                    bg-[#2563EB]/0
                    group-hover:bg-[#2563EB]/20

                    rounded-full
                    blur-3xl

                    transition-colors duration-500

                    pointer-events-none
                  "
                />

                {/* TOP ACCENT */}
                <span
                  className="
                    absolute top-0 left-0

                    h-[3px]
                    w-0

                    bg-[#2563EB]

                    group-hover:w-full

                    transition-all duration-300
                  "
                />

                {/* TOP */}
                <div className="
                  flex items-center
                  gap-4
                ">

                  <Icon size={26} className="text-[#2563EB]" />

                  <div>

                    <span className="
                      font-mono
                      text-[10px]

                      text-[#2563EB]

                      tracking-widest
                      uppercase
                    ">
                      Category
                    </span>

                    <h3 className="
                      font-display
                      text-xl
                      font-bold

                      text-[#0A0A0A]
                      dark:text-[#FAFAFA]
                    ">
                      {category.title}
                    </h3>

                  </div>

                </div>

                <div className="
                  h-px

                  bg-white/60
                  dark:bg-white/10

                  my-6
                " />

                {/* DESCRIPTION */}
                <p className="
                  text-[#0A0A0A]/60
                  dark:text-[#FAFAFA]/60

                  text-sm
                  leading-relaxed
                ">
                  {categoryConfig[key].description}
                </p>

                {/* PACKAGE LIST */}
                <div className="
                  mt-8
                  space-y-3
                ">

                  {category.items.slice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      className="
                        py-3

                        border-t
                        border-white/60
                        dark:border-white/10

                        first:border-t-0
                      "
                    >

                      <div className="
                        flex items-start justify-between
                        gap-4
                      ">

                        <div>

                          <h4 className="
                            font-semibold
                            text-sm

                            text-[#0A0A0A]
                            dark:text-[#FAFAFA]
                          ">
                            {item.name}
                          </h4>

                          <p className="
                            text-xs

                            text-[#0A0A0A]/50
                            dark:text-[#FAFAFA]/50

                            mt-1

                            line-clamp-2
                          ">
                            {item.description}
                          </p>

                        </div>

                      </div>

                      <div className="
                        mt-2

                        flex items-center justify-between
                      ">

                        <span className="
                          font-mono
                          text-[#2563EB]
                          font-semibold
                          text-xs
                        ">
                          {item.price}
                        </span>

                      </div>

                    </div>
                  ))}

                </div>

                {/* BUTTON */}
                <Link
                  to={`/catalog/${key}`}
                  className="
                    mt-8

                    inline-flex
                    items-center justify-center
                    gap-2

                    w-full
                    py-3

                    rounded-xl

                    bg-[#0A0A0A]
                    dark:bg-[#FAFAFA]

                    text-[#FAFAFA]
                    dark:text-[#0A0A0A]

                    font-semibold
                    text-sm

                    group-hover:bg-[#2563EB]
                    dark:group-hover:bg-[#2563EB]
                    dark:group-hover:text-white

                    group-hover:shadow-[0_0_24px_-4px_rgba(37,99,235,0.6)]

                    transition
                  "
                >

                  See More

                  <ArrowRight size={16} />

                </Link>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
