import React from 'react';
import './Login.css';
import { useNavigate , Link } from "react-router-dom";
import  { useState } from 'react';
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();   //no refresh
    auth
      .signInWithEmailAndPassword(email,password)
      .then((auth) =>
        {
          if (auth) 
          { navigate('/')}
        })
        .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault(); //prevent refresh
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => 
        {
          if (auth) 
          { navigate('/')}
        })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <Link to='/'>
            <img className = 'login__logo'
                src="https://i.pinimg.com/originals/ce/56/99/ce5699233cbc0f142250b520d967dff7.png"
                height="50px"
            />
        </Link>

        <div className='login__box'>
          <h1>Sign-in</h1>

          <form>
            <h5>Email</h5>
            <input type='text' value={email} 
              onChange={e => setEmail(e.target.value)} 
            />

            <h5>Password</h5>
            <input type='password' value={password} 
              onChange={e => setPassword(e.target.value)}
            />

            <button type='submit' onClick={signIn} 
            className='login__signInButton'> Sign In </button>

          </form>
          <p>
            By signing-in you agree to the terms and conditions of our Shopping website.
          </p>

          <button onClick = {register}
            className='login__registerButton'>
            Create your Account
          </button>

        </div>
    </div>
  )
}

export default Login