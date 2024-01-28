import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./ainu-client/homepage/Home";
import { DarkThemeToggle, Footer } from 'flowbite-react';
import logo from './assets/branding/nuai_logo.png';
import CssBaseline from '@material-ui/core/CssBaseline';
function App() {
  document.title = "AINU"
  return (
    <>
    <CssBaseline />
    <div className="App" style={{width:'100%',}}>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
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
    </div>
    </>
  );
}

export default App;
