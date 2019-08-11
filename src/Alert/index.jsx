import React, {Component} from 'react'

class Alert extends Component {
  state = {
    isVisible: true
  };
  handleToggleState = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };
  render() {
    return this.state.isVisible ? (
      <div className="alert">
        <div className="ui error message" style={{display: 'block', color: 'black'}}>{this.props.message}</div>
        <button onClick={this.handleToggleState}>X</button>
      </div>
    ) : null;
  }
}

export default Alert