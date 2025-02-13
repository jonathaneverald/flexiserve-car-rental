import React from "react";

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-blue-400 mb-6">About Us</h1>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                    Welcome to FlexiServe Car Rental, your trusted partner in mobility solutions. We've been serving our customers with premium vehicles and exceptional service since [year].
                </p>

                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">Our mission is to provide convenient, reliable, and affordable car rental services while ensuring the highest level of customer satisfaction.</p>

                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Why Choose Us</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li className="mb-2">Wide selection of well-maintained vehicles</li>
                    <li className="mb-2">Competitive pricing and transparent policies</li>
                    <li className="mb-2">24/7 customer support</li>
                    <li className="mb-2">Flexible rental periods</li>
                    <li>Convenient pickup and drop-off locations</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
