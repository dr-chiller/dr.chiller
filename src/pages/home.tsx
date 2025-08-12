import Choose from "../components/home/choose";
import Hero from "../components/home/hero";
import Offers from "../components/home/offers";
import Products from "../components/home/products";
import Services from "../components/home/services";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Choose />
            <Offers />
            <Products />
            <Services />
        </div>
    )
}

export default Home;