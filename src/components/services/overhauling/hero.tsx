import overhaul_1 from "../../../assets/images/services/overhauling-1.webp";
import overhaul_2 from "../../../assets/images/services/overhauling-2.webp";

const OverhaulingHero = () => {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Text */}
                <div>
                    <p className="text-emerald-500 text-lg font-medium mb-2">
                        Compressor Overhauling & Rewinding
                    </p>

                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        Precision Repair • Reconditioning • Long Life
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        We offer complete overhauling and rewinding services for compressors, fan motors and blower motors.
                        Our technicians dismantle, clean, inspect and rebuild each unit back to factory standards — ensuring
                        high efficiency, longer life and reduced downtime.
                    </p>
                </div>

                {/* Images */}
                <div className="flex justify-center">
                    <div className="relative flex justify-center gap-10 mr-45 md:mr-50 lg:mr-40 pb-20">
                        {/* First Image */}
                        <div className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <img
                                src={overhaul_1}
                                alt="Compressor Overhauling"
                                className="w-40 h-72 object-cover"
                            />
                        </div>

                        {/* Second Image (slightly stepped) */}
                        <div className="absolute -right-45 top-20 overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <img
                                src={overhaul_2}
                                alt="Motor Rewinding"
                                className="w-40 h-72 object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OverhaulingHero;
