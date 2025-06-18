import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div>
        <div className="news_letter">
            <h1>Subscribe to our Newsletter</h1>
            <p>Get the latest updates and offers directly in your inbox!</p>
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe_btn">Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
