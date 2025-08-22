import maintenance_1 from "../../../assets/images/services/maintenance-1.webp";
import maintenance_2 from "../../../assets/images/services/maintenance-2.webp";

const MaintenanceHero = () => {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div>
                    <p className="text-emerald-500 text-lg font-medium mb-2">
                        AC, Chiller & Cold Room Maintenance
                    </p>

                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        Preventive • Corrective • Annual Contracts
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        We provide complete servicing, troubleshooting and refurbishment for
                        all types of AC, chiller and cold room systems. From mechanical repairs
                        to regular cleaning and flushing, our qualified technicians keep your
                        equipment running efficiently and avoid costly breakdowns.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="relative flex justify-center gap-10 mr-45 md:mr-50 lg:mr-40 pb-20">
                        <div className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <img
                                src={maintenance_1}
                                alt="AC Maintenance"
                                className="w-40 h-72 object-cover"
                            />
                        </div>

                        <div className="absolute -right-45 top-20 overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
                            <img
                                src={maintenance_2}
                                alt="Chiller Maintenance"
                                className="w-40 h-72 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaintenanceHero;
