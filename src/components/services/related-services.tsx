import { Link } from "react-router-dom";

import rentalImg from "../../assets/images/services/rental-ac.jpg";
import chilledWaterImg from "../../assets/images/services/pipe-insulation.jpg";
import maintenanceImg from "../../assets/images/services//maintenance-replacement.jpg";
import coilImg from "../../assets/images/services/coil-anti-corrosion-coating.jpg";
import overhaulingImg from "../../assets/images/services/overhauling-motor-winding.jpg";
import amcImg from "../../assets/images/services/amc-contract.jpg";

const allServices = [
    {
        name: "Rentals",
        image: rentalImg,
        link: "/services/rentals",
    },
    {
        name: "Chilled Water Pipeline & Flushing",
        image: chilledWaterImg,
        link: "/services/chilled-water-pipeline-and-flushing",
    },
    {
        name: "A/C, Chiller & Coldroom Maintenance",
        image: maintenanceImg,
        link: "/services/ac-chiller-coldroom-maintenance",
    },
    {
        name: "Coil Manufacturing & Replacements",
        image: coilImg,
        link: "/services/coil-manufacturing-and-replacement",
    },
    {
        name: "Overhauling & Winding",
        image: overhaulingImg,
        link: "/services/overhauling-and-winding",
    },
    {
        name: "AMC",
        image: amcImg,
        link: "/services/amc",
    },
];;

type RelatedProps = { current: string };

const RelatedServices: React.FC<RelatedProps> = ({ current }) => {
    const related = allServices.filter((p) => p.name !== current);

    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
                    Related Services
                </h3>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {related.map((p, i) => (
                        <Link
                            key={i}
                            to={p.link}
                            className="
                group rounded-lg overflow-hidden bg-white dark:bg-gray-900 
                border border-transparent dark:border-gray-800 
                hover:border-emerald-500/50 dark:hover:border-emerald-500/80
                shadow-md hover:shadow-xl transition-all"
                        >
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4 text-center">
                                <h4 className="text-gray-800 dark:text-gray-200 text-lg font-semibold group-hover:text-emerald-500 transition-colors">
                                    {p.name}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default RelatedServices;
