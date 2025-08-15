import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const products = [
    {
        name: "Water Chillers",
        description: "High-performance chillers for all your cooling needs.",
        image: "/water-chiller-2.jpg",
        link: "/products/water-chillers",
    },
    {
        name: "Cold Rooms",
        description: "Energy-efficient cold storage rooms for perishable goods.",
        image: "/chiller-rooms.jpeg",
        link: "/products/cold-rooms",
    },
    {
        name: "Heat Exchangers",
        description:
            "Reliable heat exchangers to optimize energy transfer processes.",
        image: "/heat-exchangers-1.jpg",
        link: "/products/heat-exchangers",
    },
    {
        name: "A/C Units",
        description:
            "Efficient air conditioning systems designed for comfort and reliability.",
        image: "/ac-units-2.jpg",
        link: "/products/ac-units",
    },
];

const Products = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2
                    className={`text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-60 translate-y-10"
                        }`}
                >
                    Our Products
                </h2>
                <p
                    className={`text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-100 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-60 translate-y-10"
                        }`}
                >
                    We provide a wide range of cooling and refrigeration solutions built
                    for performance, reliability, and efficiency.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col h-[350px] transition-all ease-out duration-200 ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-40 translate-y-10"
                                }`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {product.description}
                                    </p>
                                </div>
                                <Link
                                    to={product.link}
                                    className="inline-block bg-emerald-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-emerald-600 transition"
                                >
                                    View More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
