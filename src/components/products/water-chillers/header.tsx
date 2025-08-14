import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <section
            className="relative h-[40vh] flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url('/water-chiller-header.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute cursor-pointer bottom-5 right-5 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200"
            >
                ⬅ Back
            </button>

            {/* Text */}
            <div className="relative z-10 px-4">
                <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg">
                    Water Chillers, Water Coolers & Heat Pumps
                </h1>
            </div>
        </section>
    );
}
