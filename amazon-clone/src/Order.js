import React from 'react';
import moment from 'moment'; //for timestamp
import './Order.css';
import CheckoutItem from './CheckoutItem';
import CurrencyFormat from "react-currency-format";
import  { getTotal } from "./reducer";
import { useStateValue } from "./StateProvider";


function Order({order}) {

    const [{user, basket}, dispatch] = useStateValue();

  return (


    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY , h:mma')}</p>
        <p className='order__number'>
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item=> (
             <CheckoutItem
             id = {item.id}
             image = {item.image}
             price = {item.price}
             title = {item.title}
             rating = {item.rating}
             hideRFButton   
             
         />

        ))}

        <CurrencyFormat
            renderText={(value) => (
            <>
                <h3 className='order__amount'>Order Total: {value}</h3>
                                 
            </>


            )}          
            decimalScale={2} //upto two decimal places
            value={order.data.amount/100}
            displayType={"text"}
            thousandSeparator={","}
            prefix={"₹"}
        />

        

       


    </div>
  )
}

export default Order