import React from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/cars");
        window.scrollTo(0, 0);
    };
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-blue-50">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-blue-400 mb-4 md:mb-6 leading-tight italic">
                        <span className="block">We Make Travel Seamless,</span>
                        <span className="block">Affordable, and Unforgettable</span>
                    </h1>
                </div>
            </div>

            {/* Sub headline */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                <p className="text-base sm:text-lg md:text-xl text-blue-400 leading-relaxed md:leading-7 text-center">
                    At FlexiServe, we are passionate about providing flexible car rental solutions that help you explore the open road with confidence. Whether for business, leisure, or adventure, we
                    are here to make every journey comfortable and stress-free.
                </p>
            </div>

            {/* Features Timeline */}
            <div className="relative container mx-auto px-4 pb-16">
                {/* Vertical timeline line */}
                <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 sm:w-2 md:w-6 lg:w-10  bg-blue-200/50 sm:bg-blue-200/60 md:bg-blue-200/70 lg:bg-blue-200"></div>

                {/* Feature Items */}
                <div className="space-y-12 md:space-y-20 relative">
                    {/* Feature 1 */}
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                            <div className="w-full max-w-[280px] h-[180px] md:h-[220px] mx-auto md:ml-auto md:mr-0">
                                <img src="https://i.ibb.co.com/C3JCG1hR/about-us-background.jpg" alt="Luxury car" className="rounded-lg shadow-lg w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <p className="text-blue-400 mb-2 text-center md:text-left">
                                Our premium fleet of vehicles, from compact cars to luxury SUVs, ensures you travel in style and comfort on your journeys.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center">
                        <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                            <div className="w-full max-w-[280px] h-[180px] md:h-[220px] mx-auto md:mr-auto md:ml-0">
                                <img src="https://i.ibb.co/4ZKQN1gn/customer-service.jpg" alt="Customer service representative" className="rounded-lg shadow-lg w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pr-12">
                            <p className="text-blue-400 mb-2 text-center md:text-right">
                                Our dedicated 24/7 customer support team is always ready to assist, with competitive pricing and a quick booking process.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                            <div className="w-full max-w-[280px] h-[180px] md:h-[220px] mx-auto md:ml-auto md:mr-0">
                                <img src="https://i.ibb.co.com/TBwcsL2Z/customer-satisfiction.jpg" alt="Customer satisfaction" className="rounded-lg shadow-lg w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <p className="text-blue-400 mb-2 text-center md:text-left">Our convenient car pickup service enables easy transportation to begin your journey in minutes.</p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col md:flex-row-reverse items-center">
                        <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                            <div className="w-full max-w-[280px] h-[180px] md:h-[220px] mx-auto md:mr-auto md:ml-0">
                                <img src="https://i.ibb.co/nNt6mr76/car-key.jpg" alt="Car keys" className="rounded-lg shadow-lg w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pr-12">
                            <p className="text-blue-400 mb-2 text-center md:text-right">
                                Transparent pricing with no hidden charges ensures peace of mind, while our flexible return options make drop-offs hassle-free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-blue-50 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                        {/* Title */}
                        <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center bg-gradient-to-r from-blue-200 to-blue-500  bg-clip-text">FlexiServe</h2>

                        {/* Fleet Section */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Fleet</h3>
                            <p className="text-blue-400 text-lg">
                                Diverse range of vehicles from economy to luxury. All cars are regularly maintained, thoroughly cleaned, and come with 24/7 roadside assistance.
                            </p>
                        </div>

                        {/* Service Section */}
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Service</h3>
                            <p className="text-blue-400 text-lg">Streamlined booking process with easy reservations, flexible rental options, and exceptional customer support.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-100 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-blue-400 mb-4">Ready to explore the open road? Let FlexiServe help drive your journey forward. Connect with us today!</h2>
                    <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 mt-4 cursor-pointer">
                        Explore our Fleet
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
