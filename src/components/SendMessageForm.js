import React, { Component } from 'react';

class SendMessageForm extends Component {
  state = {
    message: 'Type your message and hit ENTER'
  }

  onInputChange = (event) => {
    this.setState({ message: event.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.formSubmitted(this.state.message);
  }

  render() {
    return (
      <form className="search-message-form" onSubmit={this.onFormSubmit}>
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