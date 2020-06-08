import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className="Header__wrapper">
            <h1 className="Header__title">BitShow</h1>
            <input type="text" id="Header__search"></input>
        </div>
    )
}

export { Header };