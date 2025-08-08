import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import hero1 from "../assets/71xSY7NZXNL.jpg"

const slides = [
    {
        header: 'Dr.Chiller',
        description: 'Trusted experts in industrial and commercial cooling solutions across the region.',
        button: '/products',
        image: '/hero1.png',
    },
    {
        header: 'Water Chillers',
        description: 'Our energy-efficient chillers deliver optimal cooling for industrial, commercial, and residential spaces.',
        button: '/products/water-chillers',
        image: hero1,
    },
    {
        header: 'Cold Rooms',
        description: 'Custom-built cold rooms for food, pharmaceuticals, and logistics—engineered for reliability.',
        button: '/products/cold-rooms',
        image: '/hero2.jpg',
    },
    {
        header: 'A/C & Chiller Rentals',
        description: 'Flexible short and long-term rentals of high-capacity air conditioning and chilling systems.',
        button: '/rentals',
        image: '/hero3.jpg',
    },
    {
        header: 'Chilled Water Piping Works',
        description: 'Turnkey pipeline installations with expert design and maintenance support.',
        button: '/services/pipeline',
        image: '/hero8.jpg',
    },
    {
        header: 'Chilled Water Flushing',
        description: 'Turnkey pipeline installations with expert design and maintenance support.',
        button: '/services/pipeline',
        image: '/hero9.jpg',
    },
    {
        header: 'Cooling Towers',
        description: 'Engineered cooling towers for HVAC and process cooling—built to perform in all climates.',
        button: '/products/cooling-towers',
        image: '/hero6.jpg',
    },
    {
        header: 'A/C Maintainance',
        description: 'Engineered cooling towers for HVAC and process cooling—built to perform in all climates.',
        button: '/products/cooling-towers',
        image: '/hero6.jpg',
    },
    {
        header: 'Coil Replacements',
        description: 'Custom coil manufacturing and replacements to restore performance and efficiency.',
        button: '/services/coil-replacement',
        image: '/hero4.jpg',
    },
    {
        header: 'Heat Exchangers',
        description: 'Maximize energy transfer efficiency with our top-grade heat exchangers.',
        button: '/products/heat-exchangers',
        image: '/hero5.jpg',
    },
    {
        header: 'Compressor Overhauling',
        description: 'Extend your compressor lifespan with expert overhauling and precision servicing.',
        button: '/services/compressor-overhauling',
        image: '/hero7.jpg',
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const current = slides[currentIndex];

    return (
        <div className="relative h-screen overflow-hidden">
            <div
                className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${current.image})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col md:flex-row items-center w-full h-full">
                    {/* Main Slide Content */}
                    <div className="w-full md:w-3/4 h-full flex flex-col justify-center items-start p-6 md:p-12 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[Montserrat]">
                            {current.header}
                        </h1>
                        <p className="text-lg md:text-xl mb-6 font-[Montserrat] max-w-2xl">
                            {current.description}
                        </p>
                        <Link
                            to={current.button}
                            className="px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition"
                        >
                            Explore
                        </Link>
                    </div>

                    {/* Preview List */}
                    <div className="hidden md:flex w-1/4 h-full flex-col justify-center space-y-3 p-4">
                        <div className="backdrop-blur bg-black/30 rounded-lg p-3 pt-4 max-h-full overflow-y-auto">
                            {slides.map((slide, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 font-[Montserrat] shadow-md mb-2 
                                        ${index === currentIndex
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-white/80 dark:bg-gray-800 dark:text-gray-100 text-gray-800'}
                                        hover:scale-105`}
                                >
                                    {slide.header}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="absolute bottom-6 md:hidden w-full px-4 flex gap-2 overflow-x-auto no-scrollbar">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`flex-shrink-0 px-4 py-2 rounded-full font-[Montserrat] text-sm transition-all 
                                    ${index === currentIndex
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white/70 text-black'}
                                    hover:bg-blue-600 hover:text-white`}
                            >
                                {slide.header}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
