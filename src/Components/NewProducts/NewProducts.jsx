import React from 'react'
import all_products from '../assets/Products';
import ProductCard from '../ProductCard/ProductCard';
import './NewProducts.css'

const NewProducts = () => {
  return (
    <div className='new-products'>
       
      <h1>NEW PRODUCTS</h1>
      <hr />
      <div className="new_products_lists">
        {all_products.filter(item => item.category === "Kids").map((item, i) => (   
          <ProductCard 
            key={i} 
            image={item.image} 
            name={`${item.name} - $${item.old_price} → $${item.new_price}`} 
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default NewProducts
