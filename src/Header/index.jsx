import React, {Component} from 'react'

import  { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <ul>
                <li><Link to='/'>Register</Link></li>
                <li><Link to='/employees'>Employees</Link></li>
                <li><Link to='/aboutUs'>About Us</Link></li>
                <li><Link to='/employees' onClick={() => this.setState({ isLogged: false})}>Sign Out</Link></li>
            </ul>
        </header>
    )
}

export default Header