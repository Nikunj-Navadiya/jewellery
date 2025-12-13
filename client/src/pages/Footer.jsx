import React from "react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-white py-6">  
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12">
            <div className="flex justify-between items-center">
                <div>
                    <img src={assets.logo} alt="" />
                </div>
                <div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
                        <p className="text-gray-600">Phone: +91 84603 61497</p>
                        <p className="text-gray-600">Email: nikunjnavadiya7@gmail.com</p>
                    </div>
                </div>
            </div>
            {/* <p>&copy; {new Date().getFullYear()} Krishnas. All rights reserved.</p> */}
        </div>
    </footer>
  );
}
export default Footer;