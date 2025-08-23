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
import ACUnits from "./pages/products/ac-units";
import ScrollToTop from "./components/scroll-to-top";
import ChilledWaterPipelineAndFlushing from "./pages/services/chilled-water";
import ACAndChillerMaintenance from "./pages/services/maintenance";
import CoilManufacturingAndReplacement from "./pages/services/coil-manufacturing";
import OverhaulingAndWinding from "./pages/services/overhauling";
import AMC from "./pages/services/amc";
import Services from "./pages/services/services";
import FloatingActions from "./components/contact-buttons";
import Rentals from "./pages/services/rentals";
import ContactUs from "./pages/contact-us";
import NotFound404 from "./pages/404";
import { useEffect, useState } from "react";
import LogoLoader from "./components/loader";

function App() {
  const location = useLocation();
  const path = location.pathname;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <LogoLoader />}
      <Navbar />
      {path !== "/" && <Breadcrumbs />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/water-chillers" element={<WaterChillers />} />
        <Route path="/products/cold-rooms" element={<ColdRooms />} />
        <Route path="/products/heat-exchangers" element={<HeatExchangers />} />
        <Route path="/products/ac-units" element={<ACUnits />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/rentals" element={<Rentals />} />
        <Route path="/services/pipeline" element={<ChilledWaterPipelineAndFlushing />} />
        <Route path="/services/maintenance" element={<ACAndChillerMaintenance />} />
        <Route path="/services/coil" element={<CoilManufacturingAndReplacement />} />
        <Route path="/services/overhauling" element={<OverhaulingAndWinding />} />
        <Route path="/services/amc" element={<AMC />} />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <FloatingActions />
      <Footer />
    </>
  );
}

export default App;
