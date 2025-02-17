import React, { useState } from "react";
import logo from "../assets/logo.png";
import GuideDialog from "./GuideDialog";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-20" />
                    <a href="/" className="text-blue-500 font-bold text-2xl">
                        FlexiServe
                    </a>
                </div>
                <button className="md:hidden focus:outline-none" aria-label="Toggle Navigation" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className="hidden md:block">
                    <div className="flex gap-8 font-bold text-blue-400">
                        <a href="/" className="hover:text-blue-800">
                            Home
                        </a>
                        <a href="/#/about" className="hover:text-blue-800">
                            About
                        </a>
                        <GuideDialog />
                        <a href="/#/cars" className="hover:text-blue-800">
                            Cars
                        </a>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="menu md:hidden p-4">
                    <div className="flex flex-col gap-5 font-bold text-center text-blue-400">
                        <a href="/" className="hover:text-blue-800">
                            Home
                        </a>
                        <a href="/#/about" className="hover:text-blue-800">
                            About
                        </a>
                        <GuideDialog />
                        <a href="/#/cars" className="hover:text-blue-800">
                            Cars
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
