import React from 'react';
import "./Checkout.css";
import CheckoutItem from './CheckoutItem';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
//import FlipMove from 'react-flip-move';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className = 'checkout__left'>
          
         

          <div className='checkout__credentials'>
            <h3> Hello, { user?.email.match(/^([^@]*)@/)[1] }</h3>
            <h2 className='checkout__title'> Shopping Cart </h2>

            {/* CartItem */}
            {/* CartItem */}
            {/* CartItem */}
          
            {basket.map(item => (
               
              <CheckoutItem
                id = {item.id}
                image = {item.image}
                price = {item.price}
                title = {item.title}
                rating = {item.rating}
              />
             
             
           

            ))}
            
               



          </div>


        </div>

        <div className = 'checkout__right'>
          <Subtotal />
           
        </div>

    </div>

  )
}

export default Checkout
