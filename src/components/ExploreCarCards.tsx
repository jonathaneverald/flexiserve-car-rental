import { useNavigate } from "react-router-dom";

const ExploreCarCards = () => {
    const navigate = useNavigate();

    const carTypes = [
        { title: "SUV", image: "https://i.ibb.co.com/67XySQmJ/suv-toyota-kluger.jpg" },
        { title: "Sedan", image: "https://i.ibb.co.com/Zp2Dcvsn/sedan-holden-caprice.jpg" },
        { title: "Convertible", image: "https://i.ibb.co.com/35fkcd2y/convertible-holden-cascada.jpg" },
        { title: "Hatchback", image: "https://i.ibb.co.com/xqzLsdX9/hatchback-holden-cruze.jpg" },
        { title: "UTEs & Trucks", image: "https://i.ibb.co.com/prd9GKJm/suv-nissan-navara.jpg" },
    ];

    const handleCarClick = (carType: string) => {
        // First navigate to the new URL
        navigate(`/cars?type=${carType}`);
        // Then scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full mt-8 md:mt-12 lg:mt-16 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-6 md:mb-8 lg:mb-10">Explore Our Cars</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {carTypes.map((car, index) => (
                    <div key={index} onClick={() => handleCarClick(car.title)} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                        {/* Image container with fixed aspect ratio */}
                        <div className="relative pt-[55%]">
                            {" "}
                            {/* This creates a 5:3 aspect ratio */}
                            <img src={car.image} alt={`${car.title} car`} className="absolute top-0 left-0 w-full h-full object-cover" />
                        </div>
                        {/* Title container */}
                        <div className="p-4 text-center">
                            <h3 className="text-blue-400 text-lg md:text-xl font-semibold">{car.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreCarCards;
