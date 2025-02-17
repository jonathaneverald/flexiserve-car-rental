import React from "react";
import ExploreCarCards from "../components/ExploreCarCards";
import { useNavigate } from "react-router-dom";
import undraw_order_ride from "../assets/undraw_order-ride_4gaq.svg";
import undraw_preferences from "../assets/undraw_preferences_2bda.svg";
import undraw_confirmed from "../assets/undraw_confirmed_f581.svg";
import undraw_electric_car from "../assets/undraw_electric-car_vlgq.svg";
import undraw_security from "../assets/undraw_security-on_btwg.svg";
import undraw_car_repair from "../assets/undraw_car-repair_wski.svg";
import undraw_travel_mode from "../assets/undraw_travel-mode_ydxo.svg";
import undraw_vintage from "../assets/undraw_vintage_q09n.svg";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/cars");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {/* Section 1 */}
            <section className="flex flex-col gap-10 text-blue-400">
                {/* Hero Image */}
                <div className="relative w-full aspect-[16/6] md:aspect-[16/4] lg:aspect-[16/3]">
                    <img src="https://i.ibb.co.com/xtJW8hLj/hero-background.jpg" alt="Car Rental" className="absolute inset-0 w-full h-full object-cover object-[30%_73%] brightness-50" />
                </div>

                {/* Hero Text */}
                <div className="text-center px-4 py-8 pb-10 text-blue-400">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">EXPLORE THE OPEN ROAD WITH FLEXISERVE</h1>
                    <h3 className="text-xl md:text-2xl font-semibold">Flexible car rental solutions for business, leisure, and adventure</h3>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 pb-10">
                    <div className="text-center md:text-left text-blue-400 md:w-1/2 ">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Hassle-free Car Rentals</h2>
                        <p className="mb-2">Rent a car with ease and confidence wherever you go.</p>
                        <p className="mb-4">We offer seamless booking, affordable rates, and top-tier service.</p>

                        <div className="flex justify-center md:justify-start gap-8 pt-5 ">
                            <div className="flex flex-col text-sm gap-2">
                                <div className="flex gap-1">
                                    <img width="24" height="24" src="https://img.icons8.com/fluency/48/instagram-check-mark.png" alt="instagram-check-mark" />
                                    <p>Fully Comprehensive Car</p>
                                </div>
                                <div className="flex gap-1">
                                    <img width="24" height="24" src="https://img.icons8.com/fluency/48/instagram-check-mark.png" alt="instagram-check-mark" />
                                    <p>Various Pickup Locations</p>
                                </div>
                            </div>
                            <div className="flex flex-col text-sm gap-2">
                                <div className="flex gap-1">
                                    <img width="24" height="24" src="https://img.icons8.com/fluency/48/instagram-check-mark.png" alt="instagram-check-mark" />
                                    <p>Affordable Price</p>
                                </div>
                                <div className="flex gap-1">
                                    <img width="24" height="24" src="https://img.icons8.com/fluency/48/instagram-check-mark.png" alt="instagram-check-mark" />
                                    <p>24/7 Customer Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={undraw_order_ride} alt="FlexiServe Car Rental" className="max-w-full h-auto object-contain md:max-w-md" />
                </div>
                <div className="text-center px-4 sm:px-6 py-3 w-full max-w-md mx-auto">
                    <p className="text-xl sm:text-2xl mb-2">Starting at just $200/week!</p>
                    <button
                        onClick={handleButtonClick}
                        className="text-base sm:text-lg font-bold text-white bg-blue-400 rounded-lg px-6 py-2 mt-4 hover:bg-blue-500 transition-colors duration-300 cursor-pointer w-auto mx-auto block"
                    >
                        Explore Cars
                    </button>
                </div>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col gap-10 text-blue-400 mt-10 items-center">
                {/* Hero Text */}
                <div className="text-center px-4 py-8 pb-10 text-blue-400">
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">SIMPLE AND SEAMLESS CAR RENTALS</h1>
                    <h3 className="text-base md:text-l">Renting a car should be easy and stress-free. Follow these three simple steps to find the perfect ride and get on the road without hassle.</h3>
                    <h3 className="text-base md:text-l"> Whether you need a car for business, leisure, or an adventure, we’re here to make your journey smooth and enjoyable.</h3>
                </div>

                {/* Content*/}
                <div className="flex flex-col gap-30">
                    {/* Step 1*/}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                        <img src={undraw_preferences} alt="FlexiServe Car Rental" className="mx-auto max-w-[200px] w-full h-auto object-contain md:max-w-[240px] lg:max-w-[280px] md:mx-0" />
                        <div className="flex flex-col gap-2 md:gap-3 text-center md:text-center">
                            <h3 className="text-2xl md:text-3xl font-bold">Choose Your Car</h3>
                            <p className="text-base md:text-lg leading-relaxed max-w-[500px] mx-auto md:mx-0">Explore our wide range of vehicles and select the one that best fits your needs.</p>
                        </div>
                    </div>
                    {/* Step 2 - Modified for mobile-first image */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                        {/* Image moved before text for mobile, but will be ordered correctly on md breakpoint */}
                        <img
                            src={undraw_confirmed}
                            alt="FlexiServe Car Rental"
                            className="mx-auto max-w-[200px] w-full h-auto object-contain md:max-w-[240px] lg:max-w-[280px] md:mx-0 md:order-last"
                        />
                        <div className="flex flex-col gap-2 md:gap-3 text-center md:text-center">
                            <h3 className="text-2xl md:text-3xl font-bold">Confirm Your Booking</h3>
                            <p className="text-base md:text-lg leading-relaxed max-w-[500px] mx-auto md:mx-0">Connect with our team to secure your reservation quickly and effortlessly.</p>
                        </div>
                    </div>
                    {/* Step 3*/}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                        <img src={undraw_electric_car} alt="FlexiServe Car Rental" className="mx-auto max-w-[200px] w-full h-auto object-contain md:max-w-[240px] lg:max-w-[280px] md:mx-0" />
                        <div className="flex flex-col gap-2 md:gap-3 text-center md:text-center">
                            <h3 className="text-2xl md:text-3xl font-bold">Hit The Road</h3>
                            <p className="text-base md:text-lg leading-relaxed max-w-[500px] mx-auto md:mx-0">Pick up your car and start driving with confidence—it's that simple!</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleButtonClick}
                    className="text-base sm:text-lg font-bold text-white bg-blue-400 rounded-lg px-6 py-2 mt-4 mb-4 hover:bg-blue-500 transition-colors duration-300 cursor-pointer w-auto mx-auto block"
                >
                    Get Started Now
                </button>
            </section>

            {/* Section 3 */}
            <section className="flex flex-col gap-10 text-blue-400 mt-10 items-center">
                {/* Header text */}
                <div className="w-full bg-blue-50 py-4 mt-10 text-center">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold pt-5 pb-5">WHY CHOOSE US</h1>
                </div>

                {/* Content*/}
                <div className="flex flex-col gap-30 mt-4">
                    {/* Step 1 - Left aligned */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                        <img src={undraw_security} alt="FlexiServe Car Rental" className="mx-auto max-w-[140px] w-full h-auto object-contain md:max-w-[180px] lg:max-w-[220px] md:mx-0 order-first" />
                        <div className="flex flex-col gap-2 md:gap-3 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold">Comprehensive Coverage</h3>
                            <p className="text-base md:text-lg leading-relaxed max-w-[500px] mx-auto md:mx-0">Enjoy peace of mind with fully comprehensive car insurance included in every rental.</p>
                        </div>
                    </div>

                    {/* Step 2 - Right aligned */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                        <img
                            src={undraw_car_repair}
                            alt="FlexiServe Car Rental"
                            className="mx-auto max-w-[140px] w-full h-auto object-contain md:max-w-[180px] lg:max-w-[220px] md:mx-0 order-first md:order-last"
                        />
                        <div className="flex flex-col gap-2 md:gap-3 text-center md:text-right">
                            <h3 className="text-2xl md:text-3xl font-bold">Hassle-Free Maintenance</h3>
                            <p className="text-base md:text-lg leading-relaxed max-w-[500px] mx-auto md:mx-0">
                                No need to worry about upkeep—our rentals come with all maintenance and registration handled for you.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 - Left aligned */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                        <img
                            src={undraw_travel_mode}
                            alt="FlexiServe Car Rental"
                            className="mx-auto max-w-[140px] w-full h-auto object-contain md:max-w-[180px] lg:max-w-[220px] md:mx-0 order-first"
                        />
                        <div className="flex flex-col gap-2 md:gap-3 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold">Generous Mileage Allowance</h3>
                            <p className="text-base md:text-lg leading-relaxed max-w-[500px] mx-auto md:mx-0">Drive up to 150km per day with no extra charges, perfect for your daily adventures.</p>
                        </div>
                    </div>

                    {/* Step 4 - Right aligned */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                        <img
                            src={undraw_vintage}
                            alt="FlexiServe Car Rental"
                            className="mx-auto max-w-[140px] w-full h-auto object-contain md:max-w-[180px] lg:max-w-[220px] md:mx-0 order-first md:order-last"
                        />
                        <div className="flex flex-col gap-2 md:gap-3 text-center md:text-right">
                            <h3 className="text-2xl md:text-3xl font-bold">Reliable and Convenient</h3>
                            <p className="text-base md:text-lg leading-relaxed max-w-[500px] mx-auto md:mx-0">
                                Our cars are always in excellent condition, ready to provide a smooth and enjoyable driving experience.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Add explore cars here */}
                <ExploreCarCards />
            </section>
        </>
    );
};

export default Home;
