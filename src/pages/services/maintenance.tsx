import MaintenanceHeader from "../../components/services/ac-chiller-maintenance/header";
import MaintenanceHero from "../../components/services/ac-chiller-maintenance/hero";
import MaintenanceSections from "../../components/services/ac-chiller-maintenance/section";
import RelatedServices from "../../components/services/related-services";

const ACAndChillerMaintenance = () => {
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