import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import About from "./pages/about";
import Breadcrumbs from "./components/breadcrumb";
import Products from "./pages/products/products";
import WaterChillers from "./pages/products/water-chillers";
import ColdRooms from "./pages/products/cold-rooms";
import HeatExchangers from "./pages/products/heat-exchanges";

function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Navbar />
      {path !== "/" && <Breadcrumbs />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/water-chillers" element={<WaterChillers />} />
        <Route path="/products/cold-rooms" element={<ColdRooms />} />
        <Route path="/products/heat-exchangers" element={<HeatExchangers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
