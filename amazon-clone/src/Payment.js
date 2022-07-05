import React, { useEffect, useState } from 'react';
import './Payment.css';
import './Checkout';
import axios from './axios';

import CurrencyFormat from "react-currency-format";
import reducer, { getTotal } from "./reducer";
import CheckoutItem from './CheckoutItem';
import { useStateValue } from "./StateProvider";
import {  Link , useNavigate } from "react-router-dom";
import { useStripe , CardElement , useElements } from '@stripe/react-stripe-js';
import { database } from './firebase';




function Payment() {
    const navigate = useNavigate();

  const [{user, basket}, dispatch] = useStateValue();
    //stripe
  const stripe = useStripe();
  const elements = useElements();

  //disable
  const [disabled, setDisabled] = useState(true);  
  //error 
  const [error, setError] = useState(null);

  const [processing, setProcessing] = useState("");
  const [ succeeded, setSucceeded] = useState(false);
  const [ clientSecret, setClientSecret] = useState(true);
    //it will allow us to generate stripe secret (unique) which helps us to charge a customer

  useEffect(() => {
    const getClientSecret = async () => {
        const response = await axios ({
            method: 'post',
            url: `/payments/create?total=${getTotal(basket)*100}`   //for cents)
        })  //fetching library
        //const  
        //got client secret
        setClientSecret(response.data.clientSecret);
    }

    getClientSecret ();

  },[basket])


  console.log('hey', clientSecret);
  //console.log('its coming here alright no no no no');


  
  
  //will handle the submit 
  const handleSubmit = async (event) => {
    console.log('its coming here alright');
    event.preventDefault(); //prevent refresh
    setProcessing(true);  //not click again

    console.log('fyyjy');
     await stripe.confirmCardPayment( clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement) 
            
        }
    }).then(({paymentIntent}) => {   //confirmation
        //storing it in a database
            database.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({basket: basket, amount: paymentIntent.amount, created: paymentIntent.created});

            //created is for the timestamp




            setSucceeded (true);
            setError (null);
            setProcessing(false);
            dispatch({              //empty the basket after payment is processed
                type: 'EMPTY_THE_BASKET'
            })
            navigate( '/orders',{replace: true});
    })

  } 




  //will handle the change
  const handleChange = event => {
   
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
     //first we'll listen for any changes in the cardElement
    // and display if there are any error sin their card details
    

  }

  



  return (

    <div className='payment'>
         {/* payment section will have 3 divs for - delivery address , review order , payment */}
        <div className='payment__box'>
            <h1> Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>  

            {/*for delivery address*/}
            <div className='payment__subbox'>
                <div className='payment__header'>
                    <h3>Delivery Address</h3>                    
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p> Street 24, Old Rajinder Nagar </p>
                    <p>New Delhi , India</p>
                </div>


            </div>

             {/*for order review*/}
            <div className='payment__subbox'>
                <div className='payment__header'>
                    <h3>Review Order and Delivery</h3>                    
                </div>

                <div className='payment__item'>

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

             {/*for final payment */}
            <div className='payment__subbox'>
                <div className='payment__header'>
                    <h3>Payment Method</h3>                    
                </div>

                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                    </form>

                    <div className='payment__amount'>
                        {/* same as subtotal*/}
                        <CurrencyFormat
                            renderText={(value) => (
                            <>
                                <h3>Order Total: {value}</h3>
                                 
                            </>


                             )}          
                            decimalScale={2} //upto two decimal places
                            value={getTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={","}
                            prefix={"₹"}
                        />
                        <button  disabled={ processing || disabled || succeeded } onClick={handleSubmit}>
                            <span>{processing ? <p>Processing</p> : 'Place Order' }</span>
                        </button>

                        
                    </div>
                    {error && <div>error</div> }
                                        
                </div>


            </div>

        </div>

      
        
    </div>
  )
}

export default Payment