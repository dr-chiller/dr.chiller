import { useEffect, useRef, useState } from "react";
import { FaAward, FaUsers, FaCogs, FaClock } from "react-icons/fa";
import about1 from "/about1.jpeg";
import about2 from "/about2.jpeg";
// import { Snowflake } from "lucide-react";

const HomeChoose = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.01 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 pb-28 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
        >
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center 
                    transform transition-all duration-1000 ease-out
                    ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"}`}
            >
                {/* Left Side - Images */}
                <div className="relative flex flex-col items-center lg:block lg:ms-12 sm:mb-12">
                    <img
                        loading="lazy"
                        src={about1}
                        alt="Our Team"
                        className={`hidden sm:block w-72 h-80 object-cover rounded-xl shadow-lg border-2 border-white dark:border-gray-900 transform sm:rotate-[-3deg]
                            transition-all duration-1000 ease-out
                            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
                    />
                    <img
                        loading="lazy"
                        src={about2}
                        alt="Work in Action"
                        className={`w-64 h-72 object-cover rounded-xl shadow-lg border-2 border-white dark:border-gray-900 transform sm:rotate-[12deg] 
                                   sm:absolute sm:top-20 sm:left-70 md:left-100 lg:top-20 lg:left-40
                                   transition-all duration-1000 delay-200 ease-out
                                   ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
                    />
                    {/* <Snowflake
                        size={140}
                        className="absolute -top-16 -left-6 md:-top-16 md:-left-16 text-emerald-500/10 animate-spin-slow pointer-events-none"
                    /> */}
                </div>

                {/* Right Side - Text & Reasons */}
                <div
                    className={`relative transition-all duration-1000 delay-400 ease-out
                        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`} >
                    <h2 className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        At <span className="font-semibold text-emerald-700 dark:text-emerald-300">Dr.Chiller</span>,
                        we combine years of expertise with modern technology to deliver
                        exceptional cooling solutions. Our focus is on reliability,
                        innovation, and customer satisfaction — making us the trusted
                        partner for businesses across the region.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        {[
                            { icon: <FaAward />, title: "Proven Expertise" },
                            { icon: <FaUsers />, title: "Dedicated Support" },
                            { icon: <FaCogs />, title: "Cutting-Edge Solutions" },
                            { icon: <FaClock />, title: "On-Time Delivery" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 group transition-transform duration-300 hover:translate-x-1"
                            >
                                <div className="text-2xl text-yellow-400 dark:text-yellow-400 transition-transform group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* <Snowflake
                        size={140}
                        className="absolute -bottom-22 md:-bottom-22 right-2 md:right-16 text-emerald-500/10 animate-spin-slow pointer-events-none"
                    /> */}
                    <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-md transition-all">
                        About Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeChoose;
