import { Link } from "react-router-dom";

import chilledWaterImg from "../../../assets/images/services/pipe-insulation.jpg";
import maintenanceImg from "../../../assets/images/services//maintenance-replacement.jpg";
import coilImg from "../../../assets/images/services/coil-anti-corrosion-coating.jpg";
import overhaulingImg from "../../../assets/images/services/overhauling-motor-winding.jpg";
import amcImg from "../../../assets/images/services/amc-contract.jpg";

export default function ServicesList() {
    const services = [
        {
            name: "Chilled Water Pipeline & Flushing",
            description: "Comprehensive chilled water pipeline installation, flushing and commissioning services.",
            image: chilledWaterImg,
            link: "/services/chilled-water-pipeline-flushing",
        },
        {
            name: "A/C, Chiller & Coldroom Maintenance",
            description: "Routine maintenance and servicing for A/Cs, chillers and cold rooms for optimal performance.",
            image: maintenanceImg,
            link: "/services/maintenance",
        },
        {
            name: "Coil Manufacturing & Replacements",
            description: "Custom coil manufacturing and replacement services for various cooling systems.",
            image: coilImg,
            link: "/services/coil-manufacturing",
        },
        {
            name: "Overhauling & Winding",
            description: "Professional overhauling and winding services to extend equipment lifespan.",
            image: overhaulingImg,
            link: "/services/overhauling-winding",
        },
        {
            name: "AMC",
            description: "Annual Maintenance Contracts providing long-term coverage and priority service support.",
            image: amcImg,
            link: "/services/amc",
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Our Services
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Discover our complete range of professional HVAC and cooling system services.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Link
                            to={service.link}
                            key={index}
                            className="group rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-emerald-500/60 shadow hover:shadow-lg transition-all"
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-emerald-500 transition">
                                    {service.name}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
