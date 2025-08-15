import ACUnitsHeader from "../../components/products/ac-units/header";
import ACUnitsHero from "../../components/products/ac-units/hero";
import ACUnitsSections from "../../components/products/ac-units/section";
import ACUnitsSubSection from "../../components/products/ac-units/sub-section";
import RelatedProducts from "../../components/products/related-products";

const ACUnits = () => {
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