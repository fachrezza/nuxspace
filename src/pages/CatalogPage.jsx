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
      <div className="text-white p-20">
        Category not found
      </div>
    );
  }

  return (
    <main className="bg-[#060816] text-white min-h-screen py-32">

      {/* NAVBAR */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-5xl font-black">
          {data.title}
        </h1>

        <p className="mt-6 text-slate-400 max-w-2xl">
          Choose the best service for your needs with transparent pricing and full feature list.
        </p>

        {/* ITEMS */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {data.items.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >

              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="mt-4 text-slate-400">
                {item.description}
              </p>

              <div className="mt-6">
                <p className="text-blue-400 font-semibold">
                  What you get:
                </p>

                <ul className="mt-3 space-y-2 text-slate-300 list-disc list-inside">
                  {item.includes.map((inc, i) => (
                    <li key={i}>{inc}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 text-blue-500 font-bold text-xl">
                {item.price}
              </div>
                  <p className="mt-6 text-xs text-slate-400">
                Interested? Contact us directly on WhatsApp
                </p>
                <a
                href={`https://wa.me/6285213840489?text=Halo%20saya%20ingin%20order%20${encodeURIComponent(item.name)}`}
                target="_blank"
                className="
                    mt-6 w-full
                    inline-flex items-center justify-center gap-3

                    px-6 py-4
                    rounded-2xl

                    bg-gradient-to-r from-blue-500 to-indigo-500
                    text-white font-semibold

                    hover:scale-[1.03]
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

    </main>
  );
}