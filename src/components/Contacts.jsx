import React, { useState } from "react";
import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { useTheme } from "./ThemeContext";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const {theme} =useTheme();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // ✅ Use the correct Google Form URL (Must end with `/formResponse`)
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScd4a2cMmq9M7zpK_XwiEW6bixLqsjDjQPzjoWU6P_CD1HQFg/formResponse";
    
    const formBody = new URLSearchParams();
    formBody.append("entry.1270603981", formData.name); 
    formBody.append("entry.486891414", formData.email);     
    formBody.append("entry.1000697639", formData.message);  
  
    fetch(formUrl, {
      method: "POST",
      body: formBody,
      mode: "no-cors", // Google Forms doesn't return a response
    })
    .then(() => {
      alert("✅ Thank you for contacting me! I will reply as soon as possible.");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("❌ Error submitting form:", error);
    });
  };
  

  return (
    <section id="contactus" className={`${theme}`}>
      <h1 className="text-4xl pt-10 md:text-5xl text-center pt-32 font-bold pb-5">
          Contact Us
        </h1>
    <div className="min-h-screen flex justify-center  ">
      <div className="w-fit h-fit max-w-lg p-8 rounded-lg shadow-lg border-2 border-[rgb(255,0,0)] bg-opacity-10 backdrop-blur-lg">

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6  mb-6">
          <a href="https://www.linkedin.com/in/yuvaraj-s-542053256/" className="hover:text-blue-600 transition">
            <SiLinkedin size={35} />
          </a>
          <a href="https://github.com/YUVARAJ-2K3" className="hover:text-gray-600 transition">
            <FaGithubSquare size={40} />
          </a>
          <a href="mailto:sureshyuvaraj2003@gmail.com" className="hover:text-red-600 transition">
            <ImMail size={36} />
          </a>
          <a href="https://www.instagram.com/_yuvaraj_2003_/" className="hover:text-pink-600 transition">
            <FaInstagramSquare size={40} />
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 pb-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-full bg-black bg-opacity-20  placeholder-gray-300 border border-[rgb(255,0,0)] outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-full bg-black bg-opacity-20  placeholder-gray-300 border border-[rgb(255,0,0)] outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-2xl bg-black bg-opacity-20  placeholder-gray-300 border border-[rgb(255,0,0)] outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            className="w-full  py-3 rounded-full border  border-[rgb(255,0,0)] hover:bg-[rgb(255,0,0)] transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form >
      </div>
    </div>
    </section>
  );
}
