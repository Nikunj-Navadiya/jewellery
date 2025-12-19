import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import assets from "../assets/assets";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { HiMiniBarsArrowUp } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [goldOpen, setGoldOpen] = useState(false);
    const [diamondOpen, setDiamondOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Prevent background scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    // Check login status from localStorage
    useEffect(() => {
        const userToken = localStorage.getItem("token");
        setIsLoggedIn(!!userToken);
    }, []);

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user"); // if stored
        setIsLoggedIn(false);
        navigate("/login");
    };

    // Handle menu click
    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? "" : menu);
        setGoldOpen(false);
        setDiamondOpen(false);
    };

    // Handle mobile dropdowns (close other when one opens)
    const toggleGold = () => {
        setGoldOpen(!goldOpen);
        setDiamondOpen(false);
    };

    const toggleDiamond = () => {
        setDiamondOpen(!diamondOpen);
        setGoldOpen(false);
    };

    return (
        <header className="w-full  top-0 left-0 bg-white shadow-md z-50">
            {/* 🔹 Top Header Bar */}
            <div className="flex items-center justify-between text-[20px] font-semibold sm:px-[5vw] md:px-[7vw] lg:px-[9vw] px-4 py-4">
                {/* Logo */}
                <div>
                    <Link to={"/"}><img src={assets.logo} alt="Logo" className="h-14" /></Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden xl:flex gap-2 items-center text-color text-md">
                    <Link to={"/"}><li
                        onClick={() => handleMenuClick("Home")}
                        className={`cursor-pointer px-3 py-1 rounded-md transition-all duration-300 ${activeMenu === "Home" ? "text-[#0f484e]" : "hover:text-gray-900"
                            }`}
                    >
                        Home
                    </li></Link>

                    <Link to={"/about"}><li
                        onClick={() => handleMenuClick("About")}
                        className={`cursor-pointer px-3 py-1 rounded-md transition-all duration-300 ${activeMenu === "About" ? "text-[#0f484e]" : "hover:text-gray-900"}`}
                    >
                        About
                    </li></Link>


                    {/* Gold Jewellery Dropdown */}
                    <li
                        onClick={() => handleMenuClick("Gold")}
                        className={`relative group cursor-pointer px-3 py-1 rounded-md transition-all duration-300 ${activeMenu === "Gold" ? "text-[#0f484e]" : "hover:text-gray-900"}`}>
                        Gold Jewellery
                        <ul className="absolute hidden top-10 group-hover:flex bg-white text-color shadow-lg rounded p-3 z-10 gap-4 w-[340px] border border-gray-200">
                            <div className="flex flex-col">
                                <li className="px-4 py-2 hover:bg-gray-100">Rings</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Earrings</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Pendant</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Bracelets</li>
                                <li className="px-4 py-2 hover:bg-gray-100">kada</li>
                            </div>
                            <div className="flex flex-col">
                                <li className="px-4 py-2 hover:bg-gray-100">Chain</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Necklace</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Pendant Set</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Mangalsutra</li>
                            </div>
                        </ul>
                    </li>

                    {/* Diamond Jewellery Dropdown */}
                    <li onClick={() => handleMenuClick("Diamond")}
                        className={`relative group cursor-pointer px-3 py-1 rounded-md transition-all duration-300 ${activeMenu === "Diamond" ? "text-[#0f484e]" : "hover:text-gray-900"}`} >
                        Diamond Jewellery
                        <ul className="absolute top-10 hidden group-hover:block bg-white text-color shadow-lg rounded p-2 z-10 min-w-[180px] border border-gray-200">
                            <li className="px-4 py-2 hover:bg-gray-100">Diamond Ring</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Diamond Earrings</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Diamond Pendant</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Diamond Bracelets</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Diamond Necklace</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Diamond Pendant Set</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Diamond Kada</li>
                        </ul>
                    </li>

                    <Link to={"/contact"}>
                        <li onClick={() => handleMenuClick("Contact")}
                            className={`cursor-pointer px-3 py-1 rounded-md transition-all duration-300 ${activeMenu === "Contact" ? "text-[#0f484e]" : "hover:text-gray-900"}`}>
                            Contact
                        </li>
                    </Link>
                </ul>




                {/* Icons (Visible on all screens now) */}
                <div className="flex gap-3 items-center">

                    <img src={assets.like} alt="like" className="w-6 cursor-pointer" />

                    <img src={assets.bag} alt="bag" className="w-6 cursor-pointer" />

                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="text-sm font-medium border border-[#0f484e] text-[#0f484e] px-3 py-1 rounded-md hover:bg-[#0f484e] hover:text-white transition-all duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login">
                            <img
                                src={assets.user}
                                alt="user"
                                className="w-6 cursor-pointer"
                            />
                        </Link>
                    )}

                    {/* Mobile Toggle Button */}
                    <button onClick={toggleMenu} className="xl:hidden text-2xl focus:outline-none">
                        {menuOpen ? <HiMiniBarsArrowUp /> : <HiMiniBarsArrowDown />}
                    </button>
                </div>
            </div>

            {/* 🔹 Mobile Menu */}
            {menuOpen && (
                <div className="xl:hidden fixed top-[75px] right-0 w-full  h-[85vh] bg-gray-50 z-40 flex flex-col border-t border-gray-200">
                    <div className="overflow-y-scroll flex-1 px-6 py-4 ">
                        <ul className="flex flex-col gap-3 text-lg">
                            <Link to={"/"}>
                                <li onClick={() => {
                                    handleMenuClick("Home");
                                    setMenuOpen(false);
                                }}
                                    className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Home" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                    Home
                                </li>
                            </Link>

                            <Link to={"/about"}><li
                                onClick={() => handleMenuClick("About")}
                                className={`cursor-pointer px-3 py-1 rounded-md transition-all duration-300 ${activeMenu === "About" ? "text-[#0f484e]" : "hover:text-gray-900"}`}
                            >
                                About
                            </li></Link>


                            {/* Gold Dropdown */}
                            <li className="border border-gray-200 rounded-md px-3 py-2">
                                <div
                                    onClick={toggleGold}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <span className="font-medium">Gold Jewellery</span>
                                    {goldOpen ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {goldOpen && (
                                    <ul className="pl-4 mt-2 border-l border-gray-300 flex flex-col gap-2 text-base">

                                        <li onClick={() => {
                                            setMenuOpen(false);
                                            setActiveMenu("Rings");
                                        }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Rings" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Rings
                                        </li>

                                        <li onClick={() => {
                                            setMenuOpen(false);
                                            setActiveMenu("Earrings");
                                        }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Earrings" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Earrings
                                        </li>

                                        <li onClick={() => {
                                            setMenuOpen(false);
                                            setActiveMenu("Pendant");
                                        }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Pendant" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Pendant
                                        </li>

                                        <li onClick={() => {
                                            setMenuOpen(false);
                                            setActiveMenu("Bracelets");
                                        }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Bracelets" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Bracelets
                                        </li>

                                        <li onClick={() => {
                                            setMenuOpen(false);
                                            setActiveMenu("Kada");
                                        }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Lucky" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`} >
                                            Kada
                                        </li>

                                        <li onClick={() => {
                                            setMenuOpen(false);
                                            setActiveMenu("Chain");
                                        }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Chain" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Chain
                                        </li>

                                        <li onClick={() => {
                                            setMenuOpen(false);
                                            setActiveMenu("Necklace");
                                        }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Necklace" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Necklace
                                        </li>

                                        <li onClick={() => {
                                            setMenuOpen(false);
                                            setActiveMenu("Pendant Set");
                                        }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Pendant Set" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}
                                        >
                                            Pendant Set
                                        </li>

                                        <li onClick={() => {
                                            setMenuOpen(false);
                                            setActiveMenu("Mangalsutra");
                                        }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Mangalsutra" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Mangalsutra
                                        </li>

                                    </ul>
                                )}

                            </li>

                            {/* Diamond Dropdown */}
                            <li className="border border-gray-200 rounded-md px-3 py-2">
                                <div
                                    onClick={toggleDiamond}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <span className="font-medium">Diamond Jewellery</span>
                                    {diamondOpen ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {diamondOpen && (
                                    <ul className="pl-4 mt-2 border-l border-gray-300 flex flex-col gap-2 text-base">
                                        <li
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setActiveMenu("Diamond Ring");
                                            }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "necklace" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Diamond Ring
                                        </li>

                                        <li
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setActiveMenu("Diamond Earrings");
                                            }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300  ${activeMenu === "earrings" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Diamond Earrings
                                        </li>

                                        <li
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setActiveMenu("Diamond Pendant");
                                            }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "bracelets" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Diamond Pendant
                                        </li>

                                        <li
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setActiveMenu("Diamond Bracelets");
                                            }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "rings" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Diamond Bracelets
                                        </li>

                                        <li
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setActiveMenu("Diamond Necklace");
                                            }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "rings" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Diamond Necklace
                                        </li>

                                        <li
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setActiveMenu("Diamond Pendant Set");
                                            }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "rings" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Diamond Pendant Set
                                        </li>

                                        <li
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setActiveMenu("Diamond Kada");
                                            }}
                                            className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "rings" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                            Diamond Kada
                                        </li>
                                    </ul>
                                )}

                            </li>

                            <Link to={"/contact"}>
                                <li
                                    onClick={() => {
                                        handleMenuClick("Contact");
                                        setMenuOpen(false);
                                    }}
                                    className={`cursor-pointer px-3 py-2 border rounded-md transition-all duration-300 ${activeMenu === "Contact" ? "border-[#0f484e] text-[#0f484e]" : "border-gray-200 hover:border-[#0f484e]"}`}>
                                    Contact
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
