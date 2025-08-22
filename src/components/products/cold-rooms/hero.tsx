import cold_rooms_1 from "../../../assets/images/products/cold-rooms-1.webp";
import cold_rooms_2 from "../../../assets/images/products/cold-rooms-2.webp";
const ColdRoomsHero = () => {
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
            <div className="relative flex justify-center md:justify-end items-center pb-20 lg:pb-0">
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 ease-out">
                        <img
                            src={cold_rooms_1}
                            alt="Cold Room"
                            className="w-84 lg:w-100 h-auto object-cover"
                        />
                    </div>

                    <div className="absolute top-36 sm:left-10 lg:-left-32 lg:top-10 overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-800 transform hover:scale-105 transition duration-500 ease-out">
                        <img
                            src={cold_rooms_2}
                            alt="Ice Block Machine"
                            className="w-64 h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColdRoomsHero;
