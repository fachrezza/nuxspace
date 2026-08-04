import { Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const links = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nuxspaceid@gmail.com",
    external: false,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/6285213840489?text=Halo%20NuxSpace%2C%20saya%20tertarik%20dengan%20layanan%20Anda",
    external: true,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/nux.space",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer
      className="
        py-10

        border-t
        border-black/10
        dark:border-white/10
      "
    >

      <div className="
        max-w-7xl
        mx-auto

        px-4 sm:px-6

        flex flex-col md:grid md:grid-cols-3
        items-center

        gap-4

        text-center md:text-left
      ">

        {/* LOGO */}
        <h1 className="
          font-display
          text-xl md:text-2xl
          font-bold

          md:justify-self-start
        ">
          <span className="text-[#2563EB]">
            NuX
          </span>

          <span className="
            text-[#0A0A0A]
            dark:text-[#FAFAFA]
          ">
            Space
          </span>
        </h1>

        {/* CONTACT LINKS */}
        <div className="flex items-center gap-3 md:justify-self-center">

          {links.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="
                w-9 h-9

                rounded-xl

                border border-black/10
                dark:border-white/10

                flex items-center justify-center

                text-[#0A0A0A]/50
                dark:text-[#FAFAFA]/50

                hover:text-[#2563EB]
                hover:border-[#2563EB]
                hover:shadow-[0_0_16px_-4px_rgba(37,99,235,0.5)]

                transition
              "
            >
              <Icon size={16} />
            </a>
          ))}

        </div>

        {/* TEXT */}
        <p className="
          font-mono
          text-[#0A0A0A]/50
          dark:text-[#FAFAFA]/50

          text-xs

          md:justify-self-end
        ">
          © 2026 NuX Space. All rights reserved.
        </p>

      </div>

    </footer>
  );
}