import { useLocation } from "react-router-dom";
import ChilledWaterPipelineHeader from "../../components/services/chilled-water-pipeline/header";
import ChilledWaterPipelineHero from "../../components/services/chilled-water-pipeline/hero";
import ChilledWaterPipelineSections from "../../components/services/chilled-water-pipeline/section";
import RelatedServices from "../../components/services/related-services";
import { useEffect } from "react";

const ChilledWaterPipelineAndFlushing = () => {
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
            <ChilledWaterPipelineHeader />
            <ChilledWaterPipelineHero />
            <ChilledWaterPipelineSections />
            <RelatedServices current="Chilled Water Pipeline & Flushing" />
        </div>
    )
}

export default ChilledWaterPipelineAndFlushing;