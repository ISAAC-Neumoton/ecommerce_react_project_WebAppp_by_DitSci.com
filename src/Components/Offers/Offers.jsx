import React from 'react'
import './Offers.css'
import OfferImage from '../assets/Exclusive_image.png'


const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers_left">
            <div className="offers_left_top">
                <h1>Exclusive Offers</h1>
                <h2>50% off</h2>
               

            </div>
            <div className="offers_left_bottom">
                 <p>Grab the best deals of the season!</p>
                <p>Don't miss out on our limited-time offers!</p>
                <button className="offers_btn">Check Now</button>
            </div>
        </div>
        <div className="offers_right">
            <img src={OfferImage} alt="" className="offer_img" />
        </div>
    </div>
  )
}

export default Offers
