import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-4">
                         <span className="text-3xl font-bold text-white">vi</span>
                         <span className="text-xl font-semibold text-gray-300 align-middle ml-2"> Mini Store</span>
                         <p className="text-gray-400 text-base">
                             Your authorized VI Postpaid & MNP expert in Ahmedabad.
                         </p>
                         <p className="text-gray-400 text-base">
                            Call: <a href="tel:+919913397555" className="hover:text-red-500">+91 99133 97555</a>
                         </p>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Services</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><span className="text-base text-gray-400">Postpaid Connections</span></li>
                                    <li><span className="text-base text-gray-400">MNP (Porting)</span></li>
                                    <li><span className="text-base text-gray-400">Family Plans</span></li>
                                    <li><span className="text-base text-gray-400">Business Plans</span></li>
                                </ul>
                            </div>
                            <div className="mt-8 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#plans" className="text-base text-gray-400 hover:text-white">Plans</a></li>
                                    <li><a href="#how-it-works" className="text-base text-gray-400 hover:text-white">How it Works</a></li>
                                    <li><a href="#contact" className="text-base text-gray-400 hover:text-white">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Why Us?</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><span className="text-base text-gray-400">✓ Same Day Activation</span></li>
                                    <li><span className="text-base text-gray-400">✓ Doorstep Service</span></li>
                                    <li><span className="text-base text-gray-400">✓ Official Partner</span></li>
                                    <li><span className="text-base text-gray-400">✓ Gujarati Support</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} VI Mini Store, Ahmedabad. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;