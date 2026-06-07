export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">
          NuX<span className="text-blue-500">Space</span>
        </h1>

        <p className="text-gray-400 text-sm">
          © 2026 NuX Space. All rights reserved.
        </p>
      </div>
    </footer>
  );
}