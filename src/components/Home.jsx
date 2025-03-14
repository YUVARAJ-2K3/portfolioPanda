import React from "react";
import { useTheme } from "./ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="home" className={`flex pl-5 justify-center items-center ${theme}`}>
      <div className="homies ">
       
        <h3 className="flex pt-32 pb-20 text-6xl font-bold justify-center">Welcome to My Page ..!</h3>
        
        
        <h1 className="flex pb-[7vh] text-4xl pr-6 justify-center">
          I'm Yuvaraj S 
        </h1>

        <h4 className="text-Animation flex pb-[7vh] text-4xl  justify-center">
          I'm a &nbsp;<span />
        </h4>
        
        

        <div className="sub">
          <p className="text-justify justify-center text-3xl pl-32 pr-32">
            Self-learning Enthusiast | Hardworking | Motivated Individual | Adaptive Problem Solver | Collaborative Team Player </p>
        </div>
        <br />
      </div>
    </section>
  );
}
