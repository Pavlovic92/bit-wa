import React from 'react';
import './Header.css';


const Header = () => {
        return ( 
            <header className="Header__wrapper"><div className="Header__logo-wrapper">
            {/* <img src={require('./img/Apple_logo_black.png')} className = 'Header__logo' > </img>  */}
            LOGO</div>
           <div className="Header__btn-wrapper">
            <button className = "Header__menu-btn">HOME</button>
            <button className = "Header__menu-btn">ABOUT</button>
            <button className = "Header__menu-btn">CONTACT</button>
            </div>
            </header>
            )
        }

export { Header }