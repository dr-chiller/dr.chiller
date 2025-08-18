import { Wrench, RefreshCcw, ShieldCheck, Cog, Droplets, Zap, Mail } from "lucide-react";

import maintenance_installation from "../../../assets/images/services/maintenance-installation.jpg";
import maintenance_spare_replacement from "../../../assets/images/services/maintenance-replacement.jpg";
import maintenance_coil from "../../../assets/images/services/maintenance-condenser-coil.jpg";
import maintenance_duct_cleaning from "../../../assets/images/services/maintenance-duct-cleaning.jpeg";
import maintenance_panel_rewiring from "../../../assets/images/services/maintenance-electric-panel.jpg";
import maintenance_water_service from "../../../assets/images/services/maintenance-water-service.jpg";
import { Link } from "react-router-dom";

const maintenanceServices = [
    {
        title: "Installation of New / Used Units",
        image: maintenance_installation,
        icon: <Wrench size={30} />,
        blurb: "Professional installation and commissioning of AC, chillers and cold room units.",
        bullets: [
            "Cold room AC systems",
            "Industrial chillers (new & refurbished)",
        ],
    },
    {
        title: "Spare Parts Replacement",
        image: maintenance_spare_replacement,
        icon: <RefreshCcw size={30} />,
        blurb: "Original spare parts for reliable, long lasting performance.",
        bullets: ["Compressors, fans, motors", "Control valves & sensors"],
    },
    {
        title: "Condenser Coil Replacement",
        image: maintenance_coil,
        icon: <ShieldCheck size={30} />,
        blurb: "Faulty condenser coils replaced with high-efficiency models.",
        bullets: ["High-efficiency coils", "Quick on-site retroﬁt"],
    },
    {
        title: "Duct Cleaning",
        image: maintenance_duct_cleaning,
        icon: <Cog size={30} />,
        blurb: "Thorough duct cleaning to improve air quality and airflow.",
        bullets: [
            "Removal of dust & microbial growth",
            "Improves airflow performance",
        ],
    },
    {
        title: "Electric Panel Rewiring",
        image: maintenance_panel_rewiring,
        icon: <Zap size={30} />,
        blurb: "Repair and rewiring of electrical control panels for safe operation.",
        bullets: [
            "Control panel overhauling",
            "Wiring upgrades & safety checks",
        ],
    },
    {
        title: "Gas Leak Arresting & Water Servicing",
        image: maintenance_water_service,
        icon: <Droplets size={30} />,
        blurb: "Complete refrigerant leak detection and water servicing of systems.",
        bullets: [
            "Leak detection & refrigerant recharge",
            "Full water service of condensing units",
        ],
    },
];

const MaintenanceSections = () => {
    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
                    Our AC, Chiller & Cold Room Maintenance Services
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {maintenanceServices.map((s, i) => (
                        <div
                            key={i}
                            className="group bg-white dark:bg-gray-900 rounded-xl p-3 border border-transparent dark:border-gray-800
                overflow-hidden shadow hover:shadow-lg hover:border-emerald-500/50 dark:hover:border-emerald-500/80
                transition-all"
                        >
                            <img
                                src={s.image}
                                alt={s.title}
                                className="h-32 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />

                            <div className="p-5">
                                <div className="flex items-center gap-3 mb-2 text-emerald-600 dark:text-emerald-400">
                                    {s.icon}
                                    <h3 className="font-semibold">{s.title}</h3>
                                </div>

                                <p className="text-base mb-3 text-gray-700 dark:text-gray-300">
                                    {s.blurb}
                                </p>

                                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
                                    {s.bullets.map((b, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-emerald-500">❄</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <Link
                    to="/contact-us"
                    className="group fixed z-10 right-4 bottom-24 flex items-center bg-emerald-600 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-700 transition-all duration-300"
                >
                    <Mail />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap">
                        Contact Us
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default MaintenanceSections;
