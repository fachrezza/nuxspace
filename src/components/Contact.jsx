import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: "nuxspaceid@gmail.com",
    href: "mailto:nuxspaceid@gmail.com",
    external: false,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+62 85213840489",
    href: "https://wa.me/6285213840489?text=Halo%20NuxSpace%2C%20saya%20tertarik%20dengan%20layanan%20Anda",
    external: true,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@nux.space",
    href: "https://www.instagram.com/nux.space",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-20 md:py-32

        border-t
        border-black/10
        dark:border-white/10

        transition-colors duration-300
      "
    >

      <div className="
        max-w-5xl
        mx-auto

        px-4 sm:px-6
      ">

        {/* TITLE */}
        <h2
          className="
            font-display
            text-3xl
            sm:text-4xl
            md:text-5xl

            font-bold
            text-center

            text-[#0A0A0A]
            dark:text-[#FAFAFA]
          "
        >
          Contact Us
        </h2>

        <p
          className="
            text-center

            text-[#0A0A0A]/60
            dark:text-[#FAFAFA]/60

            mt-4 md:mt-5

            text-sm md:text-base
          "
        >
          Let's build something amazing together.
        </p>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-4

            mt-12 md:mt-20
          "
        >

          {cards.map(({ icon: Icon, label, value, href, external }, index) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="
                group

                p-6 md:p-8

                bg-white/40
                dark:bg-white/[0.03]

                backdrop-blur-xl

                border
                border-white/60
                dark:border-white/10

                rounded-3xl

                text-center

                hover:-translate-y-1
                hover:border-[#2563EB]/40
                hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.45)]

                transition-all duration-300
              "
            >

              <Icon
                className="
                  mx-auto
                  text-[#2563EB]

                  transition-transform duration-300

                  group-hover:scale-110
                "
                size={32}
              />

              <h3
                className="
                  font-display
                  text-xl md:text-2xl
                  font-bold

                  mt-5 md:mt-6

                  text-[#0A0A0A]
                  dark:text-[#FAFAFA]
                "
              >
                {label}
              </h3>

              <p
                className="
                  text-[#0A0A0A]/60
                  dark:text-[#FAFAFA]/60

                  mt-3 md:mt-4

                  text-sm md:text-base

                  break-all
                "
              >
                {value}
              </p>

            </motion.a>
          ))}

        </div>

      </div>

    </section>
  );
}
