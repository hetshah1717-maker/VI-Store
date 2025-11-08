import React from 'react';
import { PhoneIcon } from './icons/PhoneIcon';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm bg-white/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <span className="text-3xl font-bold text-[#e60000]">vi</span>
                        <span className="text-xl font-semibold text-gray-700 align-middle ml-2"> Mini Store</span>
                    </div>
                    <div className="flex items-center">
                        <a 
                            href="tel:+919913397555"
                            className="flex items-center bg-[#e60000] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                        >
                            <PhoneIcon className="h-5 w-5 mr-2" />
                            <span className="hidden sm:inline">Call Now</span>
                            <span className="sm:inline ml-1 hidden md:inline"> · 99133 97555</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;