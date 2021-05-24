import React from 'react';

import logo from '../../assets/logo.png'

import './header-styles.scss';

function Header(){

    return (
        <div className="header">
            <div className='logo-wrapper'>
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className='header-name'>
                Eazy Learning 
                <span>Find your modules easily!!!</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">All Modules</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
