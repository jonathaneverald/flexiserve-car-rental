const ExploreCarCards = () => {
    const carTypes = [
        { title: "SUV", image: "https://i.ibb.co.com/7J6VtGz5/suv-car.jpg" },
        { title: "Sedans", image: "https://i.ibb.co.com/vvJG7cGg/sedan-car.jpg" },
        { title: "Convertible", image: "https://i.ibb.co.com/Q4SkVSx/convertible-car.jpg" },
        { title: "Hatchback", image: "https://i.ibb.co.com/9mBpKfDF/hatchback-car.jpg" },
    ];

    return (
        <div className="w-full mt-8 md:mt-12 lg:mt-16 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-6 md:mb-8 lg:mb-10">Explore Our Cars</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {carTypes.map((car, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                        {/* Image container with no padding */}
                        <div className="aspect-[4/3] w-full">
                            <img src={car.image} alt={`${car.title} car`} className="w-full h-full object-cover" />
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
