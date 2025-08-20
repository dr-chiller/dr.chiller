import { useLocation } from "react-router-dom";
import RelatedProducts from "../../components/products/related-products";
import WaterChillersHeader from "../../components/products/water-chillers/header";
import WaterChillersHero from "../../components/products/water-chillers/hero";
import WaterChillersSections from "../../components/products/water-chillers/section";
import WaterChillersSubSection from "../../components/products/water-chillers/sub-section";
import { useEffect } from "react";

const WaterChillers = () => {
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
            <WaterChillersHeader />
            <WaterChillersHero />
            <WaterChillersSections />
            <WaterChillersSubSection />
            <RelatedProducts current="Water Chillers" />
        </div>
    )
}

export default WaterChillers;