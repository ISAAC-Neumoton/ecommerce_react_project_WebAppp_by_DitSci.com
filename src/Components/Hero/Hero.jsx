import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__content'>
            <h1>Welcome to Our Store</h1>
            <p>Discover the best products at unbeatable prices.</p>
            <button className='hero__button'>Shop Now</button>
        </div>
        <div className='hero__image'>
            <img src="https://via.placeholder.com/800x400" alt="Hero" />
        </div>
      
    </div>
  )
}

export default Hero
