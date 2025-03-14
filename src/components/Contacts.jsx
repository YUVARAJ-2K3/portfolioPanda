import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { useState, useEffect } from "react";
<div className="pro-logo">
          <div className="hidden md:block">
            <div className="flex justify-end">
              <a
                href="https://www.linkedin.com/in/yuvaraj-s-542053256/"
                className="social-icon pr-5 py-4 linkedin"
              >
                <SiLinkedin size={40} />
              </a>
              <a
                href="https://github.com/YUVARAJ-2K3"
                className="social-icon pr-5 py-4 github"
              >
                <FaGithubSquare size={40} />
              </a>
              <a
                href="mailto:sureshyuvaraj2003@gmail.com"
                className="social-icon pr-5 py-4 gmail"
              >
                <ImMail size={40} />
              </a>
              <a
                href="https://www.instagram.com/_yuvaraj_2003_/"
                className="social-icon pr-5 py-4 instagram"
              >
                <FaInstagramSquare size={40} />
              </a>
            </div>
          </div>
        </div>