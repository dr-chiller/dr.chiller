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

function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Navbar />
      {path !== "/" && <Breadcrumbs />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/water-chillers" element={<WaterChillers />} />
        <Route path="/products/cold-rooms" element={<ColdRooms />} />
        <Route path="/products/heat-exchangers" element={<HeatExchangers />} />
        <Route path="/products/ac-units" element={<ACUnits />} />

        <Route path="/services/chilled-water-pipeline-and-flushing" element={ <ChilledWaterPipelineAndFlushing /> } />
        <Route path="/services/ac-chiller-coldroom-maintenance" element={ <ACAndChillerMaintenance /> } />
        <Route path="/services/coil-manufacturing-and-replacement" element={ <CoilManufacturingAndReplacement /> } />
        <Route path="/services/overhauling-and-winding" element={ <OverhaulingAndWinding /> } />
        <Route path="/services/amc" element={ <AMC /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
