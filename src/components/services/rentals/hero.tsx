import rental_1 from "../../../assets/images/services/rental-1.webp";
import rental_2 from "../../../assets/images/services/rental-2.webp";

const RentalsHero = () => {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div>
                    <p className="text-emerald-500 text-lg font-medium mb-2">
                        Short & Long-Term Rental Solutions
                    </p>

                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        AC • Chiller • Genset Rentals
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        We offer a wide range of temporary cooling and power solutions for industrial,
                        commercial and event-based applications. Our rental fleet includes air conditioners,
                        chillers and diesel generators, backed by quick delivery and 24/7 support.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="relative flex justify-center gap-10 mr-45 md:mr-50 lg:mr-40 pb-20">
                        <div className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <img
                                src={rental_1}
                                alt="Rental AC"
                                className="w-40 h-72 object-cover"
                            />
                        </div>

                        <div className="absolute -right-45 top-20 overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <img
                                src={rental_2}
                                alt="Rental Chiller"
                                className="w-40 h-72 object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RentalsHero;
