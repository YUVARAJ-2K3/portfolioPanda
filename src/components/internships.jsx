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
      <h1 className="text-5xl md:text-6xl text-center font-bold pb-32">Internships</h1>

      <div className="relative flex items-center justify-center w-full max-w-7xl overflow-hidden">
        <div className="flex justify-center items-center space-x-8">
          {internships.map((internship, index) => {
            const isActive = index === currentIndex;
            const isLeft = index === currentIndex - 1;
            const isRight = index === currentIndex + 1;

            return (
              <motion.div
                key={internship.id}
                className={`relative p-8 sm:p-10 rounded-xl shadow-lg transition-all duration-500
                  ${
                    isActive
                      ? "w-[450px] h-[520px] z-20 opacity-100 border-4 border-[rgba(255,0,0,0.9)] text-center flex flex-col justify-center items-center"
                      : isLeft || isRight
                      ? "w-[340px] h-[420px] opacity-80 border-4 border-[rgb(255,0,0)] text-left"
                      : "hidden"
                  }
                `}
                initial={{ opacity: isActive ? 1 : 0.6 }}
                animate={{ opacity: isActive ? 1 : 0.6 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className={`text-3xl font-extrabold pb-3 ${isActive ? "text-center" : "text-left"}`}>
                  {internship.company}
                </h2>
                <p className={`text-lg font-semibold ${isActive ? "text-center" : "text-left"}`}>
                  {internship.role}
                </p>
                <p className={`text-md ${isActive ? "text-center" : "text-left"}`}>
                  {internship.duration}
                </p>
                <p className={`mt-4 text-md ${isActive ? "text-center" : "text-left"}`}>
                  {internship.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons with Start & End Handling */}
      <button
        onClick={prevSlide}
        className={`absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-6 sm:p-8 rounded-full hover:bg-opacity-80 transition ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === 0}
      >
        <ChevronLeftIcon className="w-12 sm:w-16 h-12 sm:h-16 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-6 sm:p-8 rounded-full hover:bg-opacity-80 transition ${
          currentIndex === internships.length - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === internships.length - 1}
      >
        <ChevronRightIcon className="w-12 sm:w-16 h-12 sm:h-16 text-white" />
      </button>

      {/* Start & End Indicators */}
      <div className="absolute bottom-6 flex space-x-2">
        {internships.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-red-500" : "bg-gray-600"}`}></div>
        ))}
      </div>
    </section>
  );
}
