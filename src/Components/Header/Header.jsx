import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../logo.png"; // Logo path
import cartIcon from "../assets/cart_image.png"; // Cart image path

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Brand Logo" className="logo-image" />
      </div>

      {/* Search Bar */}
      <div className="search">
        <input type="text" placeholder="Search Product" className="search-field" />
        <button className="search-btn">🔍</button>
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/men" className={location.pathname === "/men" ? "active" : ""}>Men</Link>
        <Link to="/women" className={location.pathname === "/women" ? "active" : ""}>Women</Link>
        <Link to="/kids" className={location.pathname === "/kids" ? "active" : ""}>Kids</Link>
      </nav>

      {/* Action Buttons */}
      <div className="actions">
        <button className="sign-in">Sign In</button>
        <img src={cartIcon} alt="Cart" className="cart-icon" />
      </div>
    </header>
  );
};

export default Header;
