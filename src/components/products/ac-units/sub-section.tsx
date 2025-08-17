import air_curtain from "../../../assets/images/products/air-curtain.jpg";

const ACUnitsSubSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center gap-10 py-12 px-6 sm:px-16 rounded-2xl shadow-lg">
            {/* Image */}
            <div className="flex-1">
                <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-105">
                    <img
                        src={air_curtain}
                        alt="Air Curtain"
                        className="w-full h-72 object-cover"
                    />
                </div>
            </div>

            {/* Text */}
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                    Air Curtains
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Our commercial and industrial air curtains are designed to deliver a clean, conditioned
                    indoor environment while preventing hot air, dust and insects from entering through open
                    doorways. A perfect solution for energy-conscious facilities that experience frequent door openings.
                </p>

                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                        <span className="text-emerald-500 text-lg mr-3">❄</span>
                        Prevents heat, dust and insects entering through open doors
                    </li>
                    <li className="flex items-start">
                        <span className="text-emerald-500 text-lg mr-3">❄</span>
                        Improves air conditioning efficiency by regulating conditioned air loss
                    </li>
                    <li className="flex items-start">
                        <span className="text-emerald-500 text-lg mr-3">❄</span>
                        Available in commercial & industrial duty models (up to 3m height)
                    </li>
                    <li className="flex items-start">
                        <span className="text-emerald-500 text-lg mr-3">❄</span>
                        Low-noise centrifugal fan units with easy installation
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ACUnitsSubSection;
