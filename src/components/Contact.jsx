import {
  Mail,
  Phone,
  Image,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Contact Us
        </h2>

        <p className="text-center text-gray-400 mt-5">
          Let's build something amazing together.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-8 rounded-3xl bg-[#111827] border border-white/10 text-center">
            <Mail className="mx-auto text-blue-500" size={40} />

            <h3 className="text-2xl font-semibold mt-6">
              Email
            </h3>

            <p className="text-gray-400 mt-4">
              nuxspaceid@gmail.com
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#111827] border border-white/10 text-center">
            <Phone className="mx-auto text-blue-500" size={40} />

            <h3 className="text-2xl font-semibold mt-6">
              WhatsApp
            </h3>

            <p className="text-gray-400 mt-4">
              +62 85213840489
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#111827] border border-white/10 text-center">
            <Image
              className="mx-auto text-blue-500"
              size={40}
            />

            <h3 className="text-2xl font-semibold mt-6">
              Instagram
            </h3>

            <p className="text-gray-400 mt-4">
              @nux.space
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}