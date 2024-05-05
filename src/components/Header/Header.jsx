import React from 'react'
import"./Header.css"
import { assets } from '../../assets/assets'
export default function Header() {
  return (
   
    <div className='  flex '>
    <img className='w-250 pl-28   pt-11  p-16 relative ' src={assets.header_img} alt="logo"/>
    <div className='absolute pt-[15%]  p-40 '> 
    <div className='heading '>
      <h2 className=' text-white text-7xl  font-bold mb-3'>Order Your</h2>
        <h2 className=' text-white text-7xl   font-bold mb-2'> Favourite Food Here</h2>
        <p className=' text-white pt-4  text-l mb-4 text-balance'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest<br></br> ingredients and culinary experties.Our mission is to satisfy your cravings and elevate your <br></br> dining experience, one delicious meal at a time. </p>
        <div className='pt-4   '>
        <button className=' button pt-3 p-5 text-black rounded-full  h-12 hover:scale-110 translation duration-500   bg-white' >View Menu</button></div>
        </div>
        </div>
    </div>
      

  )
}
 