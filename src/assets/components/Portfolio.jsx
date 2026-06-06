const projects = [
  {
    title: "Restaurant Website",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    title: "Wedding Invitation",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  },
  {
    title: "Trading Landing Page",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden group border border-white/10"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[300px] w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 bg-[#0b0f19]">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}