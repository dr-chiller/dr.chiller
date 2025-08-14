const Rentals = () => {
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-10 items-center">

                {/* Image */}
                <div className="relative w-full h-64 sm:h-80 md:h-full overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src="/rental1.jpeg"
                        alt="AC & Water Chiller Rentals"
                        className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Rent A/C Units & Water Chillers
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        Whether you need to keep a cold plunge pool at the perfect temperature
                        or cool down a large space, we offer reliable A/C units and water chillers
                        for short or long-term rental. Perfect for athletic facilities, physical therapy
                        centers, and events requiring precise cooling.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                        Our rental solutions are quick to install, energy-efficient, and backed by
                        expert service — ensuring comfort and performance when you need it most.
                    </p>
                    <a
                        href="/rentals"
                        className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-md transition"
                    >
                        Know More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Rentals;
