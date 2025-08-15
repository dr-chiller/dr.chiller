import RelatedProducts from "../../components/products/related-products";
import WaterChillersHeader from "../../components/products/water-chillers/header";
import WaterChillersHero from "../../components/products/water-chillers/hero";
import WaterChillersSections from "../../components/products/water-chillers/section";
import WaterChillersSubSection from "../../components/products/water-chillers/sub-section";

const WaterChillers = () => {
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