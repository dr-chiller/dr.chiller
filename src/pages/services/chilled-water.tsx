import ChilledWaterPipelineHeader from "../../components/services/chilled-water-pipeline/header";
import ChilledWaterPipelineHero from "../../components/services/chilled-water-pipeline/hero";
import ChilledWaterPipelineSections from "../../components/services/chilled-water-pipeline/section";
import RelatedServices from "../../components/services/related-services";

const ChilledWaterPipelineAndFlushing = () => {
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