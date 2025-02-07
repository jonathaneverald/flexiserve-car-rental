// import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
    return (
        <>
            <Header />
            <section>
                <div className="relative w-full aspect-[16/4] md:aspect-[16/3.5] lg:aspect-[16/3]">
                    <img src="https://i.ibb.co.com/xtJW8hLj/hero-background.jpg" alt="Car Rental" className="absolute inset-0 w-full h-full object-cover object-[30%_73%] brightness-50" />
                </div>
                <div className="flex flex-col items-center gap-5 p-5 text-blue-400 ">
                    <h1 className="text-7xl font-bold">EXPLORE THE OPEN ROAD WITH FLEXISERVE</h1>
                    <h3 className="text-2xl font-semibold">Flexible car rental solutions for business, leisure, and adventure</h3>
                </div>
                <div className="flex justify-center gap-5">
                    <div className="flex flex-col text-blue-400">
                        <h2 className="text-3xl font-bold">Hassle-free Car Rentals</h2>
                        <p>Rent a car with ease and confidence wherever you go.</p>
                        <p>We offer seamless booking, affordable rates, and top-tier service.</p>
                        <div className="flex gap-30 pt-5">
                            <div className="flex flex-col text-sm gap-2">
                                <p>Fully Comprehensive Car</p>
                                <p>Various Pickup Locations</p>
                            </div>
                            <div className="flex flex-col text-sm gap-2">
                                <p>Affordable Price</p>
                                <p>24/7 Customer Support</p>
                            </div>
                        </div>
                    </div>
                    <img src="/src/assets/undraw_order-ride_4gaq.svg" alt="order-ride" className="w-md" />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default App;
