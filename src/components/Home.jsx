import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  const titles = ["DevOpster", "Web Developer", "Programmer", "Tech Enthusiast", "Quick Learner"];
  const images = [
    "https://source.unsplash.com/500x300/?coding,laptop",
    "https://source.unsplash.com/500x300/?technology,computer",
    "https://source.unsplash.com/500x300/?developer,code",
    "https://source.unsplash.com/500x300/?server,cloud",
    "https://source.unsplash.com/500x300/?software,engineer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="Home" className={`${theme}`}>
      <div className="h-[80vh] flex flex-col justify-center items-center px-4 sm:px-8">
        {/* Main Container */}
        <div className="max-w-5xl w-full flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          
          {/* Left Side - Welcome Text */}
          <div className="text-center sm:text-left text-lg sm:text-4xl">
            <p className="text-sm sm:text-4xl">Welcome to my page!</p>
            <p className="text-xl sm:text-5xl font-bold text-red-400">I am YUVARAJ S</p>
          </div>

          {/* Right Side - Image with Animated Text */}
          <div className="relative p-4 rounded-lg shadow-lg w-72 h-40 sm:w-96 sm:h-48 flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt="Coding"
              className="w-full h-full object-cover rounded-md opacity-40 transition-all duration-500 ease-in-out"
            />
            <p className="absolute text-sm sm:text-5xl font-semibold italic bg-opacity-75">
              I am <span className="text-red-400">{titles[currentIndex]}</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
