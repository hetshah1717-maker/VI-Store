import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { CheckBadgeIcon } from './icons/CheckBadgeIcon';

const Hero: React.FC = () => {
    const whatsappLink = "https://wa.me/919913397555?text=Namaste%2C%20I%20want%20VI%20postpaid%20same-day%20MNP.%20My%20name%3A%20_____%2C%20Area%3A%20_____%2C%20Current%20operator%3A%20_____";

    const features = [
        "Same-Day MNP",
        "Free Doorstep KYC",
        "500+ Happy Customers",
        "Official VI Partner"
    ];

    return (
        <section className="bg-gray-50 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-white opacity-60"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                    <span className="block">Ahmedabad, Get VI Postpaid SIM</span>
                    <span className="block text-[#e60000] mt-2">ઘરે બેઠા, 20 મિનિટમાં!</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-700">
                    Switch to VI with ease. Enjoy free doorstep KYC, same-day activation, and exclusive plans.
                </p>
                <div className="mt-10">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-[#e60000] hover:bg-red-700 transform hover:scale-105 transition-transform duration-300 shadow-xl"
                    >
                        <WhatsappIcon className="h-7 w-7 mr-3" />
                        Book on WhatsApp
                    </a>
                </div>
                <div className="mt-10 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                    {features.map((feature, index) => (
                         <div key={index} className="flex items-center justify-center md:justify-start">
                             <CheckBadgeIcon className="h-6 w-6 text-green-500 mr-2" />
                             <span className="font-medium text-sm">{feature}</span>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;