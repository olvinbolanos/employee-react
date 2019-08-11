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

  handleSubmit = (e) => {
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
              isLogged: true,
              message: ''
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
        const { username, password, email, message } = this.state
      return (
        <div>
            {
            !this.state.isLogged ?
                <div className="row">
                  <div class="sixteen wide column rendered-example collections-form-shorthand-form-example-subcomponent-id">
                    <form class="ui form">
                      <div class="equal width fields">
                        <div class="field">
                          <label for="form-subcomponent-shorthand-input-first-name">First name</label>
                            <div class="ui fluid input">
                                <input id="form-subcomponent-shorthand-input-first-name" placeholder="Username" type="text" />
                            </div>
                        </div>
                        <div class="field">
                        <label for="form-subcomponent-shorthand-password">Password</label>
                        <div class="ui fluid input">
                          <input id="form-subcomponent-shorthand-password" placeholder="Password" type="text" />
                        </div>
                        </div>
                    </div>
                    <button class="ui animated button">
                      <div class="visible content">Register</div>
                        <div class="hidden content">
                          <i aria-hidden="true" class="arrow right icon"></i>
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