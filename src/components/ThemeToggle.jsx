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
      className="
        w-11 h-11
        rounded-xl

        bg-slate-100
        dark:bg-white/10

        border border-slate-200
        dark:border-white/10

        flex items-center justify-center

        text-slate-700
        dark:text-white

        hover:scale-105
        transition
      "
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}