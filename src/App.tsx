import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./ainu-client/homepage/Home";
import { DarkThemeToggle, Footer } from 'flowbite-react';
import logo from './assets/branding/nuai_logo.png';
import { Hackathon } from "./ainu-client/hackathon/Hackathon";


import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import HamburgerMenu from "react-hamburger-menu";

import './App.css'
import { Heading } from "./components/heading/Heading";
import { useState } from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BodyText } from "./components/body-text/BodyText";

function App() {
  document.title = "AINU"

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => { 
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="app">
    <div className="hamburger-menu" onClick={() => {setMenuOpen(!menuOpen)}}>
      <Heading className="hamburger-text">MENU</Heading>
          <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={() => {setMenuOpen(!menuOpen)}}
          width={30}
          height={30}
          strokeWidth={3}
          rotate={0}
          color='black'
          borderRadius={0}
          animationDuration={0.5}
      />
      </div>
      <div
      className="modal show"
      style={{ display: 'block', position: 'relative' }}
    >
      <>

      <Modal className="my-modal" show={menuOpen} onHide={handleMenuClick} centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title style={{width: '100%'}}>
            <Heading className="modal-text-heading">Menu</Heading>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-contents">
            <a href="/home" style={{textDecoration:"none"}}>
            <BodyText className="modal-link">Home</BodyText>
            </a>
            <a href="/hackathon" style={{textDecoration:"none"}}>
            <BodyText className="modal-link">Hackathon</BodyText>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
    </div>
    <div className="total-container">
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/hackathon" element={<Hackathon />} />
        </Routes>
      </Router>
    </div>
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

  </div>
  );
}

export default App;
