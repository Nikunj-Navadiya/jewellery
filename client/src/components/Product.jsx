import React from "react";
import assets from "../assets/assets";

const Product = () => {
    const products = [
        {
            id: 1,
            name: "Gold & Diamond Necklace",
            image: assets.product,
            price: "$1,250",
        },
        {
            id: 2,
            name: "Royal Gold Bracelet",
            image: assets.product,
            price: "$980",
        },
        {
            id: 3,
            name: "Elegant Diamond Earrings",
            image: assets.product,
            price: "$750",
        },
        {
            id: 4,
            name: "Classic Gold Ring",
            image: assets.product,
            price: "$540",
        },
        {
            id: 5,
            name: "Pearl & Diamond Pendant",
            image: assets.product,
            price: "$1,050",
        },
        {
            id: 6,
            name: "Luxury Diamond Set",
            image: assets.product,
            price: "$2,490",
        },
        {
            id: 7,
            name: "Golden Anklet Charm",
            image: assets.product,
            price: "$430",
        },
        {
            id: 8,
            name: "Diamond Crown Ring",
            image: assets.product,
            price: "$1,320",
        },
        
    ];

    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12 bg-gradient-to-b from-[#fffaf2] to-[#f8f3ea]">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#b9935a] to-[#e6c77c] bg-clip-text text-transparent tracking-wide">
                    Luxury Crafted in Gold, Defined by Diamonds
                </h1>
                <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
                    Discover timeless jewelry designed to shine on every occasion — a perfect blend of elegance and artistry.
                </p>
            </div>

            {/* Product Grid (4 Columns on Large Screens) */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-[330px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#b9935a] transition">
                                {item.name}
                            </h3>
                            <p className="text-[#b9935a] font-medium mt-1">{item.price}</p>
                            <button className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#b9935a] to-[#e6c77c] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
