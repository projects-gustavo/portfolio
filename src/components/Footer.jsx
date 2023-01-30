import React from 'react'

// Icons
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'

// ScrollToTop
import ScrollToTop from 'react-scroll-to-top'

// Footer
const Footer = () => {
    const socials = [
        {
            id: 1,
            href: 'https://wa.me/5511986319802',
            icon: <FaWhatsapp />,
        },
        {
            id: 2,
            href: 'mailto:gumartinsR1201@gmail.com',
            icon: <AiOutlineMail />,
        },
        {
            id: 3,
            href: 'https://www.linkedin.com/in/guhrodrigues/',
            icon: <FiLinkedin />,
        },
        {
            id: 4,
            href: 'https://github.com/projects-gustavo',
            icon: <FiGithub />,
        },
        {
            id: 5,
            href: 'https://www.instagram.com/gustavinrm/',
            icon: <FiInstagram />,
        },
    ]

    return (
        <footer className="bg-backgroundSecondary p-12 xl:p-20 sm:mt-12 lg:mt-52">
            <ScrollToTop
                smooth top="20"
                className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary shadow-none"
                color="#000"
                width="20px"
                height="20px"
            />
            <div>
                <div className="flex items-center justify-center mb-3">
                    {socials.map(({ id, href, icon }) => (
                        <nav
                            key={id}
                            className="flex items-center bg-backgroundSecondary"
                        >
                            <ul className="px-2">
                                <a
                                    href={href}
                                    className="block p-2 rounded-xl text-gray-400 duration-300"
                                    target="_blank">
                                    <div className="scale-[1.40]">
                                        {icon}
                                    </div>
                                </a>
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
            </div>
        </footer>
    )
}

export default Footer
