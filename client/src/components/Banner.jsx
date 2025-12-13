import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";

const Banner = () => {
    const slides = [
        {
            image: assets.banner1,
            text: (
                <>
                    Sophisticated Style, <br /> Timeless Charm
                </>
            ),
            color: "#0f484e", // banner1 text color
        },
        {
            image: assets.banner2,
            text: (
                <>
                    Effortless Style <br /> for Every Occasion
                </>
            ),
            color: "#83644a", // banner2 text color
        },
    ];

    const slidess = [
        {
            image: assets.banner6,
            text: (
                <>
                    Sophisticated Style, <br /> Timeless Charm
                </>
            ),
            color: "#0f484e",
        },
        {
            image: assets.banner5,
            text: (
                <>
                    Effortless Style <br /> for Every Occasion
                </>
            ),
            color: "#83644a",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile view
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Handle auto-slide depending on screen
    useEffect(() => {
        const activeSlides = isMobile ? slidess : slides;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % activeSlides.length);
        }, 9000);
        return () => clearInterval(interval);
    }, [isMobile]);

    const activeSlides = isMobile ? slidess : slides;

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className={`relative w-full ${
                    isMobile
                        ? "h-[400px] sm:hidden flex"
                        : "hidden sm:flex h-[195px] sm:h-[318px] md:h-[385px] lg:h-[510px] xl:h-[630px] 2xl:h-screen"
                }`}
            >
                {/* Background Images */}
                {activeSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                        }}
                    ></div>
                ))}

                {/* Animated Text & Button */}
                <div className="absolute inset-0 flex items-center">
                    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 1 }}
                                style={{ color: activeSlides[currentIndex].color }}
                            >
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl  2xl:text-7xl font-bold drop-shadow-lg mb-2 sm:mb-5 leading-tight">
                                    {activeSlides[currentIndex].text}
                                </h1>
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="bg-white text-md sm:text-md lg:text-lg text-gray-900 cursor-pointer px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                                >
                                    Shop Now
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                    {activeSlides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${
                                index === currentIndex ? "bg-white" : "bg-gray-400"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
