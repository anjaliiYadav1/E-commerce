import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({id, title, price,rating,image}) {

    const [{basket}, dispatch] = useStateValue();
    // basket 
    //console.log("checking", basket );

    const addToBasket = () => {
         //for dispatching the item into the data layer
         dispatch({
             type: 'ADD_TO_BASKET',
             item: {
                 id: id,
                 title: title,
                 image: image,
                 price: price,
                 rating:rating,
             },

         });
    };




  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                { Array(rating).fill().map((_,i) => (<p>⭐</p> )) }
                   
                
            </div>
            
        </div>

        
        <img 
            src={image} 
            width="220" height = "240"
            alt=""
        />  

        <button className = 'addButton' onClick={addToBasket}>Add to Basket</button>
       
    </div>

    

    
  )
}

export default Product