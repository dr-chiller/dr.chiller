import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        header: "A/C Units",
        description:
            "Robust air conditioning systems for residential, commercial and industrial environments.",
        button: "/products/cooling-towers",
        image: "/hero3.jpg",
    },
    {
        header: "Heat Exchangers",
        description:
            "High-performance heat exchangers for efficient thermal transfer in HVAC and process systems.",
        button: "/products/heat-exchangers",
        image: "/hero4.jpg",
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
        button: "/products/cooling-towers",
        image: "/hero7.jpg",
    },
    {
        header: "Coil Manufacturing & Replacements",
        description:
            "Custom coil fabrication and replacement services to restore capacity and improve system efficiency.",
        button: "/services/coil-replacement",
        image: "/hero8.jpg",
    },
    {
        header: "Overhauling & Winding",
        description:
            "Professional compressor overhauling and motor winding services to extend equipment lifespan.",
        button: "/services/compressor-overhauling",
        image: "/hero9.png",
    },
    {
        header: "AMC",
        description:
            "Annual Maintenance Contracts providing priority support and long-term service coverage.",
        button: "/services/pipeline",
        image: "/hero10.jpg",
    },
];

const HomeHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Preload all images once
    useEffect(() => {
        slides.forEach(slide => {
            const img = new Image();
            img.src = slide.image;
        });
    }, []);

    // Auto slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            className="relative h-screen overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Background crossfade layer */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out 
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                ))}
            </div>

            {/* Overlay for darkening */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center w-full h-full md:pt-10">
                {/* Main Slide Content */}
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-7/10 flex flex-col gap-15 md:gap-30 p-6 md:p-12 text-white"
                >
                    {/* Brand Block in the middle */}
                    <div className="flex flex-row gap-3 items-start justify-start flex-1 mt-60 md:mt-20">
                        <img src="/logo.png" alt="Dr.Chiller Logo" className="w-14 h-14 mb-2" />
                        <div>
                            <h4 className="text-xl md:text-2xl font-bold text-white">Dr.Chiller</h4>
                            <span className="md:text-xs text-sm font-semibold text-emerald-400 tracking-wide uppercase">
                                Skill to Chill
                            </span>
                        </div>
                    </div>

                    {/* Slide Content at the bottom */}
                    <div className="">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl text-emerald-500 font-bold mb-2 md:mb-4 font-[Montserrat]">
                            {slides[currentIndex].header}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-3 md:mb-6 font-[Montserrat] max-w-2xl">
                            {slides[currentIndex].description}
                        </p>
                        <Link
                            to={slides[currentIndex].button}
                            className="px-3 py-2 md:px-6 md:py-3 bg-emerald-500 text-black font-semibold rounded-lg shadow hover:bg-emerald-700 transition"
                        >
                            Explore
                        </Link>
                    </div>
                </motion.div>




                {/* Desktop Preview List */}
                <motion.div
                    className="hidden md:flex w-3/10 h-full flex-col justify-center space-y-3 p-4"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    <div className="backdrop-blur bg-transparent rounded-lg p-3 pt-4 max-h-full overflow-y-auto">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 font-[Montserrat] shadow-md mb-2 
                ${index === currentIndex
                                        ? 'bg-emerald-500 text-white'
                                        : 'bg-white dark:bg-gray-900 dark:text-gray-100 text-gray-800'}
                hover:scale-105`}
                            >
                                {slide.header}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile Buttons */}
                <motion.div
                    className="absolute bottom-2 md:hidden w-full px-4 flex gap-2 overflow-x-auto no-scrollbar"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex-shrink-0 px-4 py-2 rounded-full font-[Montserrat] text-sm transition-all 
              ${index === currentIndex
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-white dark:bg-gray-900 text-black dark:text-white'}
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
