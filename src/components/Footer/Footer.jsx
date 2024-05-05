import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer' id="footer">
    <div className='footer-content'>
   <div className='footer-left'>
    <img src={assets.logo} alt="" ></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum justo sit amet odio euismod, nec feugiat turpis tincidunt. Donec malesuada sem vitae quam sagittis, vel luctus libero efficitur. Vestibulum sed eros a felis mollis tincidunt. </p>
    <div className='footer-social-icons'>
     <img src={assets.facebook_icon}></img>   
     <img src={assets.twitter_icon}></img>   
     <img src={assets.linkedin_icon}></img>   
    </div>    
    </div>
     <div className='footer-content-center'>
     <h2>COMPANY</h2>
     <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
     </ul>
      </div>
     <div className='footer-content-right'>
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+91 9083735783</li>
            <li> contact@gretestack.com</li>
        </ul>

     </div>
    </div>
    <hr/>
    <p className='footer-copyright'>Copyright 2024 © Tomoto.com - All Right Reserved </p>

      
    </div>
  )
}
