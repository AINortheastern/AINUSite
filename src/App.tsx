import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./ainu-client/homepage/Home";
import { Footer } from "flowbite-react";
import logo from "./assets/branding/nuai_logo.png";
import { Hackathon } from "./ainu-client/hackathon/Hackathon";

import HamburgerMenu from "react-hamburger-menu";

import "./App.css";
import { Heading } from "./components/heading/Heading";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import { BodyText } from "./components/body-text/BodyText";

function App() {
  document.title = "AINU";

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="app">
      <div className="total-container">
        <Router>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/hackathon" element={<Hackathon />} />
          </Routes>
        </Router>
      </div>
      <div style={{ position: "relative" }}>
        <Footer container>
          <Footer.Brand src={logo} />
          <Footer.Copyright
            href="#"
            by="Artificial Intelligence Club of Northeastern University"
            year={2024}
          />
          <Footer.LinkGroup>
            <Footer.Link href="/home">About</Footer.Link>
            <Footer.Link href="mailto:aiclub.neu@gmail.com">
              Contact Us
            </Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </div>
    </div>
  );
}

export default App;
