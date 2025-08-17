import coil_1 from "../../../assets/images/services/coil-1.jpg";
import coil_2 from "../../../assets/images/services/coil-2.jpg";

const CoilManufacturingHero = () => {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text */}
                <div>
                    <p className="text-emerald-500 text-lg font-medium mb-2">
                        Coil Manufacturing & Replacement
                    </p>

                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        Custom-Built • High Efficiency • Long Life
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        We supply and replace copper/Aluminium coils for HVAC and industrial
                        chiller systems. Whether it's a bespoke coil for a retrofit or a
                        complete replacement of damaged tubes/fins, our team designs and
                        installs tailored solutions to match your equipment and performance
                        requirements.
                    </p>
                </div>

                {/* Images */}
                <div className="flex justify-end">
                    <div className="relative flex justify-center gap-10 sm:mr-36 md:mr-2 lg:mr-20 pb-20">
                        {/* First Image */}
                        <div className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <img
                                src={coil_1}
                                alt="Coil Manufacturing"
                                className="w-40 h-72 object-cover"
                            />
                        </div>

                        {/* Second stepped image */}
                        <div className="absolute -left-45 top-20 overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <img
                                src={coil_2}
                                alt="Coil Replacement"
                                className="w-40 h-72 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoilManufacturingHero;
