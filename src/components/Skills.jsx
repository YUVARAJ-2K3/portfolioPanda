import React from "react";
import { useTheme } from "./ThemeContext";

const skills = [
  { title: "DevOps & System Administration", details: ["Linux", "RHEL", "Ubuntu", "Jenkins","Docker", "Slack", "Ansible", "Networking"] },
  { title: "Monitoring & Logging", details: ["Prometheus", "Grafana", "ELK Stack"] },
  { title: "Programming & Development", details: ["Python", "C"] },
  { title: "Cloud Computing & Infrastructure", details: ["AWS", "EC2", "S3", "AWS IAM"] },
  { title: "Web Development", details: ["HTML", "CSS", "JavaScript", "ReactJS", "Figma"] },
  { title: "Engineering & CAD Software", details: ["AutoCAD", "SolidWorks", "CATIA", "PTC Creo"] },
];

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className={`skills-section ${theme} py-8`}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold pt-8 pb-8 mb-8">
          Skills
        </h1>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {skills.map((skill, index) => (
            <div key={index} className="flip-card w-full h-64">
              <div className="flip-card-inner">
  
                <div className="flip-card-front  p-6 rounded-lg shadow-lg flex items-center justify-center">
                  <h2 className="text-2xl font-semibold">
                    {skill.title}
                  </h2>
                </div>

                <div className="flip-card-back  p-6 rounded-lg shadow-lg flex items-center justify-center">
                  <ul className="text-left ">
                    {skill.details.map((detail, i) => (
                      <li key={i} className="text-2xl">• {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}