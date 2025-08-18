import { Wrench, Droplets, ShieldCheck, Repeat2, Mail } from "lucide-react";

import coil_replace from "../../../assets/images/services/coil-replacement.jpg";
import anti_corrosion from "../../../assets/images/services/coil-anti-corrosion-coating.jpg";
import gas_recovery from "../../../assets/images/services/coil-gas-recovery.jpg";
import brazing from "../../../assets/images/services/coil-copper-brazing.jpg";
import pressure_test from "../../../assets/images/services/coil-nitrogen-pressure-testing.jpg";
import vacuum_charge from "../../../assets/images/services/coil-scrap.jpg";
import { Link } from "react-router-dom";

const coilServices = [
    {
        title: "Coil Replacement (AC / Chiller / Cold Room)",
        image: coil_replace,
        icon: <Wrench size={32} />,
        blurb:
            "Replacement of damaged condenser and evaporator coils for chillers, ACs and cold rooms using high-efficiency copper/aluminium construction.",
        bullets: [
            "Condenser and evaporator coils",
            "On-site removal and installation",
            "Bespoke coil fabrication available",
        ],
    },
    {
        title: "Anti-Corrosion Coating",
        image: anti_corrosion,
        icon: <ShieldCheck size={32} />,
        blurb:
            "Protective coating for coils exposed to corrosive environments (coastal / industrial). Extends service life and improves performance.",
        bullets: [
            "Epoxy / hydrophilic coating",
            "High salt-spray resistance",
            "Suitable for new & existing coils",
        ],
    },
    {
        title: "Gas Recovery",
        image: gas_recovery,
        icon: <Droplets size={32} />,
        blurb:
            "Safe recovery of refrigerant gases prior to coil replacement or equipment maintenance.",
        bullets: [
            "R22 / R134a / R407c / R410a",
            "Compliant with environmental standards",
            "Re-use after filtration & charging",
        ],
    },
    {
        title: "Copper Brazing",
        image: brazing,
        icon: <Wrench size={32} />,
        blurb:
            "Professional brazing of copper tubes and joints for leak-free and long-lasting connections.",
        bullets: [
            "High-temperature oxygen-acetylene brazing",
            "Leak-proof joints",
            "Conforms to HVAC standards",
        ],
    },
    {
        title: "Nitrogen Pressure Testing",
        image: pressure_test,
        icon: <ShieldCheck size={32} />,
        blurb:
            "Leak detection using nitrogen pressurisation before charging refrigerant into the system.",
        bullets: [
            "Accurate detection of micro-leaks",
            "Ensures system integrity",
            "Recommended after coil replacement",
        ],
    },
    {
        title: "Vacuuming, Gas Charging & Coil Scrap Purchase",
        image: vacuum_charge,
        icon: <Repeat2 size={32} />,
        blurb:
            "Full commissioning after coil replacement including vacuuming and charging. We also purchase scrap coils.",
        bullets: [
            "Deep-vacuum & refrigerant charging",
            "Functional testing",
            "Scrap copper / aluminium coil buy-back",
        ],
    },
];

const CoilManufacturingSections = () => {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
                    Coil Manufacturing & Replacement Services
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {coilServices.map((item, i) => (
                        <div
                            key={i}
                            className="group bg-white dark:bg-gray-900 rounded-xl border border-transparent dark:border-gray-800
                p-3 shadow hover:shadow-lg hover:border-emerald-500/60 dark:hover:border-emerald-500/80 transition-all"
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-36 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Title / Icon */}
                            <div className="flex items-center gap-3 mb-4 text-emerald-600 dark:text-emerald-400">
                                {item.icon}
                                <span className="text-lg font-semibold">{item.title}</span>
                            </div>

                            {/* Description */}
                            <p className="text-base mb-3 text-gray-700 dark:text-gray-300">
                                {item.blurb}
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
                                {item.bullets.map((b, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-emerald-500">❄</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
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

export default CoilManufacturingSections;
