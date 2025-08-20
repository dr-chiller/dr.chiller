import { useLocation } from "react-router-dom";
import MaintenanceHeader from "../../components/services/ac-chiller-maintenance/header";
import MaintenanceHero from "../../components/services/ac-chiller-maintenance/hero";
import MaintenanceSections from "../../components/services/ac-chiller-maintenance/section";
import RelatedServices from "../../components/services/related-services";
import { useEffect } from "react";

const ACAndChillerMaintenance = () => {
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
            <MaintenanceHeader />
            <MaintenanceHero />
            <MaintenanceSections />
            <RelatedServices current="A/C, Chiller & Coldroom Maintenance" />
        </div>
    )
}

export default ACAndChillerMaintenance;