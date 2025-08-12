import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMoon, BiSearch, BiSun } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    const toggleDark = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleMouseEnter = () => {
        if (dropdownTimeout) clearTimeout(dropdownTimeout);
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => setShowDropdown(false), 200);
        setDropdownTimeout(timeout);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.05);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLink =
        "text-emerald-500 dark:text-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-500 font-medium transition-colors";

    return (
        <nav
            className={`fixed z-20 w-full transition-all duration-300 ${scrolled
                ? "bg-white dark:bg-gray-900 shadow-md dark:shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 dark:text-emerald-400 text-emerald-600">
                        <h2>Dr.Chiller</h2>
                    </div>

                    {/* Hamburger (Mobile) */}
                    <div className="md:hidden flex items-center gap-3">
                        <NavLink to="/search" className={navLink}>
                            <BiSearch size={20} />
                        </NavLink>

                        {/* Theme Toggle */}
                        <button onClick={toggleDark} className={`${navLink} cursor-pointer`}>
                            {isDark ? <BiSun size={20} /> : <BiMoon size={20} />}
                        </button>
                        <button
                            onClick={toggleMobileMenu}
                            className={`${navLink} focus:outline-none`}
                        >
                            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${navLink} ${isActive ? "font-semibold text-green-400 dark:text-green-400" : ""}`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                                `${navLink} ${isActive ? "font-semibold text-green-400 dark:text-green-400" : ""}`
                            }
                        >
                            About Us
                        </NavLink>

                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className={navLink}>Products</button>
                            {showDropdown && (
                                <div className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-20 w-64">
                                    <ul className="py-2">
                                        {[
                                            "Water Chillers",
                                            "Cold Rooms",
                                            "Air Condition Units",
                                            "Compressors",
                                            "Heat Exchangers",
                                            "Swimming Pool Heat Pump",
                                            "Spare parts",
                                        ].map((item, index) => (
                                            <li
                                                key={index}
                                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 cursor-pointer"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <NavLink
                            to="/rentals"
                            className={({ isActive }) =>
                                `${navLink} ${isActive ? "text-green-400 dark:text-green-400 font-semibold" : ""}`
                            }
                        >
                            Rentals
                        </NavLink>

                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `${navLink} ${isActive ? "text-green-400 dark:text-green-400 font-semibold" : ""}`
                            }
                        >
                            Services
                        </NavLink>

                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) =>
                                `${navLink} ${isActive ? "text-green-400 dark:text-green-400 font-semibold" : ""}`
                            }
                        >
                            Contact Us
                        </NavLink>

                        {/* Search with Tooltip */}
                        <div className="relative group">
                            <NavLink to="/search" className={navLink}>
                                <BiSearch size={20} />
                            </NavLink>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                Search
                            </div>
                        </div>

                        {/* Theme Toggle with Tooltip */}
                        <div className="relative group">
                            <button onClick={toggleDark} className={`${navLink} cursor-pointer`}>
                                {isDark ? <BiSun size={20} /> : <BiMoon size={20} />}
                            </button>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                Theme
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden px-4 py-4 space-y-3 bg-white dark:bg-gray-900">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block ${navLink} ${isActive ? "text-blue-700 dark:text-blue-300 font-semibold" : ""}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            `block ${navLink} ${isActive ? "text-blue-700 dark:text-blue-300 font-semibold" : ""}`
                        }
                    >
                        About Us
                    </NavLink>

                    {/* Dropdown for Mobile */}
                    <div className="block">
                        <details className="group">
                            <summary className={`${navLink} cursor-pointer`}>Products</summary>
                            <ul className="ml-4 mt-2 space-y-2">
                                {[
                                    "Water Chillers",
                                    "Cold Rooms",
                                    "Air Condition Units",
                                    "Compressors",
                                    "Heat Exchangers",
                                    "Swimming Pool Heat Pump",
                                    "Spare parts",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-sm text-gray-800 dark:text-gray-200"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </div>

                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `block ${navLink} flex items-center gap-1 ${isActive ? "text-blue-700 dark:text-blue-300 font-semibold" : ""}`
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/rentals"
                        className={({ isActive }) =>
                            `block ${navLink} flex items-center gap-1 ${isActive ? "text-blue-700 dark:text-blue-300 font-semibold" : ""}`
                        }
                    >
                        Rentals
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) =>
                            `block ${navLink} flex items-center gap-1 ${isActive ? "text-blue-700 dark:text-blue-300 font-semibold" : ""}`
                        }
                    >
                        Contact Us
                    </NavLink>
                </div>
            )}
        </nav>
    );

};

export default Navbar;
