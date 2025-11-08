import React from 'react';

interface OttChoice {
    name: string;
    bgColor: string;
    textColor: string;
    extraClasses?: string;
}

interface Plan {
    name: string;
    price: string;
    connections: number;
    primary: {
        title: string;
        data: string;
    };
    secondary: {
        title: string;
        data: string;
    };
    complimentaryBenefits: {
        tag: string;
        choices: OttChoice[];
    };
    whatsappMessage: string;
    isBestseller?: boolean;
}

const OttLogo: React.FC<OttChoice> = ({ name, bgColor, textColor, extraClasses }) => (
    <div className={`h-10 w-full rounded-md flex items-center justify-center p-1 text-center text-[10px] font-bold leading-tight ${bgColor} ${textColor} ${extraClasses}`}>
        {name}
    </div>
);

const PlanCard: React.FC<Plan> = ({ name, price, connections, primary, secondary, complimentaryBenefits, isBestseller }) => {
    const whatsappBaseUrl = "https://wa.me/919913397555?text=";
    const planBaseMessage = "My name: _____, Area: _____, Current operator: _____";
    const link = `${whatsappBaseUrl}${encodeURIComponent(`Namaste, I want the ${name} plan. ${planBaseMessage}`)}`;

    return (
        <div className={`relative bg-white rounded-2xl shadow-lg flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${isBestseller ? 'border-2 border-[#e60000]' : 'border border-gray-200'}`}>
            
            <div className="absolute -top-3.5 left-6 bg-gray-800 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md z-10">
                {connections} connections
            </div>
            
            {isBestseller && (
                <div className="absolute top-0 right-6 -mt-4 z-20">
                    <span className="bg-[#e60000] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">Bestseller</span>
                </div>
            )}
            
            <div className="p-6 pt-10 flex-grow flex flex-col">
                <div className="mb-6 text-left">
                    <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
                    <p className="text-gray-600 text-lg font-semibold">₹{price}<span className="text-sm font-normal">/month</span></p>
                </div>

                <div className="space-y-5 flex-grow">
                    <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4">
                        <span className="text-gray-600">{primary.title}</span>
                        <span className="font-bold text-gray-900 text-xl">{primary.data}</span>
                    </div>

                    <div>
                        <div className="flex items-center space-x-2 my-3">
                            <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full">CHOICE OF ANY 2</span>
                            <span className="text-gray-600 text-xs font-medium">complimentary benefits</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {complimentaryBenefits.choices.map((ott) => (
                               <OttLogo key={ott.name} {...ott} />
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4">
                        <span className="text-gray-600">{secondary.title}</span>
                        <span className="font-bold text-gray-900 text-xl">{secondary.data}</span>
                    </div>
                </div>
            </div>

            <div className="p-6 mt-auto">
                 <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#e60000] text-white font-bold py-3 px-6 rounded-lg text-md shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                        Select Plan
                 </a>
            </div>
        </div>
    );
};


const Plans: React.FC = () => {
    const ottChoices = {
        vi: { name: 'Vi Movies & TV', bgColor: 'bg-red-600', textColor: 'text-white' },
        prime: { name: 'amazon prime', bgColor: 'bg-blue-500', textColor: 'text-white' },
        hotstar: { name: 'Disney+ hotstar', bgColor: 'bg-gradient-to-r from-blue-800 to-purple-600', textColor: 'text-white' },
        sony: { name: 'SONY LIV', bgColor: 'bg-black', textColor: 'text-white' },
        norton: { name: 'Norton', bgColor: 'bg-white', textColor: 'text-black', extraClasses: 'border border-gray-300' },
        swiggy: { name: 'SWIGGY one', bgColor: 'bg-orange-500', textColor: 'text-white' },
        eazydiner: { name: 'eazydiner', bgColor: 'bg-white', textColor: 'text-black', extraClasses: 'border border-gray-300' },
    };

    const plansData: Plan[] = [
        {
            name: "Vi Max Family 701",
            price: "701",
            connections: 2,
            primary: { title: "Primary member gets", data: "70 GB" },
            secondary: { title: "Secondary gets", data: "40 GB" },
            complimentaryBenefits: {
                tag: "choice of any 2",
                choices: [ottChoices.vi, ottChoices.prime, ottChoices.hotstar, ottChoices.sony, ottChoices.norton],
            },
            whatsappMessage: "Vi Max Family 701 plan",
        },
        {
            name: "Vi Max Family 1201",
            price: "1201",
            connections: 4,
            isBestseller: true,
            primary: { title: "Primary member gets", data: "140 GB" },
            secondary: { title: "Secondary gets", data: "40 GB" },
            complimentaryBenefits: {
                tag: "choice of any 2",
                choices: [ottChoices.vi, ottChoices.prime, ottChoices.hotstar, ottChoices.sony, ottChoices.swiggy, ottChoices.eazydiner, ottChoices.norton],
            },
            whatsappMessage: "Vi Max Family 1201 plan",
        },
        {
            name: "Vi Max Family 1401",
            price: "1401",
            connections: 5,
            primary: { title: "Primary member gets", data: "140 GB" },
            secondary: { title: "Secondary gets", data: "40 GB" },
            complimentaryBenefits: {
                tag: "choice of any 2",
                choices: [ottChoices.vi, ottChoices.prime, ottChoices.hotstar, ottChoices.sony, ottChoices.swiggy, ottChoices.eazydiner, ottChoices.norton],
            },
            whatsappMessage: "Vi Max Family 1401 plan",
        },
    ];

    return (
        <section id="plans" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">તમારા માટે પરફેક્ટ પ્લાન પસંદ કરો</h2>
                <p className="mt-4 text-lg text-gray-600">Exclusive family plans with amazing benefits. No hidden charges.</p>
                <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-x-8">
                    {plansData.map((plan, index) => (
                        <PlanCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;
