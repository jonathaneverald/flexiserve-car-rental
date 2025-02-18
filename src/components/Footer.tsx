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
                                <a href="/#/about" className="text-blue-400 hover:underline text-sm">
                                    About
                                </a>
                            </li>
                            <li>
                                <li>
                                    <GuideDialog className="text-blue-400 hover:underline text-sm cursor-pointer" />
                                </li>
                            </li>
                            <li>
                                <a href="#/cars" className="text-blue-400 hover:underline text-sm">
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

                    {/* Right Section - Social Media */}
                    <div>
                        <h3 className="text-xl text-blue-400 font-medium mb-4">Social Media</h3>
                        <ul className="space-y-2">
                            <li className="flex flex-row gap-2">
                                <a href="https://www.instagram.com/flexiserveau/" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                                        <g
                                            fill="#009bff"
                                            fill-rule="nonzero"
                                            stroke="none"
                                            stroke-width="1"
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            stroke-miterlimit="10"
                                            stroke-dasharray=""
                                            stroke-dashoffset="0"
                                            font-family="none"
                                            font-weight="none"
                                            font-size="none"
                                            text-anchor="none"
                                        >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61573151015492" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                                        <g
                                            fill="#009bff"
                                            fill-rule="nonzero"
                                            stroke="none"
                                            stroke-width="1"
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            stroke-miterlimit="10"
                                            stroke-dasharray=""
                                            stroke-dashoffset="0"
                                            font-family="none"
                                            font-weight="none"
                                            font-size="none"
                                            text-anchor="none"
                                        >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22zM25,5c11.05756,0 20,8.94244 20,20c0,9.72979 -6.9642,17.7318 -16.15625,19.5332v-12.96875h5.29297l1.16211,-7.51953h-6.45508v-2.01758c0,-1.03747 0.18982,-1.96705 0.50977,-2.52539c0.31994,-0.55834 0.62835,-0.80078 1.38477,-0.80078h4.44727v-6.69141l-0.86719,-0.11719c-0.59979,-0.08116 -1.96916,-0.27148 -4.43945,-0.27148c-2.7031,0 -5.02334,0.73635 -6.625,2.40234c-1.60166,1.66599 -2.39258,4.14669 -2.39258,7.34961v2.67383h-5.19727v7.51953h5.19727v12.9043c-9.04433,-1.91589 -15.86133,-9.84626 -15.86133,-19.4707c0,-11.05756 8.94244,-20 20,-20z"></path>
                                            </g>
                                        </g>
                                    </svg>
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
