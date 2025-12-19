import React, { useState } from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const [open, setOpen] = useState(null);

    const toggle = (section) => {
        setOpen(open === section ? null : section);
    };

    return (
        <footer className="bg-gray-100 text-gray-900">
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-10 lg:pt-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-10">

                    {/* Logo */}
                    <div>
                        <Link to="/">
                            <img src={assets.logo} alt="Krishnas Jewellers" className="w-40 mb-4" />
                        </Link>
                        <p className="text-lg leading-6">
                            Explore stunning collections of handcrafted gold, diamond, and silver jewellery.
                        </p>
                    </div>

                    {/* Categories */}
                    {/* Categories */}
                    <div>
                        <h3
                            onClick={() => toggle("cat")}
                            className="text-xl font-semibold mb-2 md:mb-4
               cursor-pointer md:cursor-default
               bg-white md:bg-transparent
               p-3 md:p-0 rounded-lg
               shadow md:shadow-none
               flex justify-between items-center"
                        >
                            Diamond Jewellery
                            <span className="ml-2 block md:hidden">
                                <FontAwesomeIcon icon={open === "cat" ? faAngleUp : faAngleDown} />
                            </span>
                        </h3>

                        {/* Mobile View – Box UI */}
                        <div
                            className={`md:hidden ${open === "cat" ? "block" : "hidden"}
                bg-white border border-gray-300 rounded-lg p-3`}
                        >
                            <ul className="space-y-2 text-lg text-gray-800">
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Diamond Ring
                                </li>
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Diamond Earrings
                                </li>
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Diamond Pendant
                                </li>
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Diamond Bracelets
                                </li>
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Diamond Necklace
                                </li>
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Diamond Pendant Set
                                </li>
                            </ul>
                        </div>

                        {/* Desktop View – Simple List */}
                        <ul className="hidden md:block space-y-2 text-lg">
                            <li className="cursor-pointer hover:text-gray-900">Ring</li>
                            <li className="cursor-pointer hover:text-gray-900">Earrings</li>
                            <li className="cursor-pointer hover:text-gray-900">Pendant</li>
                            <li className="cursor-pointer hover:text-gray-900">Bracelets</li>
                            <li className="cursor-pointer hover:text-gray-900">Necklace</li>
                            <li className="cursor-pointer hover:text-gray-900">Pendant Set</li>
                        </ul>
                    </div>


                    {/* Customer Care */}
                    <div>
                        <h3
                            onClick={() => toggle("care")}
                            className="text-xl font-semibold mb-2 md:mb-4
               cursor-pointer md:cursor-default
               bg-white md:bg-transparent
               p-3 md:p-0 rounded-lg
               shadow md:shadow-none
               flex justify-between items-center"
                        >
                            Customer Care
                            <span className="ml-2 block md:hidden">
                                <FontAwesomeIcon icon={open === "care" ? faAngleUp : faAngleDown} />
                            </span>
                        </h3>

                        {/* Mobile View – Box UI */}
                        <div
                            className={`md:hidden ${open === "care" ? "block" : "hidden"}
                bg-white border border-gray-300 rounded-lg p-3`}
                        >
                            <ul className="space-y-2 text-lg text-gray-800">
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/Refund-policy">Refund Policy</Link>
                                </li>
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/Shipping-policy">Shipping Policy</Link>
                                </li>
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/Termsofservice-policy">Terms of Service</Link>
                                </li>
                                <li className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
                                    <Link to="/contact">Contact Information</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Desktop View – Normal List */}
                        <ul className="hidden md:block space-y-2 text-lg text-gray-700">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/Refund-policy">Refund Policy</Link></li>
                            <li><Link to="/Shipping-policy">Shipping Policy</Link></li>
                            <li><Link to="/Termsofservice-policy">Terms of Service</Link></li>
                            <li><Link to="/contact">Contact Information</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2 md:mb-4 cursor-pointer md:cursor-default bg-white md:bg-transparent p-3 md:p-0 rounded md:rounded-none shadow md:shadow-none flex justify-between items-center">
                            Contact Us
                        </h3>
                        <div className="text-lg space-y-2">
                            <p>📞 +91 84603 61497</p>
                            <p>✉️ nikunjnavadiya7@gmail.com</p>
                            <p>📍 Gujarat, India</p>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-300 mt-10 lg:mt-12 pt-6 text-center md:text-right text-lg pb-5">
                    © {new Date().getFullYear()} Krishnas Jewellers. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
