import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";
import HeroImage from "../assets/Female_banner_img.png";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Get Fashion Accessories","At Affordable Price", "For Everyone"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: false // Ensures continuous typing effect
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="hero">
      <div className="hero__right">
        <h1 ref={textRef}></h1> {/* This dynamically types text */}
        <p>......Shop the latest trends in fashion accessories.</p>
        <button className="hero__button">Explore Trends</button>
      </div>
      <div className="hero_left">
        <img src={HeroImage} alt="Hero Banner" />
      </div>
    </div>
  );
};

export default Hero;
