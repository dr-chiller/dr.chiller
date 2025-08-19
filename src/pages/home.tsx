import HomeChoose from "../components/home/choose";
import HomeHero from "../components/home/hero";
import HomeOffers from "../components/home/offers";
import HomeProducts from "../components/home/products";
import HomeRentals from "../components/home/rentals";
import HomeServices from "../components/home/services";

const Home = () => {
    return (
        <div>
            <HomeHero/>
            <HomeChoose />
            <HomeOffers />
            <HomeProducts />
            <HomeServices />
            <HomeRentals />
        </div>
    )
}

export default Home;