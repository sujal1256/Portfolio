import React, { useState } from "react";
import {
  LuGithub,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
  LuArrowRight,
} from "react-icons/lu";

function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    {
      id: "github",
      icon: LuGithub,
      text: "Github",
      href: "https://github.com/sujal1256",
    },
    {
      id: "linkedin",
      icon: LuLinkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/sujal-malhotra",
    },
    {
      id: "twitter",
      icon: LuTwitter,
      text: "Twitter",
      href: "https://x.com/msujal_malhotra",
    },
    {
      id: "instagram",
      icon: LuInstagram,
      text: "Instagram",
      href: "https://www.instagram.com/msujal29/",
    },
  ];

  return (
    <div className="border-t-2 border-gray-200 flex justify-around items-center">
      <div className="flex flex-col justify-between items-center py-4 px-2 md:px-8">
        <p className="text-lg">Sujal Malhotra</p>
        <p className="text-gray-500 text-xs">
          © 2024 Sujal Malhotra. All rights reserved.
        </p>
      </div>
      <div className="flex justify-between items-center py-4 px-8 gap-5 text-gray-500">
        <div className="flex flex-col gap-2">
          {socialLinks.slice(0, 2).map((link) => (
            <a
              target="_blank"
              key={link.id}
              href={link.href}
              className="flex gap-2 items-center hover:text-blue-600 transition-colors duration-300 group"
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {hoveredLink === link.id ? (
                <LuArrowRight size={20} className="text-blue-600" />
              ) : (
                <link.icon size={20} />
              )}
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.text}
              </span>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {socialLinks.slice(2, 4).map((link) => (
            <a
              target="_blank"
              key={link.id}
              href={link.href}
              className="flex gap-2 items-center hover:text-blue-600 transition-colors duration-300 group"
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {hoveredLink === link.id ? (
                <LuArrowRight size={20} className="text-blue-600" />
              ) : (
                <link.icon size={20} />
              )}
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
