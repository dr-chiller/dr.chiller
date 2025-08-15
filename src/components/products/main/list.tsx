import { Link } from "react-router-dom";

export default function ProductsList() {
    const products = [
        {
            name: "Water Chillers",
            description: "High-performance chillers for all industrial and commercial cooling needs.",
            image: "/water-chiller-2.jpg",
            link: "/products/water-chillers",
        },
        {
            name: "Cold Rooms",
            description: "Energy-efficient cold storage rooms for fresh and frozen products.",
            image: "/chiller-rooms.jpeg",
            link: "/products/cold-rooms",
        },
        {
            name: "Heat Exchangers",
            description: "Reliable heat exchangers for efficient thermal energy transfer.",
            image: "/heat-exchangers-1.jpg",
            link: "/products/heat-exchangers",
        },
        {
            name: "A/C Units",
            description: "Efficient air conditioning systems for residential and industrial applications.",
            image: "/ac-units-2.jpg",
            link: "/products/ac-units",
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Our Products</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Explore our full range of high-quality cooling and HVAC solutions — engineered for
                        performance, reliability and long-term efficiency.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product, index) => (
                        <Link
                            to={product.link}
                            key={index}
                            className="group rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-emerald-500/60 shadow hover:shadow-lg transition-all"
                        >
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />

                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-emerald-500 transition">
                                    {product.name}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {product.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
