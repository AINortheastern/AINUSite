import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./ainu-client/homepage/Home";
import { DarkThemeToggle, Footer } from 'flowbite-react';
import logo from './assets/branding/nuai_logo.png';
import { Hackathon } from "./ainu-client/hackathon/Hackathon";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  document.title = "AINU"
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/hackathon" element={<Hackathon />} />
        </Routes>
      </Router>
      <div style={{position: 'relative'}}>
      <Footer container>
        <Footer.Brand
          src={logo}
        />
        <Footer.Copyright href="#" by="Artificial Intelligence Club of Northeastern University" year={2024} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
    </Footer>
    </div>
    </>
  );
}

export default App;
