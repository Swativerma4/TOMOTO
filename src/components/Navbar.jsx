import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { assets } from '../assets/assets';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StoreContext } from './Context/StoreContext';
import "./Navbar.css"

const Navbar = ({setShowLogin}) => {
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
            link: "Shop"
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
    const {getTotalCartAmount}=useContext(StoreContext)

    return (
        <div id="full-nav" className=' pt-20  ml-10    flex justify-between items-center mr-114 pr-32   h-30 text-white  px-8 font-signature text-lg ' >
            <div className=' md:pl-24   text-2xl lg:text-4xl' id='logo'>
            <Link to='/'><img id="img-logo" className='w-36 sm:w-40  pl-[-5] ' src={assets.logo} alt="logo"></img></Link>
       
            </div>

            <ul  id="navbar-item" className='sm:hidden   md:flex hidden  gap-16   pl-[10%]      '>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer my-9 md:my-0 text-black font-medium hover:text-red-500  duration-200  size-7  '>
                        {link}
                    </li>
                ))}
            </ul>
            <div  className='navbar-right flex gap-7 align-center items-center md:gap-5  cursor-pointer   '>
            <div id=" search-button" className="text-black pl-60  "> <CiSearch  size={24}/></div>

          <div id=" basket"className='text-black relative cursor-pointer'>
               <Link to='/cart'><FaShoppingCart size={24} /></Link>
               
            
               <div className=''>         
           <div className= {getTotalCartAmount()===0?"":"absolute bottom-5 left-5 min-w-2 min-h-2 bg-red-500  rounded-full "}  >
            </div>  
           </div>
           </div>
           <div className=' bg-transparent rounded-full h-11 w-28 
         hidden md:flex '>
           <button id='sign-up button' className=' pr-11 font-bold text-gray-800 'onClick={()=>setShowLogin(true)}>Sign Up</button>
           
           </div>
           

            <div style={{zIndex:'2'}} onClick={toggleNav}  id=" toggle" className='cursor-pointer pr-16 py-8 sm:pr- text-red-500 md:hidden'>
                {nav ? <FaTimes  size={20} /> : <FaBars  size={20} />}
            </div>
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen text-gray-500  '>
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
