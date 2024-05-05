import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { assets } from '../assets/assets';
import { CiSearch } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        console.log("toggle is working ")
        
        setNav(!nav); // Toggle the value of nav state
    };
    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "Menu"
        },
        {
            id: 3,
            link: "Mobile App"
        },
        {
            id: 4,
            link: "Contact us"
        },
        
    ];

    return (
        <div className=' pt-20   flex justify-between items-center w-full h-20 text-white  px-8 font-signature text-lg' >
            <div className='pl-10 md:pl-24   text-2xl lg:text-4xl' id='logo'>
            <Link to='/'><img className='w-36 sm:w-40  pl-9    md:w-36  lg:w-auto' src={assets.logo} alt="logo"></img></Link>
       
            </div>

            <ul  className='sm:hidden   md:flex  gap-2   '>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4  cursor-pointer my-9 md:my-0 text-black font-medium hover:text-red-500   duration-200'>
                        {link}
                    </li>
                ))}
            </ul>
            <div className='navbar-right flex gap-7 align-center items-center md:gap-10 cursor-pointer   '>
            <div className="text-black pl-60  "> <CiSearch  size={24}/></div>

          <div className='text-black relative cursor-pointer'>
               <Link to='/cart'><FaBasketShopping size={24} /></Link>
                          
           <div className='dot absolute bottom-5 left-5 min-w-2 min-h-2 bg-red-500  rounded-full  ' ></div>
           </div>
           <div className='text-black bg-transparent rounded-full h-11 w-28 
         hidden md:flex '>
           <button className=' pr-11 '>Sign Up</button>
           
           </div>
           

            <div style={{zIndex:'2'}} onClick={toggleNav} className='cursor-pointer pr-16 py-8 sm:pr- text-red-500 md:hidden'>
                {nav ? <FaTimes  size={20} /> : <FaBars  size={20} />}
            </div>
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen text-gray-500 '>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer py-6 text-2xl hover:text-red-500  '>
                            {link}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
