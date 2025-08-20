import { useLocation } from "react-router-dom";
import CoilManufacturingHeader from "../../components/services/coil-manufacturing/header";
import CoilManufacturingHero from "../../components/services/coil-manufacturing/hero";
import CoilManufacturingSections from "../../components/services/coil-manufacturing/section";
import RelatedServices from "../../components/services/related-services";
import { useEffect } from "react";

const CoilManufacturingAndReplacement = () => {
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
            <CoilManufacturingHeader />
            <CoilManufacturingHero />
            <CoilManufacturingSections />
            <RelatedServices current="Coil Manufacturing & Replacements" />
        </div>
    )
}

export default CoilManufacturingAndReplacement;