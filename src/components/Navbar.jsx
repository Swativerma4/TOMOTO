import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../assets/assets';
import LoginPopup from './LoginPopup/LoginPopup';

export default function Navbar() {
    const [menu, setMenu] = useState("home");
    const [showLogin,setShowLogin]=useState(false);
    
    return (
        <div className='navbar' >
            <img src={assets.logo} alt='Logo' className='logo' />
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
                    <Link to="/">Home</Link>
                </li>
                <a href='explore-menu-1' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
                 Menu
                </a>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
                    <Link to="/mobile-app">Mobile-app</Link>
                </li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
                    <Link to="/contact-us">Contact us</Link>
                </li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='Search Icon' />
                <div className='navbar-search-icon'>
                    <Link to="/cart"><img src={assets.basket_icon} alt='Basket Icon' /></Link>
                    <div className='dot'></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
            {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
        </div>
    );
}
