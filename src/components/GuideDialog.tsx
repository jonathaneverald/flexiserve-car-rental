import React, { useState } from "react";

const handleWhatsAppClick = () => {
    const message = `Hello, I'm interested in renting a car. Could you guide me through the process?`;
    const whatsappUrl = `https://wa.me/61431244819?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
};

const handleEmailClick = () => {
    window.location.href = "mailto:FlexiServe2024@gmail.com";
};

const GuideDialog: React.FC<{ className?: string }> = ({ className }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsDialogOpen(true)} className={className || "text-blue-400 hover:text-blue-800 cursor-pointer"}>
                Guide
            </button>

            {isDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative shadow-xl">
                        {/* Close button */}
                        <button onClick={() => setIsDialogOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Dialog content */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-blue-400 mb-2">Need Guidance?</h2>
                            <p className="text-lg text-gray-600">For guide, customers can inquire via:</p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-4">
                            <button onClick={handleWhatsAppClick} className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition-colors cursor-pointer">
                                Contact via WhatsApp
                            </button>
                            <button onClick={handleEmailClick} className="w-full py-2 px-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded transition-colors cursor-pointer">
                                Contact via Email
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GuideDialog;
