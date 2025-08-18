import OverhaulingHeader from "../../components/services/overhauling/header";
import OverhaulingHero from "../../components/services/overhauling/hero";
import OverhaulingSections from "../../components/services/overhauling/section";
import RelatedServices from "../../components/services/related-services";

const OverhaulingAndWinding = () => {
    return (
        <div>
            <OverhaulingHeader />
            <OverhaulingHero />
            <OverhaulingSections />
            <RelatedServices current="Overhauling & Winding" />
        </div>
    )
}

export default OverhaulingAndWinding;