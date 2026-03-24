import React, { useEffect } from 'react'
import { FaHamburger } from "react-icons/fa";
import HighFiveButton from './HighFiveButton';

const NavBar = ({ menuOpen, setMenuOpen }) => {


    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

    return (
        <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>

            <div className='max-w-5xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16 '>
                    <a href="#home" className='font-mono text-xl font-bold text-white'>
                        Sadik<span className='text-green-700'> Rahman </span>
                    </a>


                    <div className='hidden md:flex items-center space-x-8 '>
                        <a href="#home" className='text-gray-300 hover:text-green-900 transition-colors'>
                            HOME
                        </a>



                        <a href="#about" className='text-gray-300  hover:text-green-900 transition-colors'>
                            ABOUT
                        </a>

                        <a href="#projects" className='text-gray-300 hover:text-green-900 transition-colors'>
                            PROJECTS
                        </a>

                        <a href="#contact" className='text-gray-300  hover:text-green-900 transition-colors'>
                            CONTACT
                        </a>
                    </div>

                    



                </div>



            </div>
        </nav>
    )
}

export default NavBar