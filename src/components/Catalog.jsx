import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import catalog from "../data/catalog";
import { Code2, Palette, Smartphone } from "lucide-react";

export default function Catalog() {
  return (
    <section id="catalog" className="py-28 relative">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center">
          <span className="text-blue-500 tracking-[0.3em] uppercase font-semibold">
            Service Catalog
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Explore Our Service Catalog Below
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Select a category to see detailed services, features, and pricing.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* WEBSITE */}
          <div className="
            group relative p-8 rounded-[28px]
            bg-gradient-to-b from-white/10 to-white/5
            border border-white/10
            backdrop-blur-xl
            hover:border-blue-500/40
            hover:-translate-y-2
            transition
          ">

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                <Code2 size={28} />
              </div>

              <div>
                <span className="text-xs text-blue-400 tracking-widest uppercase">
                  Category
                </span>
                <h3 className="text-xl font-bold">
                  Website Development
                </h3>
              </div>
            </div>

            <div className="h-px bg-white/10 my-6"></div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Landing page, wedding invitation & more.
            </p>

            {/* CTA BUTTON */}
            <Link
              to="/catalog/website"
              className="
                mt-8 inline-flex items-center justify-center
                w-full py-3 rounded-xl
                bg-blue-500
                text-white font-semibold
                hover:bg-blue-600
                transition
              "
            >
              Explore Package
            </Link>

          </div>

          {/* UI/UX */}
          <div className="
            group relative p-8 rounded-[28px]
            bg-gradient-to-b from-white/10 to-white/5
            border border-white/10
            backdrop-blur-xl
            hover:border-blue-500/40
            hover:-translate-y-2
            transition
          ">

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                <Palette size={28} />
              </div>

              <div>
                <span className="text-xs text-blue-400 tracking-widest uppercase">
                  Category
                </span>
                <h3 className="text-xl font-bold">
                  UI/UX & Graphic Design
                </h3>
              </div>
            </div>

            <div className="h-px bg-white/10 my-6"></div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Branding, UI design, prototype, and visual identity.
            </p>

            <Link
              to="/catalog/uiux"
              className="
                mt-8 inline-flex items-center justify-center
                w-full py-3 rounded-xl
                bg-blue-500
                text-white font-semibold
                hover:bg-blue-600
                transition
              "
            >
              Explore Package
            </Link>

          </div>

          {/* MOBILE */}
          <div className="
            group relative p-8 rounded-[28px]
            bg-gradient-to-b from-white/10 to-white/5
            border border-white/10
            backdrop-blur-xl
            hover:border-blue-500/40
            hover:-translate-y-2
            transition
          ">

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                <Smartphone size={28} />
              </div>

              <div>
                <span className="text-xs text-blue-400 tracking-widest uppercase">
                  Category
                </span>
                <h3 className="text-xl font-bold">
                  Mobile App
                </h3>
              </div>
            </div>

            <div className="h-px bg-white/10 my-6"></div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Android apps, business apps, API integration.
            </p>

            <Link
              to="/catalog/mobile"
              className="
                mt-8 inline-flex items-center justify-center
                w-full py-3 rounded-xl
                bg-blue-500
                text-white font-semibold
                hover:bg-blue-600
                transition
              "
            >
              Explore Package
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}