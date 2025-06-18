import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginSignup from "./Components/Pages/LoginSignup";
import "./index.css"; 
import men_banner from './Components/assets/men_banner_image.png';
import women_banner from './Components/assets/Female_banner_img.png';
import kid_banner from './Components/assets/kids_banner-removebg.png';



const App = () => {
  return (
    <Router>
      {/* Header stays visible on all pages */}
      <Header />
      {/* All your Routes in one place */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<ShopCategory banner = {men_banner} category ="men" />} />
        <Route path="/women" element={<ShopCategory banner = {women_banner} category ="women" />} />
        <Route path="/kids" element={<ShopCategory banner = {kid_banner} category ="kids" />} />
        <Route path="/product" element={<Product />} /> 
          <Route path=":productId" element={<Product/>} /> 
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup />} /> 
      </Routes>
    
    </Router>
  );
};

export default App;
