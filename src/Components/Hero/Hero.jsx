import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__right'>
            <h1>Get Fashion Accessories</h1>
            <h2>At Affordable Price</h2>
            <h4>For Everyone</h4>
            <p>Shop the latest trends in fashion accessories.</p>
            <button className='hero__button'>Explore Trends</button>
        </div>
        <div className='hero_left'>
            <img src="../assets/Female_banner_img.png" alt="HeroImage" />
        </div>
      
    </div>
  )
}

export default Hero
