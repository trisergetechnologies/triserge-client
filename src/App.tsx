import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./headerpage/About";
import Services from "./headerpage/Services";
import Careers from "./headerpage/Careers";
import SellProject from "./headerpage/Sellproject";
import Contact from "./headerpage/Contact";
import Home from "./pages/Home";
import Team from "./headerpage/Team";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="top-center" />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sellproject" element={<SellProject />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </>
  );
}