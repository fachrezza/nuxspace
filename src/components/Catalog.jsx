import { Link } from "react-router-dom";
import catalog from "../data/catalog";
import {
  Code2,
  Palette,
  Smartphone,
  ArrowRight,
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
      className="py-28 relative overflow-hidden"
    >

      {/* GLOW */}
      <div className="
        absolute top-0 left-0
        w-[300px] h-[300px]
        bg-blue-400/10
        blur-3xl
        rounded-full
      " />

      <div className="
        absolute bottom-0 right-0
        w-[400px] h-[400px]
        bg-indigo-400/10
        blur-3xl
        rounded-full
      " />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center">

          <span className="
            text-blue-500
            tracking-[0.3em]
            uppercase
            font-semibold
          ">
            Service Catalog
          </span>

          <h2 className="
            mt-5
            text-4xl md:text-5xl
            font-black
            tracking-tight
          ">
            Explore Our Service Catalog Below
          </h2>

          <p className="
            mt-6
            text-slate-600
            max-w-2xl
            mx-auto
            leading-relaxed
          ">
            Select a category to see detailed services,
            features, and pricing.
          </p>

        </div>

        {/* GRID */}
        <div className="
          grid lg:grid-cols-3
          gap-8
          mt-20
        ">

          {Object.entries(catalog).map(([key, category]) => {
            const Icon = categoryConfig[key].icon;

            return (
              <div
                key={key}
                className="
                  group
                  relative

                  p-8
                  rounded-[28px]

                  bg-white/80
                  backdrop-blur-xl

                  border border-slate-200

                  shadow-xl
                  shadow-slate-200/40

                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:shadow-blue-100/40
                  hover:border-blue-400/30

                  transition duration-300
                "
              >

                {/* TOP */}
                <div className="flex items-center gap-4">

                  <div className="
                    p-3
                    rounded-xl

                    bg-blue-500/10
                    text-blue-500
                  ">
                    <Icon size={28} />
                  </div>

                  <div>

                    <span className="
                      text-xs
                      text-blue-500
                      tracking-widest
                      uppercase
                    ">
                      Category
                    </span>

                    <h3 className="
                      text-xl
                      font-bold
                      text-slate-900
                    ">
                      {category.title}
                    </h3>

                  </div>

                </div>

                <div className="
                  h-px
                  bg-slate-200
                  my-6
                " />

                {/* DESCRIPTION */}
                <p className="
                  text-slate-600
                  text-sm
                  leading-relaxed
                ">
                  {categoryConfig[key].description}
                </p>

                {/* PACKAGE LIST */}
                <div className="mt-8 space-y-4">

                  {category.items.slice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      className="
                        p-4
                        rounded-2xl

                        bg-slate-50

                        border border-slate-200

                        hover:border-blue-300/40
                        hover:bg-white

                        transition
                      "
                    >

                      <div className="
                        flex items-start
                        justify-between
                        gap-4
                      ">

                        <div>

                          <h4 className="
                            font-semibold
                            text-slate-900
                          ">
                            {item.name}
                          </h4>

                          <p className="
                            text-sm
                            text-slate-600
                            mt-1
                            line-clamp-2
                          ">
                            {item.description}
                          </p>

                        </div>

                      </div>

                      <div className="
                        mt-4
                        flex items-center
                        justify-between
                      ">

                        <span className="
                          text-blue-500
                          font-semibold
                          text-sm
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
                    items-center
                    justify-center
                    gap-2

                    w-full
                    py-3

                    rounded-xl

                    bg-gradient-to-r
                    from-blue-500
                    to-indigo-500

                    text-white
                    font-semibold

                    hover:scale-[1.02]
                    hover:shadow-xl
                    hover:shadow-blue-300/40

                    transition
                  "
                >
                  See More
                  <ArrowRight size={18} />
                </Link>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}