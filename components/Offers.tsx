import React from 'react';
import { GiftIcon } from './icons/GiftIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';

const OfferCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
        <div className="flex justify-center items-center h-12 w-12 mx-auto bg-red-100 rounded-full">
            <GiftIcon className="h-6 w-6 text-[#e60000]" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
    </div>
);


const Offers: React.FC = () => {
    const whatsappLink = "https://wa.me/919913397555?text=Namaste%2C%20I'm%20interested%20in%20your%20special%20offers%20for%20VI%20Postpaid.";

    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Exclusive Limited-Time Offers
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg leading-6 text-gray-600">
                    Get these extra benefits when you switch to VI with us today!
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <OfferCard 
                        title="First Month FREE" 
                        description="Rental waived for the first month on select family plans." 
                    />
                    <OfferCard 
                        title="Free Doorstep KYC" 
                        description="Convenient and safe KYC process at your home, within 5km radius." 
                    />
                     <OfferCard 
                        title="Referral Bonus" 
                        description="Get ₹200 bill credit for each friend who successfully joins VI through you." 
                    />
                </div>
                 <div className="mt-12">
                    <a
                        href={whatsappLink}
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-green-500 hover:bg-green-600 transform hover:scale-105 transition-all"
                    >
                        <WhatsappIcon className="h-6 w-6 mr-3" />
                        Claim Offer on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Offers;