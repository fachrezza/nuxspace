import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        w-10 h-10
        rounded-xl

        border border-black/10
        dark:border-white/10

        flex items-center justify-center

        text-[#0A0A0A]
        dark:text-[#FAFAFA]

        hover:border-[#2563EB]
        hover:text-[#2563EB]
        hover:shadow-[0_0_16px_-4px_rgba(37,99,235,0.5)]

        transition
      "
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}