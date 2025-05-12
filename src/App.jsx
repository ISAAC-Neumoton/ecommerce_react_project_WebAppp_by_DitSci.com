import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

import Home from "./Components/Pages/Home";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginSignup from "./Components/Pages/LoginSignup";
import "./index.css"; 


const App = () => {
  return (
    <Router>
      {/* Header stays visible on all pages */}
      <Header />
      {/* All your Routes in one place */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<ShopCategory category ="men" />} />
        <Route path="/women" element={<ShopCategory category ="women" />} />
        <Route path="/kids" element={<ShopCategory category ="kids" />} />
        <Route path="/product" element={<Product />} /> 
          <Route path=":productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup />} />



      </Routes>
    
    </Router>
  );
};

export default App;
