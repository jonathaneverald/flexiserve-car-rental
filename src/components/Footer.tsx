import React from "react";
import GuideDialog from "./GuideDialog";

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-50 py-10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-start">
                    {/* Left Section - Logo */}
                    <div className="text-blue-400 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold">FlexiServe</h1>
                        <p className="text-lg uppercase tracking-wider mt-1">CAR RENTALS</p>
                    </div>

                    {/* Center Section - Company Links */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl text-blue-400 font-medium mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-blue-400 hover:underline text-sm">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-blue-400 hover:underline text-sm">
                                    About
                                </a>
                            </li>
                            <li>
                                <li>
                                    <GuideDialog className="text-blue-400 hover:underline text-sm cursor-pointer" />
                                </li>
                            </li>
                            <li>
                                <a href="cars" className="text-blue-400 hover:underline text-sm">
                                    Cars
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section - Contact Info */}
                    <div>
                        <h3 className="text-xl text-blue-400 font-medium mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex flex-col">
                                <span className="text-blue-400 font-medium text-sm">Address:</span>
                                <span className="text-blue-400 text-sm">Various Pickup Location</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-blue-400 font-medium text-sm">Phone:</span>
                                <span className="text-blue-400 text-sm">0431 244 819</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-blue-400 font-medium text-sm">Email:</span>
                                <a href="mailto:flexiserve2024@gmail.com" className="text-blue-400 hover:underline text-sm">
                                    flexiserve2024@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
