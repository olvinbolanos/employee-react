import React, {Component} from 'react'
import { withRouter, Redirect } from 'react-router-dom'

class Register extends Component {
  state = {
      username: '',
      password: '',
      email: '',
      isLogged: false,
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
            "Content-type" : "application/json"
        }
      })

      const parsedRegister = await register.json()
      console.log(parsedRegister, '<--- Response from Register')
      if(parsedRegister.status.message === 'User Logged In') {
          this.setState({
              isLogged: true
          })
          console.log('logged in ' + this.state.username)
      } else {
          console.log('failed login')
          this.setState({
              message: parsedRegister.status.message
          })
        }
  }

    render() {
        const { username, password, email } = this.state
      return (
        <div>
            {
            !this.state.isLogged ?
                <div className="row">
                  <div className="sixteen wide column rendered-example collections-form-shorthand-form-example-subcomponent-id">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                      <div className="equal width fields">
                        <div className="field">
                          <label htmlFor="form-subcomponent-shorthand-input-first-name">Username</label>
                            <div className="ui fluid input">
                                <input id="form-subcomponent-shorthand-input-first-name" placeholder="Username" name="username" type="text"  value={username} onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className="field">
                        <label htmlFor="form-subcomponent-shorthand-email">Email</label>
                        <div className="ui fluid input">
                          <input id="form-subcomponent-shorthand-email" placeholder="Email" type="email" name="email" value={email} onChange={this.handleChange} required/>
                        </div>
                        </div>
                        <div className="field">
                        <label htmlFor="form-subcomponent-shorthand-password">Password</label>
                        <div className="ui fluid input">
                          <input id="form-subcomponent-shorthand-password" placeholder="Password" type="password" name="password" value={password} onChange={this.handleChange} required/>
                        </div>
                        </div>
                    </div>
                    <button className="ui animated button" type="submit ">
                      <div className="visible content">Register</div>
                        <div className="hidden content">
                          <i aria-hidden="true" className="arrow right icon"></i>
                        </div>
                    </button>
                   </form>
                  </div>
                </div> 
                :  <Redirect to="/employees" />
            }

        </div>
      )
    }
}

export default withRouter(Register)