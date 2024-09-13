import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      {/* <a href="/" className="logo">Apple</a> */}
      <nav className="nav">
        <a href="/products" className="nav-item">Products</a>
        <a href="/mac" className="nav-item">Mac</a>
        <a href="/ipad" className="nav-item">iPad</a>
        <a href="/iphone" className="nav-item">iPhone</a>
        <a href="/watch" className="nav-item">Watch</a>
        <a href="/airpods" className="nav-item">AirPods</a>
        <a href="/tv-home" className="nav-item">TV & Home</a>
        <a href="/services" className="nav-item">Entertainment</a>
        <a href="/accessories" className="nav-item">Accessories</a>
        <a href="/support" className="nav-item">Support</a>
      </nav>
    </header>
  );
};

export default Header;