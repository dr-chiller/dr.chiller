import React from "react";

type ProductCardProps = {
    title: string;
    image: string;
    description: string;
    points: string[];
};

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    image,
    description,
    points,
}) => {
    return (
        <div className="bg-white shadow-lg border border-gray-300 bg-gray-100 dark:bg-gray-900 dark:border-gray-800 rounded-md overflow-hidden flex flex-col sm:flex-row w-full sm:w-1/2">
            {/* Image */}
            <div className="flex-shrink-0 w-full sm:w-1/2">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text */}
            <div className="p-10 flex flex-col justify-center text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">{title}</h3>
                <p className="text-gray-600 text-sm mb-3 text-gray-700 dark:text-gray-300">{description}</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    {points.map((point, idx) => (
                        <li key={idx}>
                            <span className="font-semibold">
                                {point.split(":")[0]}
                            </span>
                            {point.includes(":") && `: ${point.split(":")[1]}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const SubSection: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white dark:bg-black sm:p-18">
            <ProductCard
                title="Water Cooler"
                image="/water-cooler.png"
                description="Efficient cooling solution for homes and offices."
                points={[
                    "Energy-efficient cooling",
                    "Low maintenance",
                    "Eco-friendly design",
                ]}
            />
            <ProductCard
                title="Heat Pump"
                image="/heat-pump.webp"
                description="All-season comfort with heating and cooling."
                points={[
                    "Dual heating & cooling",
                    "Cost-effective operation",
                    "Long-lasting durability",
                ]}
            />
        </div>
    );
};

export default SubSection;
