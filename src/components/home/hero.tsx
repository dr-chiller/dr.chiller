import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
    // {
    //     header: 'Dr.Chiller',
    //     description: 'Trusted experts in industrial and commercial cooling solutions across the region.',
    //     button: '/products',
    //     image: '/hero2.jpeg',
    // },
    {
        header: 'Water Chillers',
        description: 'Our energy-efficient chillers deliver optimal cooling for industrial, commercial, and residential spaces.',
        button: '/products/water-chillers',
        image: '/hero2.jpeg',
    },
    {
        header: 'Cold Rooms',
        description: 'Custom-built cold rooms for food, pharmaceuticals, and logistics—engineered for reliability.',
        button: '/products/cold-rooms',
        image: '/hero3.jpeg',
    },
    {
        header: 'A/C & Chiller Rentals',
        description: 'Flexible short and long-term rentals of high-capacity air conditioning and chilling systems.',
        button: '/rentals',
        image: '/hero4.jpeg',
    },
    {
        header: 'Chilled Water Pipeline Works',
        description: 'Turnkey pipeline installations with expert design and maintenance support.',
        button: '/services/pipeline',
        image: '/hero5.jpeg',
    },
    {
        header: 'Chilled Water Flushing',
        description: 'Efficient flushing services to maintain chilled water system performance.',
        button: '/services/pipeline',
        image: '/hero6.jpeg',
    },
    {
        header: 'Cooling Towers',
        description: 'Engineered cooling towers for HVAC and process cooling—built to perform in all climates.',
        button: '/products/cooling-towers',
        image: '/hero7.jpeg',
    },
    {
        header: 'A/C Maintenance',
        description: 'Professional AC servicing to keep systems running at peak efficiency.',
        button: '/products/cooling-towers',
        image: '/hero8.jpg',
    },
    {
        header: 'Coil Replacements',
        description: 'Custom coil manufacturing and replacements to restore performance and efficiency.',
        button: '/services/coil-replacement',
        image: '/hero9.jpg',
    },
    {
        header: 'Heat Exchangers',
        description: 'Maximize energy transfer efficiency with our top-grade heat exchangers.',
        button: '/products/heat-exchangers',
        image: '/hero10.jpg',
    },
    {
        header: 'Compressor Overhauling',
        description: 'Extend your compressor lifespan with expert overhauling and precision servicing.',
        button: '/services/compressor-overhauling',
        image: '/hero11.jpg',
    },
];

const Hero = () => {
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
        <div className="relative h-screen overflow-hidden">
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
                <div className="w-full md:w-3/4 h-full flex flex-col justify-center items-start p-6 md:p-12 text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-emerald-500 font-bold mb-1 md:mb-4 font-[Montserrat]">
                        {slides[currentIndex].header}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-2 md:mb-6 font-[Montserrat] max-w-2xl">
                        {slides[currentIndex].description}
                    </p>
                    <Link
                        to={slides[currentIndex].button}
                        className="px-3 py-2 md:px-6 md:py-3 bg-emerald-500 text-black font-semibold rounded-lg shadow hover:bg-emerald-700 transition"
                    >
                        Explore
                    </Link>
                </div>

                {/* Desktop Preview List */}
                <div className="hidden md:flex w-1/4 h-full flex-col justify-center space-y-3 p-4">
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
                </div>

                {/* Mobile Buttons */}
                <div className="absolute bottom-2 md:hidden w-full px-4 flex gap-2 overflow-x-auto no-scrollbar">
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
                </div>
            </div>
        </div>
    );
};

export default Hero;
