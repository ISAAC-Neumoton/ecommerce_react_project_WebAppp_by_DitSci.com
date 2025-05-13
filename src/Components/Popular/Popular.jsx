import React from 'react';
import "./Popular.css";
import all_products from '../assets/Products';
import ProductCard from '../ProductCard/ProductCard';

const Popular = () => {
  return (
    <div className='Popular'>
      <h1>TRENDS FOR MEN</h1>
      <hr />
      <div className="popular_items">
        {all_products.filter(item => item.category === "Men").map((item, i) => (   
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
  );
}

export default Popular;
