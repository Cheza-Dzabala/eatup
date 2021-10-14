import React from 'react'
import logo from '../../images/logo.png';

function Header() {
    return <div className="header">
        <img src={logo} alt="Application Logo" />
        <div className="header-end">
            <input className="text-input" type="text" placeholder="Search Food" />
            <button className="login-button">Login</button>
        </div>
    </div>
}

export default Header
