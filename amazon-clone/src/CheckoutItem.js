import React from 'react';
import './CheckoutItem.css';
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function CheckoutItem({id,image,price,title,rating, hideRFButton}) {
  const [{basket}, dispatch] = useStateValue();

  //basket pulls info , dispatch changes information

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })

  }
  
  return (
    
    <div className='checkoutItem'>
        
        <img className='checkoutItem__image'
            src={image}
        />

        <div className='checkoutItem__info'>

            <p className = 'checkoutItem__title'>{title}</p>

            <p className='checkoutItem__price'>
              <small>₹</small>
              <strong>{price}</strong>
            </p>

            <div className ='checkoutItem__rating'>
              { Array(rating).fill().map((_,i) => (<p>⭐</p> )) }
            </div>

            {!hideRFButton &&  (<button onClick={removeFromBasket}> Remove from basket </button> )} 

           


        </div>
       


    </div>
   
  )
}

export default CheckoutItem