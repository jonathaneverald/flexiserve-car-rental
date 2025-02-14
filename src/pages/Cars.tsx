import React, { useEffect, useState } from "react";
import CarCard, { Car } from "../components/CarCards";
import { useLocation } from "react-router-dom";

// Sample car data with types added
const allCars: Car[] = [
    {
        id: 1,
        name: "Toyota Corolla",
        image: "https://i.ibb.co.com/9mBpKfDF/hatchback-car.jpg",
        seats: 5,
        luggage: "2 large, 1 small",
        idealFor: "Families, Couples",
        perfectFor: "City trips, Commuting",
        transmission: "Automatic",
        price: 50,
        type: "Hatchback",
    },
    {
        id: 2,
        name: "Honda Civic",
        image: "/api/placeholder/320/180",
        seats: 5,
        luggage: "2 large, 2 small",
        idealFor: "Small groups, Couples",
        perfectFor: "Road trips, Leisure travel",
        transmission: "Automatic",
        price: 55,
        type: "Sedan",
    },
    {
        id: 3,
        name: "Mazda CX-5",
        image: "/api/placeholder/320/180",
        seats: 5,
        luggage: "3 large, 2 small",
        idealFor: "Families, Small groups",
        perfectFor: "Outdoor adventures, Long trips",
        transmission: "Automatic",
        price: 65,
        type: "SUV",
    },
    {
        id: 4,
        name: "Hyundai Tucson",
        image: "/api/placeholder/320/180",
        seats: 5,
        luggage: "3 large, 1 small",
        idealFor: "Families, Travelers",
        perfectFor: "Weekend getaways, Business trips",
        transmission: "Automatic",
        price: 60,
        type: "SUV",
    },
    {
        id: 5,
        name: "Tesla Model 3",
        image: "/api/placeholder/320/180",
        seats: 5,
        luggage: "1 large, 2 small",
        idealFor: "Business travelers, Couples",
        perfectFor: "City driving, Short trips",
        transmission: "Automatic (Electric)",
        price: 85,
        type: "Sedan",
    },
];

const CarsPage: React.FC = () => {
    const location = useLocation();
    const [filteredCars, setFilteredCars] = useState<Car[]>(allCars);

    useEffect(() => {
        // Get the 'type' query parameter from the URL
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get("type");

        if (type) {
            // Filter cars by the selected type
            const filtered = allCars.filter((car) => car.type.toLowerCase() === type.toLowerCase());
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
                    <p className="text-base sm:text-lg md:text-xl text-blue-400 leading-relaxed">Choose from our wide range of vehicles to suit your needs, from economy to luxury</p>
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
