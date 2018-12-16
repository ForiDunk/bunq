import React, { Component } from 'react';

class SendMessageForm extends Component {
  state = {
    message: 'Type your message and hit ENTER'
  }

  onInputChange = (event) => {
    this.setState({ message: event.target.value })
  }

  render() {
    return (
      <form className="search-message-form">
        <input 
          type="text" 
          value={this.state.message} 
          onChange={this.onInputChange}
        />
      </form>
    );
  }
};

export default SendMessageForm;