import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const slides = [
    {
        header: "Water Chillers",
        description:
            "High-efficiency water chillers designed for reliable cooling of industrial and commercial applications.",
        button: "/products/water-chillers",
        image: "/hero1.jpg",
    },
    {
        header: "Cold Rooms",
        description:
            "Custom-built cold rooms and walk-in freezers for food, pharmaceuticals and logistics industries.",
        button: "/products/cold-rooms",
        image: "/hero2.jpg",
    },
    {
        header: "Heat Exchangers",
        description:
            "High-performance heat exchangers for efficient thermal transfer in HVAC and process systems.",
        button: "/products/heat-exchangers",
        image: "/hero4.jpg",
    },
    {
        header: "A/C Units",
        description:
            "Robust air conditioning systems for residential, commercial and industrial environments.",
        button: "/products/ac-units",
        image: "/hero3.jpg",
    },
    {
        header: "A/C, Chiller & Genset Rentals",
        description:
            "Short and long-term rental solutions including A/C units, water chillers and diesel generators.",
        button: "/rentals",
        image: "/hero5.jpeg",
    },
    {
        header: "Chilled Water Pipeline & Flushing",
        description:
            "Design, installation and flushing of chilled water pipelines for efficient system performance.",
        button: "/services/pipeline",
        image: "/hero6.jpeg",
    },
    {
        header: "A/C, Chiller & Coldroom Maintenance",
        description:
            "Preventive and corrective maintenance services for air conditioning, chiller and cold room systems.",
        button: "/products/maintenance",
        image: "/hero7.jpg",
    },
    {
        header: "Coil Manufacturing & Replacements",
        description:
            "Custom coil fabrication and replacement services to restore capacity and improve system efficiency.",
        button: "/services/coil",
        image: "/hero8.jpg",
    },
    {
        header: "Overhauling & Winding",
        description:
            "Professional compressor overhauling and motor winding services to extend equipment lifespan.",
        button: "/services/overhauling",
        image: "/hero9.png",
    },
    {
        header: "AMC",
        description:
            "Annual Maintenance Contracts providing priority support and long-term service coverage.",
        button: "/services/amc",
        image: "/hero10.jpg",
    },
];
const HomeHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        slides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative h-screen overflow-x-hidden overflow-y-hidden"
        >
            {/* Background crossfade */}
            <div className="absolute inset-0 w-screen h-screen">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                ))}
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
                {/* Slide content */}
                <div className="relative z-10 flex flex-col md:w-7/10 h-full text-white p-6 md:p-12">
                    {/* Brand block in middle */}
                    <div className="flex-1 flex items-center gap-3">
                        <img src="/logo.png" className="w-12 h-12 rounded-3xl" alt="Dr.Chiller Logo" />
                        <div>
                            <h4 className="text-xl md:text-2xl font-bold">Dr.Chiller</h4>
                            <span className="text-xs md:text-sm font-semibold text-emerald-400 uppercase">
                                Skill to Chill
                            </span>
                        </div>
                    </div>

                    {/* Slide content pinned to bottom */}
                    <div className="pb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl text-emerald-500 font-bold mb-3">
                            {slides[currentIndex].header}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
                            {slides[currentIndex].description}
                        </p>
                        <Link
                            to={slides[currentIndex].button}
                            className="inline-block px-4 py-2 bg-emerald-500 text-black rounded-md font-semibold shadow hover:bg-emerald-600 transition"
                        >
                            Explore
                        </Link>
                    </div>
                </div>

                {/* Desktop list */}
                <motion.div
                    className="hidden md:flex md:w-3/10 h-full flex-col justify-end space-y-3 p-4"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="backdrop-blur rounded-lg p-3 pt-4 max-h-full overflow-y-auto">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-full text-left px-4 py-2 rounded-md mb-2 shadow transition
                  ${index === currentIndex
                                        ? "bg-emerald-500 text-white"
                                        : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"}
                  hover:scale-105`}
                            >
                                {slide.header}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile buttons */}
                <motion.div
                    className="md:hidden absolute bottom-3 w-full px-4 flex gap-2 overflow-x-auto no-scrollbar"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition
                ${index === currentIndex
                                    ? "bg-emerald-500 text-white"
                                    : "bg-white dark:bg-gray-900 text-black dark:text-white"}
                hover:bg-emerald-600 hover:text-white`}
                        >
                            {slide.header}
                        </button>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HomeHero;
