import cooling_tower from "../../../assets/images/products/cooling-tower.jpg";

const HeatExchangersSubSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center gap-10 py-12 px-6 sm:px-16 rounded-2xl shadow-lg">
            {/* Image */}
            <div className="flex-1">
                <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-105">
                    <img
                        src={cooling_tower}
                        alt="Cooling Tower"
                        className="w-full h-80 object-cover"
                    />
                </div>
            </div>

            {/* Text */}
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                    Cooling Towers
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Our cooling towers are designed for maximum heat rejection with low noise and
                    minimal energy consumption — making them ideal for industrial and HVAC
                    applications. Using corrosion-resistant materials and efficient fill media,
                    they deliver reliable performance in even the most demanding climates.
                </p>

                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                        <span className="text-emerald-500 text-lg mr-3">❄</span>
                        Fiberglass or stainless steel construction
                    </li>
                    <li className="flex items-start">
                        <span className="text-emerald-500 text-lg mr-3">❄</span>
                        Low-noise fan systems for minimal acoustic impact
                    </li>
                    <li className="flex items-start">
                        <span className="text-emerald-500 text-lg mr-3">❄</span>
                        High-efficiency PVC fill media for superior cooling
                    </li>
                    <li className="flex items-start">
                        <span className="text-emerald-500 text-lg mr-3">❄</span>
                        Available in single- and multi-cell configurations
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HeatExchangersSubSection;
