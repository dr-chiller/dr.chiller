import { useLocation } from "react-router-dom";
import ColdRoomsHeader from "../../components/products/cold-rooms/header";
import ColdRoomsHero from "../../components/products/cold-rooms/hero";
import ColdRoomsSection from "../../components/products/cold-rooms/section";
import ColdRoomsSubSection from "../../components/products/cold-rooms/sub-section";
import RelatedProducts from "../../components/products/related-products";
import { useEffect } from "react";

const ColdRooms = () => {

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);
    return (
        <div>
            <ColdRoomsHeader />
            <ColdRoomsHero />
            <ColdRoomsSection />
            <ColdRoomsSubSection />
            <RelatedProducts current="Cold Rooms" />
        </div>
    )
}

export default ColdRooms;