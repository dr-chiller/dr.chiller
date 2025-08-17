import ac_units_1 from "../../../assets/images/products/ac-units-1.jpg";
import ac_units_2 from "../../../assets/images/products/ac-units-2.jpg";
const ACUnitsHero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
                <p className="text-emerald-500 text-lg font-semibold mb-2">
                    Comfort Delivered, Every Day
                </p>

                <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight dark:text-white">
                    Air Conditioning Units & Systems
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    From compact split units to large ductable systems, our A/C range is designed to provide
                    reliable and energy-efficient cooling for villas, offices, industrial spaces and special
                    applications. Whether you need steady comfort or critical temperature control, we have
                    the right system engineered to perform in tough GCC conditions.
                </p>
            </div>

            {/* Images */}
            <div className="relative flex justify-center md:justify-end items-center pb-20 lg:pb-0">
                <div className="relative">
                    {/* Main Image */}
                    <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 ease-out">
                        <img
                            src={ac_units_1}
                            alt="A/C Unit"
                            className="w-84 h-auto object-cover"
                        />
                    </div>

                    {/* Overlapping Image */}
                    <div className="absolute top-36 sm:left-10 lg:-left-32 lg:top-5 overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-800 transform hover:scale-105 transition duration-500 ease-out">
                        <img
                            src={ac_units_2}
                            alt="HVAC Equipment"
                            className="w-64 h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ACUnitsHero;
