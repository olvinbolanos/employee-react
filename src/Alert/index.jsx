import React, {Component} from 'react'
import {useState} from 'react'

class Alert extends Component {
    constructor(props) {
        super(props); 
            this.state = {
              message: props.message,
              isVisible: false
            };
    }
    
    // UNSAFE_componentWillReceiveProps(e) {
    //    this.setState(e)
    // } 
    
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.message !== prevProps.message) {
          this.fetchData(this.props.message);
        }
      }

    handleToggleState = () => {
      this.setState(prevState => ({
        isVisible: !prevState.isVisible,
        message: '',
      }));
      
    };
    render() {
      
      return this.state.message ? (
        <div className="alert">
          <div className="ui error message" style={{display: 'block', color: 'black'}}>{this.props.message}</div>
          <button className="ui animated button" type="submit" onClick={this.handleToggleState} >
            <div className="visible content">Close Warning</div>
              <div className="hidden content">
                <i aria-hidden="true" className="window close outline icon" style={{fontSize: '2em'}}></i>
              </div>
          </button>
        </div>
      ) : null;
    }
  }
  
  export default Alert

