// src/components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-50 py-6 mt-10">
            <div className="container mx-auto px-4 md:flex justify-between items-center">
                {/* Left Section */}
                <div className="text-2xl  text-blue-400">
                    <h1 className="font-bold">FlexiServe</h1>
                    <p className="text-lg">CAR RENTALS</p>
                </div>

                {/* Center Section */}
                <div className="text-blue-400 mt-6 md:mt-0">
                    <h3 className="font-semibold text-xl">Company</h3>
                    <ul className="space-y-2 mt-4">
                        <li>
                            <a href="#" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Cars
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="text-blue-400 mt-6 md:mt-0">
                    <h3 className="font-semibold text-xl">Contact</h3>
                    <ul className="space-y-2 mt-4">
                        <li>Address: Various Pickup Locations</li>
                        <li>Phone: 0431 244 819</li>
                        <li>
                            Email:{" "}
                            <a href="mailto:flexiserve2024@gmail.com" className="hover:underline">
                                flexiserve2024@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
