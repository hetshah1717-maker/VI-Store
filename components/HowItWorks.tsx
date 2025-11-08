import React from 'react';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            number: "1",
            title: "WhatsApp પર બુક કરો",
            description: "Click the button, share your details on WhatsApp, and get an instant confirmation.",
        },
        {
            number: "2",
            title: "Free Doorstep KYC",
            description: "Our agent will visit you for KYC at your convenience, free of charge (within 5km).",
        },
        {
            number: "3",
            title: "Same-Day Activation",
            description: "Your new VI SIM is activated and ready to use on the very same day. It's that fast!",
        },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get VI Postpaid in 3 Easy Steps</h2>
                    <p className="mt-4 text-lg text-gray-600">From booking to activation, we make it quick and hassle-free.</p>
                </div>
                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={step.number} className="text-center relative">
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full border-t-2 border-dashed border-gray-300"></div>
                                )}
                                <div className="relative z-10 flex items-center justify-center h-16 w-16 mx-auto bg-[#e60000] text-white rounded-full text-3xl font-bold shadow-lg">
                                    {step.number}
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                                <p className="mt-2 text-base text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;