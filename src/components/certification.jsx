import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import RHCSA from "../images/RHCSA.png";
import RHCE from "../images/RHCE.png";

export default function Certificates() {
  const { theme } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Certificate Data
  const certificates = [
    {
      id: 1,
      title: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      date: "June 2024",
      image: RHCSA, 
    },
    {
      id: 2,
      title: "Red Hat Certified Engineer (RHCE)",
      issuer: "Red Hat",
      date: "October 2024",
      image: RHCE,
    },
  ];

  // Set the first certificate as default when the page loads
  useEffect(() => {
    if (certificates.length > 0) {
      setSelectedCertificate(certificates[0]);
    }
  }, []);

  // Open fullscreen modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="certifications" className={`${theme} py-16`}>
      <h1 className="text-4xl md:text-5xl text-center font-bold pt-14 pb-10">
        Certifications
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center  h-auto p-6 space-y-6 sm:space-y-0 sm:space-x-10">
        
        {/* Left Section - Certificate Cards */}
        <div className="flex flex-col space-y-6 w-full sm:w-64">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className={`p-6 border-2 border-[rgb(255,0,0)] rounded-lg shadow-md text-center certi ${
                selectedCertificate?.id === certificate.id ? "cerclick" : ""
              }`}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCertificate(certificate)}
            >
              <h3 className="text-xl font-semibold">{certificate.title}</h3>
              <p className="text-lg">{certificate.issuer}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Section - Always Show Selected Certificate */}
        {/* Right Section - Always Show Selected Certificate */}
<div className="sm:ml-16 mt-8 sm:mt-0 p-10 pt-16 border-2 border-[rgb(255,0,0)] rounded-lg shadow-lg flex flex-col items-center justify-center sm:h-[650px] sm:w-[700px]">

          {selectedCertificate && (
            <>
              {/* Click to Open Fullscreen */}
              <motion.img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-80% h-70% rounded-md mb-4 border-2 cerfull border-[rgb(255,0,0)] cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onClick={handleOpenModal} // Opens fullscreen modal
              />
              <h2 className="text-2xl font-bold text-center">{selectedCertificate.title}</h2>
              <p className="text-lg">{selectedCertificate.issuer}</p>
              <p className="text-md">{selectedCertificate.date}</p>
            </>
          )}
        </div>
      </div>

      {/* Fullscreen Modal - Open on Right Image Click */}
      {isModalOpen && selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleCloseModal} // Close modal on background click
        >
          <motion.div
            className="p-8 rounded-lg shadow-lg w-[90%] sm:w-[900px] text-center border-2 border-[rgb(255,0,0)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button className="absolute top-5 right-5 text-2xl" onClick={handleCloseModal}>
              ✖
            </button>
            <motion.img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full max-w-[800px] h-auto mx-auto rounded-md mb-4 border-2 border-[rgb(255,0,0)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className="text-3xl font-bold">{selectedCertificate.title}</h2>
            <p className="text-lg">{selectedCertificate.issuer}</p>
            <p className="text-md">{selectedCertificate.date}</p>
            <p className="text-lg mt-4">{selectedCertificate.description}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
