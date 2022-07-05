//header of the amazon page
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';


function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  
  //this dispatches the value
  console.log(user);

  const handleSignInOut = () => {
    if(user) {
      auth.signOut();
    }

  }

  return (
    <div className='header'>

      <Link to='/'>
        <img 
          className="header__logo" 
          src="https://i.pinimg.com/originals/ce/56/99/ce5699233cbc0f142250b520d967dff7.png"
           height="60px" width="80px"
        />          
      </Link>
      
      <div className="header_search">
          <input className="header__searchInput" type = "text" />
          <SearchIcon className="header__searchIcon"/>

       
      </div>

      <div className="header__nav">
        <Link to={ !user && '/login'}>
          <div onClick={ handleSignInOut } className ="header__side">

            <span className = "header__sideLineOne">
              Hello, { user ? user?.email.match(/^([^@]*)@/)[1] : 'Guest' }
             
            </span>

            <span className ="header__sideLineTwo">
              { user ? 'Sign Out' : 'Sign In' }
            </span>        
      
          </div>
        </Link>

        <Link to={ '/orders'}>
        <div className="header__side">
        
          <span className ="header__sideLineOne">
            My
          </span>
          <span className ="header__sideLineTwo">
             Orders
          </span>          

        </div>
        </Link>

       
        <Link to='/checkout'>

          <div className="header__optionCart">         
            <ShoppingCartIcon/>
            <span className="header_sideLineTwo header__CartCount">{basket?.length}</span>

          </div>

        </Link>


        </div>
    </div>

  )
}

export default Header