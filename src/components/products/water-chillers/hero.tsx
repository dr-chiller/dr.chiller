const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
                <p className="text-emerald-500 text-lg font-semibold mb-2">
                    Cooling That Works!
                </p>

                <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight dark:text-white">
                    Precision. Performance. Reliability.
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our water chillers, water coolers, and heat pumps are engineered for industrial
                    and commercial needs — combining energy efficiency with dependable performance.
                    From manufacturing plants to office spaces, we help you stay cool under pressure.
                </p>
            </div>

            <div className="relative flex justify-end items-center pb-12">
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 ease-out">
                        <img
                            src="/hero1.jpeg"
                            alt="Water Chiller"
                            className="w-84 h-auto object-cover"
                        />
                    </div>

                    <div className="absolute top-36 sm:-left-30 overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-800 transform hover:scale-105 transition duration-500 ease-out">
                        <img
                            src="/hero2.jpeg"
                            alt="Cooling Equipment"
                            className="w-64 h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
