import React from "react";
import { useTheme } from "./ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="aboutme" className={`about-me ${theme} py-10`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl pt-10 md:text-5xl pt-32 font-bold">
          About <span>Me</span>
        </h1>

        {/* Content Box */}
        <div className="about-content mt-8 mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold">Greeting:</h2>
          <p className="text-lg md:text-2xl text-justify pt-4 leading-relaxed">
            I am a passionate and dedicated computer science student with a
            strong interest in Linux, DevOps, programming, and emerging
            technologies. I enjoy solving complex problems and building
            innovative solutions through code. My areas of interest include
            DevOps, Web Development, and Programming. I am proficient in Python
            and continuously seek opportunities to enhance my technical skills.
            Apart from academics, I actively participate in coding competitions
            and tech-related projects to broaden my experience. I aim to
            leverage my skills to develop impactful software that improves lives
            and drives innovation.
          </p>
        </div>

        {/* Resume Button */}
        <div class="resume-container">
  <a href="https://drive.google.com/file/d/1u5H5f8e6cNbCXwicXit2bL1I_OkAt7Gf/view?usp=sharing" className="resume mt-16" >Resume</a>
</div>

      </div>
    </section>
  );
}
