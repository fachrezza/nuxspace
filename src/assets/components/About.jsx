export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="about"
            className="rounded-3xl"
          />
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            About Us
          </h2>

          <p className="text-gray-400 mt-8 leading-relaxed">
            Nux Space is a creative digital agency focused on Web Development and Graphic Design.
            The name “Nux” stands for “New Experience,” representing our vision to create modern, innovative, and memorable digital experiences.

            
          </p>

          <p className="text-gray-400 mt-5 leading-relaxed">
            We believe great design is more than visuals
            it’s about creating meaningful connections
            between brands and people. Through creativity, strategy, and technology, we help businesses grow in the digital era.
          </p>
        </div>
      </div>
    </section>
  );
}