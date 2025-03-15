import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import Devops1 from "../images/Devops1.png";
import Programmer from "../images/programmer.png";
import Web1 from "../images/web1.png";
import Tech from "../images/Tech.png";

export default function Home() {
  const { theme } = useTheme();

  const titles = ["DevOpster", "Web Developer", "Programmer", "Tech Enthusiast"];
  const images = [Devops1, Web1, Programmer, Tech];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className={`${theme} py-12 sm:py-16`}>
      <div className="h-[90vh] flex flex-col sm:flex-row justify-center items-center px-6 sm:px-16 space-y-10 sm:space-y-0 sm:space-x-10">
        
        {/* Left Side - Welcome Text */}
        <div className="text-center sm:text-left">
          <p className="text-3xl sm:text-6xl font-semibold  leading-tight">
            Welcome to my page!
          </p>
          <p className="text-4xl sm:text-7xl font-extrabold text-red-400 mt-4">
            I am YUVARAJ S
          </p>
        </div>

        {/* Right Side - Image with Animated Text */}
        <div className="relative p-4 sm:p-6 rounded-lg shadow-xl w-[90%] sm:w-[600px] h-[300px] sm:h-[350px] flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt="Profile"
            className="w-full h-full object-cover rounded-md opacity-80 transition-opacity duration-1000 ease-in-out"
          />
          <p className="absolute text-lg sm:text-4xl font-bold italic bg-black bg-opacity-75 px-6 py-2 sm:py-3 text-white rounded-lg shadow-md">
            I am <span className="text-red-400">{titles[currentIndex]}</span>
          </p>
        </div>

      </div>
    </section>
  );
}
