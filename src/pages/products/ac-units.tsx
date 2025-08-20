import { useLocation } from "react-router-dom";
import ACUnitsHeader from "../../components/products/ac-units/header";
import ACUnitsHero from "../../components/products/ac-units/hero";
import ACUnitsSections from "../../components/products/ac-units/section";
import ACUnitsSubSection from "../../components/products/ac-units/sub-section";
import RelatedProducts from "../../components/products/related-products";
import { useEffect } from "react";

const ACUnits = () => {
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
            <ACUnitsHeader />
            <ACUnitsHero />
            <ACUnitsSections />
            <ACUnitsSubSection />
            <RelatedProducts current="A/C Units" />
        </div>
    )
}

export default ACUnits;