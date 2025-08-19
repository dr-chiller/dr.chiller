import RelatedServices from "../../components/services/related-services";
import RentalsHeader from "../../components/services/rentals/header";
import RentalsHero from "../../components/services/rentals/hero";
import RentalsSections from "../../components/services/rentals/section";

const Rentals = () => {
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