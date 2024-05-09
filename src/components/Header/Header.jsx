import React from 'react'
import"./Header.css"
import { assets } from '../../assets/assets'
export default function Header() {
  return (
        <div className='header'>
          <div className='header-contents'>
            <h2>Order your favourite food here</h2>
            <p>Embark on a gastronomic journey through a symphony of flavors, where each dish is a masterpiece and every meal is a celebration of culinary excellence, bringing people together one delicious bits at a time.</p>
            <button className='  button lg:text-lg  lg:pt-4 lg:p-7 text-black sm:h-9 text-sm sm:p-3 sm:pt-2     rounded-full lg:h-14   hover:scale-110 translation duration-500   bg-white' >View Menu</button>
          </div>
        </div>
    
    

        

  )
}
 