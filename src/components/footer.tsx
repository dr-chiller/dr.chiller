import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand & Description */}
                <div>
                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Dr.Chiller
                    </h2>
                    <p className="text-sm leading-relaxed max-w-xs">
                        High-quality cooling and refrigeration solutions for industrial and commercial needs — built for performance, reliability, and efficiency.
                    </p>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-lg font-bold text-emerald-500 mb-4">
                        Products
                    </h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            { name: "Water Chillers", link: "/products/water-chillers" },
                            { name: "Cold Rooms", link: "/products/cold-rooms" },
                            { name: "Heat Exchangers", link: "/products/heat-exchangers" },
                            { name: "A/C Units", link: "/products/ac-units" },
                        ].map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.link}
                                    className="hover:text-emerald-500 relative group"
                                >
                                    {item.name}
                                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-bold text-emerald-500 mb-4">
                        Services
                    </h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            { name: "Chilled Water Pipeline & Flushing", link: "/services/chilled-water-pipeline-and-flushing" },
                            { name: "A/C, Chiller & Coldroom Maintenance", link: "/services/ac-chiller-coldroom-maintenance" },
                            { name: "Coil Manufacturig & Replacements", link: "/services/coil-manufacturing-and-replacement" },
                            { name: "Overhauling & Winding", link: "/services/overhauling-and-winding" },
                            { name: "AMC", link: "/services/amc" },
                        ].map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.link}
                                    className="hover:text-emerald-500 relative group"
                                >
                                    {item.name}
                                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-bold text-emerald-500 mb-4">
                        Contact
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-2">
                            <MdEmail size={20} className="text-emerald-500" />
                            <span className="font-semibold">Email:</span>
                            <a
                                href="mailto:info@drchiller.com"
                                className="hover:text-emerald-500 relative group"
                            >
                                info@drchiller.com
                                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>

                        <li className="flex items-center gap-2">
                            <MdPhone size={20} className="text-emerald-500" />
                            <span className="font-semibold">Phone:</span>
                            <a
                                href="tel:+1234567890"
                                className="hover:text-emerald-500 relative group"
                            >
                                +1 234 567 890
                                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>

                        <li className="flex items-center gap-2">
                            <MdLocationOn size={20} className="text-emerald-500" />
                            <span className="font-semibold">Address:</span>
                            <span>Dubai, Abu Dhabi</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-300 dark:border-gray-800 py-4 mx-4 text-center text-xs text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Dr.Chiller. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
