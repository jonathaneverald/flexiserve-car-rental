// Define car data type
export interface Car {
    id: number;
    name: string;
    image: string;
    seats: string;
    luggage: string;
    idealFor: string;
    perfectFor: string;
    transmission: string;
    price: number;
    type: string;
}

const CarCard: React.FC<{ car: Car }> = ({ car }) => {
    const handleBookNow = () => {
        // Prepare the message with car details
        const message = `Hello, I'm interested in renting the ${car.name} (${car.type}).`;

        // Create the WhatsApp URL with phone number and pre-filled message
        const whatsappUrl = `https://wa.me/61431244819?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
            <div className="relative">
                <img src={car.image} alt={car.name} className="w-full h-72 object-cover" />
                {/* <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-md">${car.price}/day</div> */}
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-500 mb-3">{car.name}</h3>

                <div className="space-y-2 mb-4 flex-grow">
                    <div className="flex">
                        <span className="text-blue-400 font-medium w-28 flex-shrink-0">Seats:</span>
                        <span className="text-gray-600">{car.seats}</span>
                    </div>
                    <div className="flex">
                        <span className="text-blue-400 font-medium w-28 flex-shrink-0">Luggage:</span>
                        <span className="text-gray-600">{car.luggage}</span>
                    </div>
                    <div className="flex">
                        <span className="text-blue-400 font-medium w-28 flex-shrink-0">Ideal For:</span>
                        <span className="text-gray-600 flex-1">{car.idealFor}</span>
                    </div>
                    <div className="flex">
                        <span className="text-blue-400 font-medium w-28 flex-shrink-0">Perfect For:</span>
                        <span className="text-gray-600 flex-1">{car.perfectFor}</span>
                    </div>
                    <div className="flex">
                        <span className="text-blue-400 font-medium w-28 flex-shrink-0">Transmission:</span>
                        <span className="text-gray-600">{car.transmission}</span>
                    </div>
                    <div className="flex">
                        <span className="text-blue-400 font-medium w-28 flex-shrink-0">Type:</span>
                        <span className="text-gray-600">{car.type}</span>
                    </div>
                </div>

                <button onClick={handleBookNow} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-300 cursor-pointer mt-auto">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default CarCard;
