import React from 'react'
import './style.css'

import logo from '../../images/logo.png'
import userIcon from '../../images/user_icon.png'

const Header = ({isBlack}) => {
    return (
        <header className={isBlack ? 'black' : ''}>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="user_icon">
                <img src={userIcon} alt="user icon"/>
            </div>
        </header>
    )
}

export default Header