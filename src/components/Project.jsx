import React from "react";
import { useTheme } from "./ThemeContext";

export default function Project() {
  const { theme } = useTheme();

  return (
    <section id="project" className={`flex px-5 py-6 ${theme}`}>
      <div className="project-container">
        <div className="about-title pt-8 pb-8">
          <h1>Project</h1>
        </div>
        <br />
        <div className="project-grid">
          <a
            href="https://drive.google.com/file/d/18L1Z8bEyy_nmqEvI97QG-8CXLYCrJc42/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            DESIGN AND FABRICATION OF FIRE SAFETY SYSTEM FOR CRACKERS FACTORY
          </a>
          <a
            href="https://drive.google.com/file/d/1htxeJ41mNpj8TN5LSU1dl94nSDWuvg4R/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            WEB APPLICATION DEPLOYMENT IN LINUX USING TOMCAT
          </a>
          <a
            href="https://drive.google.com/file/d/1RhJ1KR-6t5DzyzG1Cyuin8PsZ-EnwZW-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            ULTRASOUND NERVE SEGMENTATION USING AIML
          </a>
          <a
            href="https://www.linkedin.com/posts/yuvaraj-s-542053256_elkstack-rhel-linuxmonitoring-activity-7297294677714554880-5RSH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8CzEIBE8Z8pNSWOJohRYteTW4hAVHJEE0"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card flex text-justify"
          >
            ELK STACK LOGGING & VISUALIZATION IN RHEL 9
          </a>
          <a
            href="https://www.linkedin.com/posts/yuvaraj-s-542053256_jenkins-slack-devops-activity-7294044612061474816-m8YR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8CzEIBE8Z8pNSWOJohRYteTW4hAVHJEE0"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card flex text-justify"
          >
            END-TO-END JENKINS & SLACK INTEGRATION
          </a>
          <a
            href="https://www.linkedin.com/posts/yuvaraj-s-542053256_monitoring-devops-prometheus-activity-7293908845448335360-ol47?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8CzEIBE8Z8pNSWOJohRYteTW4hAVHJEE0"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card flex text-justify"
          >
            PROMETHEUS AND GRAFANA FOR REAL-TIME MONITORING OF RHEL SERVERS
          </a>
        </div>
      </div>
    </section>
  );
}
