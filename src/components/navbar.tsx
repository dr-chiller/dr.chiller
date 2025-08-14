import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMoon, BiSearch, BiSun } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showDropdownP, setShowDropdownP] = useState(false);
    const [showDropdownS, setShowDropdownS] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownTimeoutP, setDropdownTimeoutP] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [dropdownTimeoutS, setDropdownTimeoutS] = useState<ReturnType<typeof setTimeout> | null>(null);

    const toggleDark = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleMouseEnterP = () => {
        if (dropdownTimeoutP) clearTimeout(dropdownTimeoutP);
        setShowDropdownP(true);
    };

    const handleMouseLeaveP = () => {
        const timeout = setTimeout(() => setShowDropdownP(false), 200);
        setDropdownTimeoutP(timeout);
    };
    const handleMouseEnterS = () => {
        if (dropdownTimeoutS) clearTimeout(dropdownTimeoutS);
        setShowDropdownS(true);
    };

    const handleMouseLeaveS = () => {
        const timeout = setTimeout(() => setShowDropdownS(false), 200);
        setDropdownTimeoutS(timeout);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.05);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLink =
        "text-emerald-500 dark:text-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-500 font-medium transition-colors cursor-pointer";

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
                            onMouseEnter={handleMouseEnterP}
                            onMouseLeave={handleMouseLeaveP}
                        >
                            <button className={navLink}>Products</button>
                            {/* Dropdown */}
                            {showDropdownP && (
                                <div className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-20 w-64">
                                    <ul className="py-2">
                                        {[
                                            { label: "All Products", path: "/products" },
                                            { label: "Water Chillers", path: "/products/water-chillers" },
                                            { label: "Cold Rooms", path: "/products/cold-rooms" },
                                            { label: "Cooling Towers", path: "/products/cooling-towers" },
                                            { label: "Heat Exchangers", path: "/products/heat-exchangers" },
                                        ].map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={item.path}
                                                    className={`block px-4 py-2 ${index === 0 ? "text-base" : "text-sm" } hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-emerald-400 text-gray-800 dark:text-gray-200`}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnterS}
                            onMouseLeave={handleMouseLeaveS}
                        >
                            <button className={navLink}>Services</button>
                            {showDropdownS && (
                                <div className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-20 w-64">
                                    <ul className="py-2">
                                        {[
                                            "Chilled Water Pipeline Works",
                                            "Chilled Water Flushing",
                                            "A/C Maintenance",
                                            "Compressor Overhauling",
                                            "Coil Replacements",
                                        ].map((item, index) => (
                                            <li
                                                key={index}
                                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm hover:text-emerald-400 text-gray-800 dark:text-gray-200 cursor-pointer"
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
                            <ul className="py-2">
                                        {[
                                            { label: "All Products", path: "/products" },
                                            { label: "Water Chillers", path: "/products/water-chillers" },
                                            { label: "Cold Rooms", path: "/products/cold-rooms" },
                                            { label: "Cooling Towers", path: "/products/cooling-towers" },
                                            { label: "Heat Exchangers", path: "/products/heat-exchangers" },
                                        ].map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={item.path}
                                                    className={`block px-4 py-2 ${index === 0 ? "text-base" : "text-sm"} hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-emerald-400 text-emerald-600 dark:text-gray-200`}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                        </details>
                    </div>

                    <div className="block">
                        <details className="group">
                            <summary className={`${navLink} cursor-pointer`}>Services</summary>
                            <ul className="ml-4 mt-2 space-y-2">
                                {[
                                    "Chilled Water Pipeline Works",
                                    "Chilled Water Flushing",
                                    "A/C Maintenance",
                                    "Compressor Overhauling",
                                    "Coil Replacements",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="cursor-pointer text-sm text-emerald-400 hover:text-green-500"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </div>

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
