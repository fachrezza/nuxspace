import { Mail, Phone, Image } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-20 md:py-32

        bg-slate-100/70
        dark:bg-white/5

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
            text-3xl
            sm:text-4xl
            md:text-5xl

            font-bold
            text-center

            text-slate-900
            dark:text-white
          "
        >
          Contact Us
        </h2>

        <p
          className="
            text-center

            text-slate-600
            dark:text-slate-400

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

            gap-6 md:gap-8

            mt-12 md:mt-20
          "
        >

          {/* EMAIL */}
          <div
            className="
              p-6 md:p-8

              rounded-2xl md:rounded-3xl

              bg-white/80
              dark:bg-[#111827]

              backdrop-blur-xl

              border border-slate-200
              dark:border-white/10

              shadow-xl
              shadow-slate-200/40
              dark:shadow-black/20

              text-center

              hover:border-blue-500/30
              hover:-translate-y-1

              transition
            "
          >

            <Mail
              className="
                mx-auto
                text-blue-500
              "
              size={36}
            />

            <h3
              className="
                text-xl md:text-2xl
                font-semibold

                mt-5 md:mt-6

                text-slate-900
                dark:text-white
              "
            >
              Email
            </h3>

            <p
              className="
                text-slate-600
                dark:text-slate-400

                mt-3 md:mt-4

                text-sm md:text-base

                break-all
              "
            >
              nuxspaceid@gmail.com
            </p>

          </div>

          {/* WHATSAPP */}
          <div
            className="
              p-6 md:p-8

              rounded-2xl md:rounded-3xl

              bg-white/80
              dark:bg-[#111827]

              backdrop-blur-xl

              border border-slate-200
              dark:border-white/10

              shadow-xl
              shadow-slate-200/40
              dark:shadow-black/20

              text-center

              hover:border-blue-500/30
              hover:-translate-y-1

              transition
            "
          >

            <Phone
              className="
                mx-auto
                text-blue-500
              "
              size={36}
            />

            <h3
              className="
                text-xl md:text-2xl
                font-semibold

                mt-5 md:mt-6

                text-slate-900
                dark:text-white
              "
            >
              WhatsApp
            </h3>

            <p
              className="
                text-slate-600
                dark:text-slate-400

                mt-3 md:mt-4

                text-sm md:text-base
              "
            >
              +62 85213840489
            </p>

          </div>

          {/* INSTAGRAM */}
          <div
            className="
              p-6 md:p-8

              rounded-2xl md:rounded-3xl

              bg-white/80
              dark:bg-[#111827]

              backdrop-blur-xl

              border border-slate-200
              dark:border-white/10

              shadow-xl
              shadow-slate-200/40
              dark:shadow-black/20

              text-center

              hover:border-blue-500/30
              hover:-translate-y-1

              transition

              sm:col-span-2
              md:col-span-1
            "
          >

            <Image
              className="
                mx-auto
                text-blue-500
              "
              size={36}
            />

            <h3
              className="
                text-xl md:text-2xl
                font-semibold

                mt-5 md:mt-6

                text-slate-900
                dark:text-white
              "
            >
              Instagram
            </h3>

            <p
              className="
                text-slate-600
                dark:text-slate-400

                mt-3 md:mt-4

                text-sm md:text-base
              "
            >
              @nux.space
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}