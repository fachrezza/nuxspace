import { motion } from "framer-motion";

const points = [
  {
    number: "01",
    title: "Fast Response",
    description: "Respon cepat, biasanya dalam hitungan jam.",
  },
  {
    number: "02",
    title: "Direct Communication",
    description: "Ngobrol langsung dengan developer, bukan admin berlapis.",
  },
  {
    number: "03",
    title: "Revisions Included",
    description: "Revisi tersedia sampai hasil sesuai kebutuhanmu.",
  },
  {
    number: "04",
    title: "Free Consultation",
    description: "Konsultasi kebutuhan tanpa biaya sebelum deal.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        py-16 md:py-24

        border-t
        border-black/10
        dark:border-white/10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          px-4 sm:px-6

          relative z-10
        "
      >

        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-4
          "
        >

          {points.map(({ number, title, description }, index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                p-6

                bg-white/40
                dark:bg-white/[0.03]

                backdrop-blur-xl

                border
                border-white/60
                dark:border-white/10

                rounded-2xl

                hover:-translate-y-1
                hover:border-[#2563EB]/40
                hover:shadow-[0_16px_40px_-18px_rgba(37,99,235,0.45)]

                transition-all duration-300
              "
            >

              <span
                className="
                  font-mono
                  text-sm
                  font-semibold

                  text-[#2563EB]
                "
              >
                {number}
              </span>

              <h3
                className="
                  mt-3

                  font-display
                  font-bold
                  text-base md:text-lg

                  text-[#0A0A0A]
                  dark:text-[#FAFAFA]
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-2

                  text-[#0A0A0A]/60
                  dark:text-[#FAFAFA]/60

                  text-sm
                  leading-relaxed
                "
              >
                {description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
