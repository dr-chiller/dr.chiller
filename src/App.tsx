import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import About from "./pages/about";
import Breadcrumbs from "./components/breadcrumb";
import Products from "./pages/products/products";
import WaterChillers from "./pages/products/water-chillers";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
