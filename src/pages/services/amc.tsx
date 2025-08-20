import { useLocation } from "react-router-dom";
import AMCHeader from "../../components/services/amc/header";
import AMCHero from "../../components/services/amc/hero";
import AMCSections from "../../components/services/amc/section";
import RelatedServices from "../../components/services/related-services";
import { useEffect } from "react";

const AMC = () => {
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
            <AMCHeader />
            <AMCHero />
            <AMCSections />
            <RelatedServices current="AMC" />
        </div>
    )
}

export default AMC;