import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6285213840489?text=Halo%20NuxSpace%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat via WhatsApp"
      className="
        fixed
        bottom-5 right-5
        md:bottom-8 md:right-8

        z-40

        w-14 h-14

        rounded-full

        bg-[#25D366]

        flex items-center justify-center

        shadow-[0_10px_40px_-8px_rgba(37,211,102,0.7)]

        hover:scale-105
        hover:shadow-[0_10px_50px_-6px_rgba(37,211,102,0.9)]

        transition

        motion-reduce:transition-none
      "
    >

      {/* PULSE */}
      <span
        className="
          absolute inset-0

          rounded-full

          border-2 border-[#25D366]

          animate-ping

          opacity-60

          motion-reduce:hidden
        "
      />

      <FaWhatsapp
        className="relative text-white"
        size={28}
      />

    </a>
  );
}
