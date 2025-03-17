import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useTheme } from "./ThemeContext";

const internships = [
  {
    id: 1,
    company: "Wheels India Limited",
    role: "Internship Trainee",
    duration: "Jan 2021 - May 2021",
    description: "Researched and developed new technologies in R&D.",
  },
  {
    id: 2,
    company: "Breaks India Limited",
    role: "Internship Trainee",
    duration: "June 2022 - Dec 2022",
    description: "Worked on Quality Assurance and SAP Materials Management (SAP MM).",
  },
  {
    id: 3,
    company: "VECTRA TECHNOSOFT PRIVATE LIMITED",
    role: "Linux System Administrator",
    duration: "May 2024 - May 2024",
    description: "Managed system administration tasks.",
  },
  {
    id: 4,
    company: "VECTRA TECHNOSOFT PRIVATE LIMITED",
    role: "Technical Support Engineer",
    duration: "Jan 2025 - Feb 2025",
    description: "Handled Ansible, Automation, and system monitoring.",
  },
  {
    id: 5,
    company: "InternPe",
    role: "Intern",
    duration: "Jan 2025 - Feb 2025",
    description: "Worked on UI/UX and User Interface Design in a hybrid model.",
  },
];

export default function InternshipSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  const nextSlide = () => {
    if (currentIndex < internships.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section id="internships" className={`flex flex-col items-center justify-center min-h-screen w-full py-12 relative ${theme}`}>
      <h1 className="text-4xl pt-10 md:text-5xl pt-26 pb-12 font-bold">
          Internships
        </h1>

      <div className="relative flex items-center justify-center w-full max-w-7xl px-4 sm:px-8 overflow-hidden">
        <div className="flex justify-center items-center space-x-2 sm:space-x-8">
          {internships.map((internship, index) => {
            const isActive = index === currentIndex;
            const isLeft = index === currentIndex - 1;
            const isRight = index === currentIndex + 1;

            return (
              <motion.div
                key={internship.id}
                className={`relative p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-500
                  ${
                    isActive
                      ? "w-[320px] sm:w-[450px] h-[400px] sm:h-[520px] z-20 opacity-100 border-4 border-[rgb(255,0,0)] text-center flex flex-col justify-center items-center"
                      : isLeft || isRight
                      ? "hidden sm:block w-[280px] sm:w-[340px] h-[350px] sm:h-[420px] opacity-80 border-4 border-[rgb(255,0,0)] text-left"
                      : "hidden"
                  }
                `}
                initial={{ opacity: isActive ? 1 : 0.6 }}
                animate={{ opacity: isActive ? 1 : 0.6 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-extrabold pb-3 text-center">{internship.company}</h2>
                <p className="text-lg font-semibold text-center">{internship.role}</p>
                <p className="text-md text-center">{internship.duration}</p>
                <p className="mt-4 text-md text-center">{internship.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons with Mobile Adjustments */}
      <button
        onClick={prevSlide}
        className={`absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-4 sm:p-6 rounded-full hover:bg-opacity-80 transition ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === 0}
      >
        <ChevronLeftIcon className="w-8 sm:w-12 h-8 sm:h-12 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-4 sm:p-6 rounded-full hover:bg-opacity-80 transition ${
          currentIndex === internships.length - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === internships.length - 1}
      >
        <ChevronRightIcon className="w-8 sm:w-12 h-8 sm:h-12 text-white" />
      </button>

      {/* Start & End Indicators */}
      <div className="absolute bottom-6 flex space-x-2">
        {internships.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[rgb(255,0,0)]" : "bg-gray-600"}`}></div>
        ))}
      </div>
    </section>
  );
}
