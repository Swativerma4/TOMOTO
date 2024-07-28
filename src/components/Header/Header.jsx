import React from 'react'
import"./Header.css"
import { assets } from '../../assets/assets'
export default function Header() {
  return (
        <div className='header'>
          <div className='header-contents'>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delected array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button className='  button lg:text-xl  lg:pt-4 lg:p-7 text-black sm:h-9 text-sm sm:p-3 sm:pt-2     rounded-full lg:h-14  bg-white  hover:scale-110 translation duration-500 ' >Order Now</button>
          </div>
        </div>
    
    

        

  )
}
 