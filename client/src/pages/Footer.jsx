import React from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-900">
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-14">

                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* Logo & About */}
                    <div>
                        <Link to={"/"}><img src={assets.logo} alt="Krishnas Jewellers" className="w-40 mb-4" /></Link>
                        <p className="text-lg leading-6">
                            Explore stunning collections of handcrafted gold, diamond, and silver jewellery at Krishnas Jewellers.
                        </p>
                    </div>

                    {/* Diamond Categories */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                        <ul className="space-y-2 text-lg">
                            <li>
                                <span className="inline-block hover:text-gray-900 cursor-pointer">
                                    Ring
                                </span>
                            </li>
                            <li>
                                <span className="inline-block hover:text-gray-900 cursor-pointer">
                                    Earrings
                                </span>
                            </li>
                            <li>
                                <span className="inline-block hover:text-gray-900 cursor-pointer">
                                    Pendant
                                </span>
                            </li>
                            <li>
                                <span className="inline-block hover:text-gray-900 cursor-pointer">
                                    Bracelets
                                </span>
                            </li>
                            <li>
                                <span className="inline-block hover:text-gray-900 cursor-pointer">
                                    Necklace
                                </span>
                            </li>
                            <li>
                                <span className="inline-block hover:text-gray-900 cursor-pointer">
                                    Pendant Set
                                </span>
                            </li>
                            <li>
                                <span className="inline-block hover:text-gray-900 cursor-pointer">
                                    Kada
                                </span>
                            </li>
                        </ul>

                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Care</h3>
                        <ul className="space-y-2 text-lg">
                            <li><Link to={"/about"}><span className="inline-block cursor-pointer hover:text-gray-900">About Us</span></Link></li>

                            <li><Link to={"/privacy-policy"}><span className="inline-block cursor-pointer hover:text-gray-900">Privacy policy</span></Link></li>

                            <li><Link to={"/Refund-policy"}><span className="inline-block cursor-pointer hover:text-gray-900">Refund policy</span></Link></li>

                            <li><Link to={"/Shipping-policy"}><span className="inline-block cursor-pointer hover:text-gray-900">Shipping policy</span></Link></li>

                            <li><Link to={"/Termsofservice-policy"}><span className="inline-block cursor-pointer hover:text-gray-900">Terms of service</span></Link></li>

                            <li><span className="inline-block cursor-pointer hover:text-gray-900">Contact information</span></li>
                            
                        </ul>

                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                        <p className="text-lg mb-2">📞 +91 84603 61497</p>
                        <p className="text-lg mb-2">✉️ nikunjnavadiya7@gmail.com</p>
                        <p className="text-lg">📍 Gujarat, India</p>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-12 pt-6 text-right text-xl pb-5">
                    © {new Date().getFullYear()} <span className="text-gray-900">Krishnas Jewellers</span>. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
