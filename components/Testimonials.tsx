import React from 'react';
import { StarIcon } from './icons/StarIcon';

const TestimonialCard: React.FC<{ quote: string; author: string; location: string; }> = ({ quote, author, location }) => {
    return (
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200 h-full flex flex-col">
            <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5" />)}
            </div>
            <blockquote className="mt-4 text-gray-700 italic text-lg flex-grow">"{quote}"</blockquote>
            <footer className="mt-4 font-bold text-gray-900">- {author}, <span className="font-normal text-gray-600">{location}</span></footer>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const testimonialsData = [
        {
            quote: "Family plan thi ₹1200 per month bachyu! Service pan saras che. Highly recommended.",
            author: "Harsh Shah",
            location: "Satellite",
        },
        {
            quote: "20 minute ma MNP thai gyu, rider ghar par aaviyu. Superfast service!",
            author: "Priya Patel",
            location: "Bopal",
        },
        {
            quote: "My business calls are crystal clear now. The priority support is a great feature.",
            author: "Rajesh Bhai",
            location: "CG Road",
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">અમદાવાદના ગ્રાહકો શું કહે છે?</h2>
                    <p className="mt-4 text-lg text-gray-600">Join Over 500+ Happy Customers in Ahmedabad!</p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;