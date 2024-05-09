import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

export default function LoginPopup({setShowLogin}) {
    const[currState,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
      <form action='' className='login-popup-container'>
        <div className='login-popup-title'>
            <h1>{currState}</h1>
            <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt=""/>
        </div>
        <div className='login-popup-inputs'>
        {currState==='Login'?<></>:<input type='text' placeholder='Your Name' required></input>}
            
            <input type='email' placeholder='Your Email' required></input>
            <input type='password' placeholder='Password' required></input>
        </div>
        <button>{currState==="Sign Up" ?"Create account":"Login"}</button>
        <div className='login-popup-condition'>
        <label>
            <input type='checkbox'/>
                <p>By continuing, i agree to the term of use & Privacy policy</p>
            </label>
        </div>
        { currState==="Login"
        ?<p>Create a new account?<span onClick={()=>setCurrState("Sign up")}> Click here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrState("Login")}> Login here</span></p>
        }
      </form>

    </div>
  )
}
