import React, {Component} from 'react'
import {useState} from 'react'

// class Alert extends Component {
//   state = {
//     isVisible: false
//   };
//   handleToggleState = () => {
//     this.setState(prevState => ({
//       isVisible: !prevState.isVisible
//     }));
//   };
//   render() {
//     return this.state.isVisible ? (
//       <div className="alert">
//         <div className="ui error message" style={{display: 'block', color: 'black'}}>{this.props.message}</div>
//         <button className="ui animated button" type="submit" onClick={this.handleToggleState} >
//           <div className="visible content">Close Warning</div>
//             <div className="hidden content">
//               <i aria-hidden="true" className="window close outline icon" style={{fontSize: '2em'}}></i>
//             </div>
//         </button>
//       </div>
//     ) : null;
//   }
// }

// export default Alert



class Alert extends Component {
    constructor(props) {
        super(props); 
            this.state = {
              message: props.message,
              isVisible: false
            };
    }
    
    componentWillReceiveProps(e) {
        this.setState(e)
    }

    handleToggleState = () => {
      this.setState(prevState => ({
        isVisible: !prevState.isVisible,
        message: ''
      }));
      this.setMessage('')
    };
    render() {
    // const [message, setMessage] = useState(this.state.message);

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

