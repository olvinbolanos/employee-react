import React, { Component } from 'react'
// import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { blockStatement } from '@babel/types';
import { render } from "react-dom";
import Alert from '../Alert'


class Login extends Component {
    state ={
        username: '',
        password: '',
        message: '',
        isLogged: false
    }


    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    } 

    handleSubmit = async (e) => {
        e.preventDefault()
        const login = await fetch("http://localhost:9000/auth/login", {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
            "Content-Type" : "application/json"
        }
        })

        const parsedLogin = await login.json()
        console.log(parsedLogin, '<-- Response from Login')
        if(parsedLogin.status.message === 'User Logged In') {
            this.setState({
                isLogged: true,
                message: ''
            })
            console.log('logged in')
        } else {
            console.log('failed login')
            this.setState({
                message: parsedLogin.status.message
            })

        }

        } 

        
        render() {
        const { username, password } = this.state
        // const state = { error: "Some weird error" };
        // const { isLogged } = useState(this.state)
        return (
          <div>
            { 
                !this.state.isLogged ?
                //renders this if the user isn't logged in
            <div className="ui middle aligned center aligned grid">
              <div className="column">
                <h2 className="ui teal image header"></h2>
                <img src="grover_thumb.jpg" className="image" />
                <div className="content">
                    Log-in to your account
                </div>
                        
                <form className="ui large form" onSubmit={this.handleSubmit}>
                <div className="ui stacked segment">
                <div className="field">
                    <div className="ui left icon input ">
                        <i className="user icon"></i>
                        <input type="text"
                        className="img-Class"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        placeholder="Username"
                        autoComplete="off" />
                    </div>
                </div>
                <div className="field">
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input type="password"
                        className="img-Class"
                        name="password" 
                        placeholder="Password"
                        value={password} 
                        onChange={this.handleChange}
                        autoComplete="off" />
                    </div>
                            
                    <input className="ui fluid large teal submit button" type="submit" value="Login"/>
                </div>
                </div>
                {/* just style the error message in index.css */}
                {this.state.message && <Alert message={this.state.message} />}
                </form>
            </div>
                        
                {/* <div className="ui message" >
                New to us? <a href="#">Sign Up</a>
                </div> */}
            </div> 
             : <Redirect to="/employees" name={this.state.username}/>
            }
        </div>
        )
    }
}

export default withRouter(Login)

