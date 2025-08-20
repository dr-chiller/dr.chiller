import { Wrench, Droplets, ShieldCheck, Repeat2 } from "lucide-react";
import { PiFlowArrow } from "react-icons/pi";

import ms_pipe from "../../../assets/images/services/ms-pipe.jpg";
import pipe_insulation from '../../../assets/images/services/pipe-insulation.jpg';
import chilled_flushing from "../../../assets/images/services/chilled-water-flushing.jpg";
import pipe_alteration from "../../../assets/images/services/pipe-alteration-works.jpg";
import pipe_leak from "../../../assets/images/services/chilled-water-leak.jpeg";
import pipe_fcu from "../../../assets/images/services/chilled-water-fcu.jpg";

const serviceItems = [
    {
        title: "MS / SS / PPR Pipeline Works",
        image: ms_pipe,
        icon: <PiFlowArrow size={32} />,
        id: "ms-ss-ppr",
        blurb: "Complete supply and installation of chilled water pipelines using durable MS / SS / PPR materials.",
        bullets: [
            "Custom fabrication & installation",
            "Industrial-grade materials",
            "Designed for long service life",
        ],
    },
    {
        title: "Pipe Insulation",
        image: pipe_insulation,
        icon: <ShieldCheck size={32} />,
        id: "pipe-insulation",
        blurb: "Thermal insulation for chilled and hot water lines to prevent energy loss and condensation.",
        bullets: [
            "Hot & cold insulation",
            "Closed-cell elastomeric / Armaflex",
            "Prevents condensation and energy loss",
        ],
    },
    {
        title: "Chemical Flushing",
        image: chilled_flushing,
        icon: <Droplets size={32} />,
        id: "chemical-flushing",
        blurb: "Professional chemical flushing to restore pipe flow and remove scale/sludge from chilled-water circuits.",
        bullets: [
            "Removes sludge & scale from chilled water lines",
            "Improves flow & heat transfer efficiency",
            "Safe industrial-grade cleaning agents",
        ],
    },
    {
        title: "Alteration & Extension Works",
        image: pipe_alteration,
        icon: <Wrench size={32} />,
        blurb: "Modification and rerouting of existing chilled water pipeline networks for expansion or layout changes.",
        bullets: [
            "Rerouting of pipelines",
            "Addition of new tapping points",
            "Retrofitting existing networks",
        ],
    },
    {
        title: "Leak Arresting & Valve Replacement",
        image: pipe_leak,
        icon: <Repeat2 size={32} />,
        id: "leak-arresting",
        blurb: "On-site repair and sealing of leaks along with replacement of faulty valves and pressure components.",
        bullets: [
            "In-place repair of leaky joints",
            "Valve replacement & pressure testing",
            "Ensures full system integrity",
        ],
    },
    {
        title: "FCU Installation Works",
        image: pipe_fcu,
        icon: <Wrench size={32} />,
        id: "fcu",
        blurb: "Supply, installation and commissioning of fan-coil units integrated to existing chilled-water systems.",
        bullets: [
            "Ceiling or floor mounted fan-coil units",
            "Piping, insulation & commissioning",
            "Integrated with existing chilled water system",
        ],
    },
];


const ChilledWaterPipelineSections = () => {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10">
                    Our Pipeline & Flushing Services
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceItems.map((item, i) => (
                        <div
                            id={ item.id ? item.id : "" }
                            key={i}
                            className="group bg-white dark:bg-gray-900 rounded-xl border border-transparent dark:border-gray-800
                         p-3 shadow hover:shadow-lg hover:border-emerald-500/60 dark:hover:border-emerald-500/80
                         transition-all"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-36 object-cover rounded-md mb-4 transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="flex items-center gap-3 mb-4 text-emerald-600 dark:text-emerald-400">
                                {item.icon}
                                <span className="text-lg font-semibold">{item.title}</span>
                            </div>

                            <p className="text-base mb-3 text-gray-700 dark:text-gray-300">
                                {item.blurb}
                            </p>

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
            </div>
        </section>
    );
};

export default ChilledWaterPipelineSections;
