import { useLocation } from "react-router-dom";
import OverhaulingHeader from "../../components/services/overhauling/header";
import OverhaulingHero from "../../components/services/overhauling/hero";
import OverhaulingSections from "../../components/services/overhauling/section";
import RelatedServices from "../../components/services/related-services";
import { useEffect } from "react";

const OverhaulingAndWinding = () => {
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
            <OverhaulingHeader />
            <OverhaulingHero />
            <OverhaulingSections />
            <RelatedServices current="Overhauling & Winding" />
        </div>
    )
}

export default OverhaulingAndWinding;