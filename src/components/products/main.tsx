import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();

    const products = [
        { name: "Water Chillers", path: "/products/water-chillers", img: "https://via.placeholder.com/300x200?text=Water+Chillers" },
        { name: "Cold Rooms", path: "/products/cold-rooms", img: "https://via.placeholder.com/300x200?text=Cold+Rooms" },
        { name: "Cooling Towers", path: "/products/cooling-towers", img: "https://via.placeholder.com/300x200?text=Cooling+Towers" },
        { name: "Heat Exchangers", path: "/products/heat-exchangers", img: "https://via.placeholder.com/300x200?text=Heat+Exchangers" },
    ];

    return (
        <div className="dark:bg-gray-800 dark:text-white bg-gray-50 text-gray-900">
            {/* Header */}
            <header className="flex justify-between items-center px-17 py-6 border-b border-gray-300 dark:border-gray-700">
                <h1 className="text-2xl font-bold">Our Products</h1>
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-1 px-4 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
                >
                    <BiArrowBack />Back
                </button>
            </header>

            {/* Main Grid */}
            <main className="p-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product, index) => (
                        <Link
                            to={product.path}
                            key={index}
                            className={`rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition bg-white dark:bg-gray-800`}
                        >
                            <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
