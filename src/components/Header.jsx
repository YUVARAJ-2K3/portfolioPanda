import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 bg-white px-6 py-5 border-b-2 border-red-500 ${theme}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Menu Button (Mobile) */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XMarkIcon className="w-10 h-10" /> : <Bars3Icon className="w-10 h-10" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-16 text-3xl font-semibold">
            {["Home","About Me", "Project", "Skills", "Certifications", "Internships", "Contacts"].map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-cyan-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Switcher */}
        <div className="theme-switcher relative flex items-center cursor-pointer">
          <input type="checkbox" id="theme-toggle" onClick={toggleTheme} />
          <label htmlFor="theme-toggle" className="slider" />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full shadow-md  border-b-2 border-red-500">
          <nav>
            <ul className="flex flex-col space-y-5 py-6 text-center text-xl">
              {["Home","About Me", "Project", "Skills", "Certifications", "Internships", "Contacts"].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(" ", "")}`} onClick={() => setMenuOpen(false)} className="block py-2 hover:opacity-75 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
