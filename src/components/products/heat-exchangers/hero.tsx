import heat_exchangers_1 from "../../../assets/images/products/heat-exchangers-1.jpg";
import heat_exchangers_2 from "../../../assets/images/products/heat-exchangers-2.webp";
const HeatExchangersHero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
                <p className="text-emerald-500 text-lg font-semibold mb-2">
                    Efficient Thermal Transfer
                </p>

                <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight dark:text-white">
                    Heat Exchangers & Cooling Towers
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    We provide high-performance shell & tube and plate heat exchangers designed for
                    demanding industrial use, along with cooling towers engineered for energy-efficient thermal
                    dissipation. Whether you require copper, stainless steel, titanium or PP constructions,
                    our systems deliver reliable heat transfer for every application.
                </p>
            </div>

            {/* Images */}
            <div className="relative flex justify-center md:justify-end items-center pb-20">
                <div className="relative">
                    {/* Main Image */}
                    <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 ease-out">
                        <img
                            src={heat_exchangers_1}
                            alt="Heat Exchanger"
                            className="w-84 h-auto object-cover"
                        />
                    </div>

                    {/* Overlapping Image */}
                    <div className="absolute top-36 sm:left-10 lg:-left-28 overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-800 transform hover:scale-105 transition duration-500 ease-out">
                        <img
                            src={heat_exchangers_2}
                            alt="Cooling Tower"
                            className="w-64 h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatExchangersHero;
