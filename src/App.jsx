import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Components/Pages/Home";
import Men from "./Components/Pages/Men";
import Women from "./Components/Pages/Women";
import Kids from "./Components/Pages/Kids";

import "./index.css"; 

const App = () => {
  return (
    <Router>
      {/* Header stays visible on all pages */}
      <Header />

      {/* All your Routes in one place */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>

      {/* Footer stays visible on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
