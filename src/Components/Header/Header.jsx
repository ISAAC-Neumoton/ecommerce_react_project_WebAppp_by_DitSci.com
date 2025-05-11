import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../logo.png";
import cartIcon from "../assets/cart_image.png";
import searchIcon from "../assets/search_icon.png";
import menuIcon from "../assets/menu_icon.png";

const Header = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Brand Logo" className="logo-image" />
        </Link>
      </div>

      {/* Search Bar - Retained */}
      <div className="search">
        <input type="text" placeholder="Search products..." className="search-field" />
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-menu desktop-menu">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/men" className={location.pathname === "/men" ? "active" : ""}>Men</Link>
        <Link to="/women" className={location.pathname === "/women" ? "active" : ""}>Women</Link>
        <Link to="/kids" className={location.pathname === "/kids" ? "active" : ""}>Kids</Link>
      </nav>

      {/* Action Buttons */}
      <div className="actions">
        <button className="sign-in">Sign In</button>
        <div className="cart-container">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          <span className="cart-counter">{cartCount}</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={toggleMenu}>
        <div className="overlay-menu">
          <nav className="nav-menu">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            <Link to="/men" className={location.pathname === "/men" ? "active" : ""}>Men</Link>
            <Link to="/women" className={location.pathname === "/women" ? "active" : ""}>Women</Link>
            <Link to="/kids" className={location.pathname === "/kids" ? "active" : ""}>Kids</Link>
          </nav>

          {/* Close Button */}
          <button className="close-btn" onClick={toggleMenu}>✖ Close</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
