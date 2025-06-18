import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css'
import dropdown from '../assets/drop_down-icon.png'
import Productcard from '../ProductCard/ProductCard'

const ShopCategory = (props) => {
  const {all_products}  = useContext(ShopContext);
  // console.log(props, all_products);
  

  return (
    <div className='shop-category'>
        <div className="Banner">
           <img src= {props.banner} alt=""/>
           <div className="banner-left">
            <h1>{props.category} Accessories</h1>
            <p>Explore our wide range of {props.category} products, designed to meet your needs and enhance your lifestyle.</p>
           </div>
        </div>
       
       <div className="category-indexSort">

              <div className="category-title">
          <div className="category-sort">
                <h1>{props.category} Products</h1>
                <hr />
              </div>
            <p>Sort by <img src={dropdown} alt=""  className ="dropdown-icon"/>
            </p> 
         </div>
       </div>
       <div className="shopcategory-products">
        {all_products?.map((item, i) => {
            console.log(item);
          if (props.category === item.category.toLowerCase()) {
            return (
              <Productcard 
                key={i} 
                image={item.image} 
                name={`${item.name} - $${item.old_price} → $${item.new_price}`} 
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
       </div>
    </div>
    
  )
}

export default ShopCategory
