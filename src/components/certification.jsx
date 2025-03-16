import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [shuffledCertificates, setShuffledCertificates] = useState([]);

  // Certificate Data
  const certificates = [
    {
      id: 1,
      title: "Red Hat Certified Engineer (RHCE)",
      issuer: "Red Hat",
      date: "March 2024",
      image: "https://via.placeholder.com/200", // Replace with actual certificate image
      description: "Advanced skills in Linux automation, security, and networking.",
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "February 2024",
      image: "https://via.placeholder.com/200",
      description: "Expertise in designing scalable and secure cloud solutions.",
    },
    {
      id: 3,
      title: "Docker & Kubernetes Certification",
      issuer: "Udemy",
      date: "January 2024",
      image: "https://via.placeholder.com/200",
      description: "Hands-on experience with container orchestration and microservices.",
    },
  ];

  // Shuffle the certificates when component loads
  useEffect(() => {
    setShuffledCertificates([...certificates].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-screen bg-gray-900 text-white p-6">
      {/* Left Section - Shuffled Certificate Cards */}
      <div className="flex flex-col space-y-4">
        {shuffledCertificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            className="p-4 bg-gray-700 rounded-lg shadow-md w-64 text-center cursor-pointer hover:bg-gray-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCertificate(certificate)}
          >
            <h3 className="text-lg font-semibold">{certificate.title}</h3>
            <p className="text-sm text-gray-300">{certificate.issuer}</p>
          </motion.div>
        ))}
      </div>

      {/* Right Section - Selected Certificate Details */}
      <div className="ml-10 p-6 bg-gray-800 rounded-lg shadow-lg w-[350px] h-[400px] flex flex-col items-center justify-center">
        {selectedCertificate ? (
          <>
            <motion.img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-40 h-40 rounded-md mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className="text-xl font-bold text-blue-400">{selectedCertificate.title}</h2>
            <p className="text-sm text-gray-300">{selectedCertificate.issuer}</p>
            <p className="text-sm text-gray-400">{selectedCertificate.date}</p>
            <p className="text-center text-gray-200 mt-2">{selectedCertificate.description}</p>
          </>
        ) : (
          <p className="text-gray-400 text-center">Click on a certificate to see details</p>
        )}
      </div>
    </div>
  );
}
