import { useLocation } from "react-router-dom";
import HeatExchangersHeader from "../../components/products/heat-exchangers/header";
import HeatExchangersHero from "../../components/products/heat-exchangers/hero";
import HeatExchangersSections from "../../components/products/heat-exchangers/section";
import HeatExchangersSubSection from "../../components/products/heat-exchangers/sub-section";
import RelatedProducts from "../../components/products/related-products";
import { useEffect } from "react";

const HeatExchangers = () => {

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
            <HeatExchangersHeader />
            <HeatExchangersHero />
            <HeatExchangersSections />
            <HeatExchangersSubSection />
            <RelatedProducts current="Heat Exchangers" />
        </div>
    )
}

export default HeatExchangers;