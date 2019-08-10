import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'



class Register extends Component {
    state ={
        username: '',
        password: '',
        isLogged: false
    }


    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    } 

    handleSubmit = async (e) => {
        e.preventDefault()
        const register = await fetch("http://localhost:9000/auth/register", {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
            "Content-Type" : "application/json"
        }
        })

        const parsedRegister = await register.json()
        console.log(parsedRegister, '<-- Response from register')
        console.log('logged in')
        if(parsedRegister.status.message === 'User Logged In') {
          this.setState({
              isLogged: true
          })
        }

        } 


    render() {
        const { username, password } = this.state
        return (
          <div>
            { 
                !this.state.isLogged ?
                //renders this if the user isn't logged in
            <div className="ui middle aligned center aligned grid">
              <div className="column">
                <h2 className="ui teal image header"></h2>
                <img src="#" className="image" />
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

                <div className="ui error message"></div>

                </form>
            </div>
                        
                {/* <div className="ui message">
                New to us? <a href="#">Sign Up</a>
                </div> */}
            </div> 
             : <Redirect to="/employees" />
            }
        </div>
        )
    }
}

export default withRouter(Register)

