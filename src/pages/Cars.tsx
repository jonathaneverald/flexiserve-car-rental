import React, { useEffect, useState } from "react";
import CarCard, { Car } from "../components/CarCards";
import { useLocation } from "react-router-dom";
import { allCars } from "../database/cars";

const CarsPage: React.FC = () => {
    const location = useLocation();
    const [filteredCars, setFilteredCars] = useState<Car[]>(allCars);

    useEffect(() => {
        // Get the 'type' query parameter from the URL
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get("type");

        if (type) {
            // Filter cars by the selected type
            const filtered = allCars.filter((car) => car.type.toLowerCase().includes(type.toLowerCase()));
            setFilteredCars(filtered.length > 0 ? filtered : allCars);
        } else {
            // If no type is specified, show all cars
            setFilteredCars(allCars);
        }
    }, [location.search]);

    // Get the current type for display in the title
    const searchParams = new URLSearchParams(location.search);
    const currentType = searchParams.get("type");

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4 md:mb-6 leading-tight">{currentType ? `Our ${currentType} Fleet` : "Our Fleet"}</h1>
                    <p className="text-base sm:text-lg md:text-xl text-blue-400 leading-relaxed">Choose from our wide range of vehicles to suit your needs, from economy to luxury.</p>
                    <p className="text-base sm:text-lg md:text-xl text-blue-400 leading-relaxed">Starts from $200/week</p>
                </div>
            </div>

            {/* Cars Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 mt-10">
                {filteredCars.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredCars.map((car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">No cars found for this category. Please try another selection.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarsPage;
