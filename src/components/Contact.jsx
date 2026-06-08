import {
  Mail,
  Phone,
  Image,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        py-20 md:py-32
        overflow-hidden
      "
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

      <div className="
        max-w-5xl
        mx-auto
        px-4 sm:px-6
        relative z-10
      ">

        {/* TITLE */}
        <div className="text-center">

          <span className="
            text-blue-500
            font-semibold
            tracking-[0.3em]
            uppercase
            text-sm
          ">
            Contact
          </span>

          <h2 className="
            mt-4
            text-3xl sm:text-4xl md:text-5xl
            font-black
            tracking-tight
          ">
            Let’s Build Something
            <span className="
              bg-gradient-to-r
              from-blue-500
              to-indigo-500
              bg-clip-text
              text-transparent
            ">
              {" "}Amazing
            </span>
          </h2>

          <p className="
            text-slate-600
            mt-5
            text-sm md:text-base
            max-w-2xl
            mx-auto
            leading-relaxed
          ">
            Ready to start your next project?
            Contact NuxSpace and let’s create
            a modern digital experience together.
          </p>

        </div>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3

          gap-6 md:gap-8
          mt-12 md:mt-20
        ">

          {/* EMAIL */}
          <div className="
            p-6 md:p-8

            rounded-2xl md:rounded-3xl

            bg-white/80
            backdrop-blur-xl

            border border-slate-200

            shadow-xl
            shadow-slate-200/40

            text-center

            hover:-translate-y-2
            hover:border-blue-400/30
            hover:shadow-2xl
            hover:shadow-blue-100/40

            transition
          ">

            <div className="
              w-16 h-16
              mx-auto

              rounded-2xl

              bg-blue-500/10

              flex items-center justify-center
            ">
              <Mail
                className="text-blue-500"
                size={32}
              />
            </div>

            <h3 className="
              text-xl md:text-2xl
              font-bold
              mt-6
            ">
              Email
            </h3>

            <p className="
              text-slate-600
              mt-4
              text-sm md:text-base
              break-all
            ">
              nuxspaceid@gmail.com
            </p>

          </div>

          {/* WHATSAPP */}
          <div className="
            p-6 md:p-8

            rounded-2xl md:rounded-3xl

            bg-white/80
            backdrop-blur-xl

            border border-slate-200

            shadow-xl
            shadow-slate-200/40

            text-center

            hover:-translate-y-2
            hover:border-blue-400/30
            hover:shadow-2xl
            hover:shadow-blue-100/40

            transition
          ">

            <div className="
              w-16 h-16
              mx-auto

              rounded-2xl

              bg-blue-500/10

              flex items-center justify-center
            ">
              <Phone
                className="text-blue-500"
                size={32}
              />
            </div>

            <h3 className="
              text-xl md:text-2xl
              font-bold
              mt-6
            ">
              WhatsApp
            </h3>

            <p className="
              text-slate-600
              mt-4
              text-sm md:text-base
            ">
              +62 85213840489
            </p>

          </div>

          {/* INSTAGRAM */}
          <div className="
            p-6 md:p-8

            rounded-2xl md:rounded-3xl

            bg-white/80
            backdrop-blur-xl

            border border-slate-200

            shadow-xl
            shadow-slate-200/40

            text-center

            hover:-translate-y-2
            hover:border-blue-400/30
            hover:shadow-2xl
            hover:shadow-blue-100/40

            transition

            sm:col-span-2
            md:col-span-1
          ">

            <div className="
              w-16 h-16
              mx-auto

              rounded-2xl

              bg-blue-500/10

              flex items-center justify-center
            ">
              <Image
                className="text-blue-500"
                size={32}
              />
            </div>

            <h3 className="
              text-xl md:text-2xl
              font-bold
              mt-6
            ">
              Instagram
            </h3>

            <p className="
              text-slate-600
              mt-4
              text-sm md:text-base
            ">
              @nux.space
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}