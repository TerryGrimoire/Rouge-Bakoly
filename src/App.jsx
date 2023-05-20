import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Compagnie from "./pages/Compagnie";
import Spectacles from "./pages/Spectacles";
import Residences from "./pages/Residences";
import Pluridisciplinarite from "./pages/Pluridisciplinarite";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "Rouge Bakoly",
    href: "https://rougebakoly.re",
    description: "Change description",
  };
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header helmet={helmet} />
        <Routes>
          <Route path="/" element={<Home helmet={helmet} />} />
          <Route path="/Compagnie" element={<Compagnie helmet={helmet} />} />
          <Route path="/Spectacles" element={<Spectacles helmet={helmet} />} />
          <Route path="/Residences" element={<Residences helmet={helmet} />} />
          <Route path="/Pluridisciplinarite" element={<Pluridisciplinarite helmet={helmet} />} />
          <Route path="/Contact" element={<Contact helmet={helmet} />} />
          <Route path="/Mentions" element={<Mentions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;