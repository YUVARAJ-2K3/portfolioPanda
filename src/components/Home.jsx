import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import Devops1 from "../images/Devops1.png";
import programmer from "../images/programmer.png";
import Web1 from "../images/web1.png";
import Tech from "../images/Tech.png"

export default function Home() {
  const { theme } = useTheme();

  const titles = ["DevOpster", "Web Developer", "Programmer", "Tech Enthusiast"];
  const images = [
    Devops1,
    Web1,
    programmer,
    Tech,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="Home" className={`${theme} py-16`}>
      <div className="h-[90vh] flex flex-col sm:flex-row justify-center items-center px-8 sm:px-16 space-y-8 sm:space-y-0">
        
        {/* Left Side - Welcome Text */}
        <div className="text-center sm:text-left">
          <p className="text-3xl sm:text-5xl font-semibold pr-20 text-white">Welcome to my page!</p>
          <p className="text-4xl sm:text-7xl font-extrabold pr-20 text-red-400 mt-4">I am YUVARAJ S</p>
        </div>

        {/* Right Side - Image with Animated Text */}
        <div className="relative p-6 rounded-lg shadow-xl sm:w-[600px] sm:h-[350px] flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt="Coding"
            className="w-full h-full object-cover rounded-md opacity-70 transition-all duration-700 ease-in-out"
          />
          <p className="absolute text-2xl sm:text-5xl font-bold italic bg-black bg-opacity-70 px-6 py-3 text-white rounded-lg">
            I am <span className="text-red-400">{titles[currentIndex]}</span>
          </p>
        </div>

      </div>
    </section>
  );
}
