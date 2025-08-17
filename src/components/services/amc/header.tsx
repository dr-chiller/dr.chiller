import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function AMCHeader() {
    const navigate = useNavigate();

    return (
        <section
            className="relative h-[40vh] flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url('/chilled-water-pipeline-header.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <button
                onClick={() => navigate(-1)}
                className="absolute cursor-pointer flex items-center gap-1 bottom-5 right-5 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200"
            >
                <BiArrowBack /> Back
            </button>

            <div className="relative z-10 px-4">
                <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg">
                    AMC
                </h1>
            </div>
        </section>
    );
}
