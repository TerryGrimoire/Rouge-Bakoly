import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Compagnie from "./pages/Compagnie";
import Spectacles from "./pages/Spectacles";
import Collaborations from "./components/Collaborations";
import Residences from "./pages/Residences";
import Spectacle from "./pages/Spectacle";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "Rouge Bakoly",
    href: "https://rougebakoly.re",
    description: "Change description",
  };

  const [bandeau, setBandeau] = useState(true);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header helmet={helmet} />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home helmet={helmet} />} />
          <Route path="/Compagnie" element={<Compagnie helmet={helmet} />} />
          <Route
            path="/actions/:actions"
            element={<Spectacles helmet={helmet} />}
          />
          <Route
            path="/actions/:actions/:id"
            element={<Spectacle helmet={helmet} />}
          />
          <Route
            path="/Collaborations"
            element={<Collaborations helmet={helmet} />}
          />
          <Route
            path="/Collaborations/:id"
            element={<Residences helmet={helmet} />}
          />
          <Route path="/Contact" element={<Contact helmet={helmet} />} />
          <Route path="/Mentions" element={<Mentions />} />
        </Routes>
        {bandeau && (
          <div className="bandeau">
            <h2>Cookie</h2>
            <p>
              Ce site est à usage informatif et n'utilise donc pas de cookie.
              Nous ne collectons aucune donnée personnelle. Pour en savoir plus,
              consultez notre{" "}
              <a href="/mentions">politique de confidentialité</a>
            </p>

            <div>
              <button
                type="button"
                className="button_style2"
                onClick={() => setBandeau(false)}
              >
                Tout accepter
              </button>
              <button
                type="button"
                className="button_style"
                onClick={() => setBandeau(false)}
              >
                Tout refuser
              </button>
            </div>
          </div>
        )}
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
