
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from'./Login';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React,  { useEffect } from 'react';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//loads stripe

const promise = loadStripe ('pk_test_51LH2eISJNRbShVqb4VTZpOago3TLeb6utjDc1VkQbe9fyUZDYPIYlD2y6LNgvMxXrd7lJXJctOkzMCMgJTFSSjhS00dpzoe6v9')

// the whole page is divided into header and home
// header is sticky
function App() {
  const [{}, dispatch] = useStateValue();
  
  
  //
  useEffect(() => { 
    auth.onAuthStateChanged(authUser => {
      console.log( authUser);
      //set the user if logged in else make it null
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        
        
      }
      else {

        dispatch({
          type: 'SET_USER',
          user: null,
        })

      }


    })

  }, [])

  return (
    <Router>
      <div className="app"> 
        
        <Routes>
          <Route path="/login" element={[<Login />]}/>
          <Route path="/checkout" element={ [<Header />, <Checkout /> ]}/>
          <Route path="/payment" element={[<Header />, <Elements stripe={ promise }> <Payment /></Elements>]}/>
          <Route path="/orders" element={[<Header />, <Orders />]}/>
          <Route path="/" element={[<Header />, <Home />]}/>

        </Routes> 
        
      </div>
    </Router>
  );
}

export default App;


