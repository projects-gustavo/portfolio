import React from 'react'

// Icons
import { FaWhatsapp } from 'react-icons/fa'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'

// ScrollToTop
import ScrollToTop from 'react-scroll-to-top'

// Footer
const Footer = () => {
    return (
        <footer className="bg-backgroundSecondary p-8 xl:p-20 mt-24" id="contact">
            <ScrollToTop
                smooth top="20"
                className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary shadow-none"
                color="#000"
                width="20px"
                height="20px"
            />
            <p className="text-center text-white mb-4 font-medium">Entre em contato</p>
            <div className="flex items-center justify-center border-b border-neutral-800 pb-8">
                <nav className="flex items-center gap-4 bg-backgroundSecondary">
                    <a
                        href="https://wa.me/5511986319802"
                        className="block p-4 rounded-xl text-white bg-backgroundPrimary hover:bg-gradient-to-r from-primary to-secondary hover:text-black duration-300"
                        target="_blank">
                        <FaWhatsapp className="scale-150" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/guhrodrigues/"
                        className="block p-4 rounded-xl text-white bg-backgroundPrimary hover:bg-gradient-to-r from-primary to-secondary hover:text-black duration-300"
                        target="_blank">
                        <FiLinkedin className="scale-150" />
                    </a>
                    <a
                        href="https://github.com/projects-gustavo"
                        className="block p-4 rounded-xl bg-backgroundPrimary text-white hover:bg-gradient-to-r from-primary to-secondary hover:text-black duration-300"
                        target="_blank">
                        <FiGithub className="scale-150" />
                    </a>
                    <a
                        href="https://www.instagram.com/gustavinrm/"
                        className="block p-4 rounded-xl bg-backgroundPrimary text-white hover:bg-gradient-to-r from-primary to-secondary hover:text-black duration-300"
                        target="_blank">
                        <FiInstagram className="scale-150" />
                    </a>
                </nav>
            </div>
            <div className="mt-10">
                <p className="text-color text-center font-medium">
                    2023 © <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary">Gustavo Rodrigues</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer