import React from 'react';
import './header.css'
import logo from '../../assets/Maritime School.png'

const Header = () => {
    return (
        <div class="header-container">
            <img src={logo} alt="logo" width="200px" height="200px"/>
            <p>hello</p>
        </div>
    );
};

export default Header;