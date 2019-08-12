import React, {Component} from 'react'

import  { Link } from 'react-router-dom'

class Header extends Component {
    render() {
      return (
        <header>
            <ul>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/employees'>Employees</Link></li>
                <li><Link to='/aboutUs'>About Us</Link></li>
                <li><Link to='/' onClick={() => this.setState({ isLogged: false})}>Sign Out</Link></li>
            </ul>
        </header>
       
      )
    }
}

export default Header