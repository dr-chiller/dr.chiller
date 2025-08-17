import pipeline_1 from "../../../assets/images/services/pipeline-1.jpg";
import pipeline_2 from "../../../assets/images/services/pipeline-2.jpg";

const ChilledWaterPipelineHero = () => {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div>
                    <p className="text-emerald-500 text-lg font-medium mb-2">
                        Chilled Water Pipeline & Flushing Services
                    </p>

                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        Design • Installation • Maintenance
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        We specialize in MS/SS/PPR chilled water pipeline projects, including insulation,
                        flushing and modification works. Whether you're commissioning a new system or
                        upgrading an existing one, our team delivers reliable quality and seamless
                        execution for commercial and industrial facilities.
                    </p>
                </div>

                <div className="flex justify-end">
                    <div className="relative flex justify-center gap-10 mr-12 md:mr-2 lg:mr-20 pb-20">
                        <div className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <img
                                src={pipeline_1}
                                alt="Pipeline Works"
                                className="w-40 h-72 object-cover"
                            />
                        </div>

                        <div className="absolute -left-50 top-20 overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <img
                                src={pipeline_2}
                                alt="Pipeline Service"
                                className="w-40 h-72 object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ChilledWaterPipelineHero;
