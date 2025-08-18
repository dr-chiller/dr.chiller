import CoilManufacturingHeader from "../../components/services/coil-manufacturing/header";
import CoilManufacturingHero from "../../components/services/coil-manufacturing/hero";
import CoilManufacturingSections from "../../components/services/coil-manufacturing/section";
import RelatedServices from "../../components/services/related-services";

const CoilManufacturingAndReplacement = () => {
    return (
        <div>
            <CoilManufacturingHeader />
            <CoilManufacturingHero />
            <CoilManufacturingSections />
            <RelatedServices current="Coil Manufacturing & Replacements" />
        </div>
    )
}

export default CoilManufacturingAndReplacement;