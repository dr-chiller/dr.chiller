import AMCHeader from "../../components/services/amc/header";
import AMCHero from "../../components/services/amc/hero";
import AMCSections from "../../components/services/amc/section";
import RelatedServices from "../../components/services/related-services";

const AMC = () => {
    return (
        <div>
            <AMCHeader />
            <AMCHero />
            <AMCSections />
            <RelatedServices current="AMC" />
        </div>
    )
}

export default AMC;