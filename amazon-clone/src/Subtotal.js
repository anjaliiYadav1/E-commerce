import React from 'react';
import "./Subtotal.css"; 

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getTotal } from "./reducer";
import { useNavigate , Link } from "react-router-dom";


function Subtotal() {
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();
    
  return (
    <div className='subtotal'>

       
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                    <div className='subc'>
                    <div className='subtotal__left'>
                        Price ({basket.length} items):
            
                    </div>

                    <div className='subtotal__right'>
                        <strong>{value}</strong>
            
                    </div>

                    </div>
                   
                        
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                </>


            )}

            
          

            decimalScale={2} //upto two decimal places
            value={getTotal(basket)}
            prefix={"₹"}            
            thousandSeparator={","}
            displayType={"text"}
            
        />
        
            
        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
        

    </div>
  )
}

export default Subtotal