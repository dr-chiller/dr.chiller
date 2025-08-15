import { Link } from "react-router-dom";

const allProducts = [
    { name: "Water Chillers", link: "/products/water-chillers", image: "/water-chiller-2.jpg" },
    { name: "Cold Rooms", link: "/products/cold-rooms", image: "/chiller-rooms.jpeg" },
    { name: "Heat Exchangers", link: "/products/heat-exchangers", image: "/heat-exchangers-1.jpg" },
    { name: "A/C Units", link: "/products/ac-units", image: "/ac-units-2.jpg" }
];

type RelatedProps = { current: string };

const RelatedProducts: React.FC<RelatedProps> = ({ current }) => {
    const related = allProducts.filter((p) => p.name !== current);

    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
                    Related Products
                </h3>

                <div className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 
            lg:flex lg:flex-wrap lg:justify-center lg:gap-8
        ">
                    {related.map((p, i) => (
                        <Link
                            key={i}
                            to={p.link}
                            className="
                w-full sm:w-full lg:w-[280px]
                group rounded-lg overflow-hidden bg-white dark:bg-gray-900 
                border border-transparent dark:border-gray-800 
                hover:border-emerald-500/50 dark:hover:border-emerald-500/80
                shadow-md hover:shadow-xl transition-all duration-300
              "
                        >
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-2 text-center">
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

export default RelatedProducts;
