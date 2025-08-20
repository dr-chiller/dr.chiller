import { useLocation } from "react-router-dom";
import RelatedServices from "../../components/services/related-services";
import RentalsHeader from "../../components/services/rentals/header";
import RentalsHero from "../../components/services/rentals/hero";
import RentalsSections from "../../components/services/rentals/section";
import { useEffect } from "react";

const Rentals = () => {
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
            <RentalsHeader />
            <RentalsHero />
            <RentalsSections />
            <RelatedServices current="Rentals" />
        </div>
    )
}

export default Rentals;