const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
                <p className="text-emerald-500 text-lg font-semibold mb-2">
                    Cold Storage, Perfectly Engineered
                </p>

                <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight dark:text-white">
                    Our Cold Storage & Ice Production Solutions
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    From fresh produce to frozen seafood, our cold rooms and ice block machines
                    maintain precise temperatures from <strong>-40°C to +20°C</strong> for any
                    application — keeping your products fresh, safe, and ready for market.
                </p>
            </div>

            {/* Right Images */}
            <div className="relative flex justify-center md:justify-end items-center pb-10">
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 ease-out">
                        <img
                            src="/hero1.jpeg"
                            alt="Cold Room"
                            className="w-84 h-auto object-cover"
                        />
                    </div>

                    <div className="absolute top-35 lg:top-6 left-1 sm:left-10 lg:-left-50 overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-800 transform hover:scale-105 transition duration-500 ease-out">
                        <img
                            src="/hero1.jpeg"
                            alt="Ice Block Machine"
                            className="w-44 sm:w-64 h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
