import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewProducts from '../NewProducts/NewProducts'
import NewsLetter from '../NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewProducts/>
      <NewsLetter/>
    </div>
  )
}

export default Home
