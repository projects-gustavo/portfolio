import React from "react";

// Icons
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

// Tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale-subtle.css";

// Footer
const Footer = () => {
  const socials = [
    {
      id: 1,
      href: "https://wa.me/5511986319802",
      name: "WhatsApp",
      icon: <FaWhatsapp />,
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/guhrodrigues/",
      name: "LinkedIn",
      icon: <FiLinkedin />,
    },
    {
      id: 3,
      href: "https://github.com/projects-gustavo",
      name: "Github",
      icon: <FiGithub />,
    },
    {
      id: 4,
      href: "https://www.instagram.com/gustavinrm/",
      name: "Instagram",
      icon: <FiInstagram />,
    },
  ];

  return (
    <footer className="bg-backgroundSecondary p-12 xl:p-20 sm:mt-36 lg:mt-72 xl:mt-62">
      <div className="flex items-center justify-center mb-3">
        {socials.map(({ id, href, name, icon }) => (
          <nav key={id} className="flex items-center bg-backgroundSecondary">
            <ul className="px-2">
              <Tippy
                content={<span>{name}</span>}
                animation="scale-subtle"
                inertia={true}
              >
                <a
                  href={href}
                  className="block p-2 rounded-xl text-gray-400 duration-300 hover:text-secondary"
                  target="_blank"
                >
                  <div className="scale-[1.40]">
                    <button>{icon}</button>
                  </div>
                </a>
              </Tippy>
            </ul>
          </nav>
        ))}
      </div>
      <div>
        <h1 className="font-signature text-center text-5xl p-4">Gustavo</h1>
        <p className="text-color text-center font-medium mt-3">
          2023 © Gustavo Rodrigues. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
