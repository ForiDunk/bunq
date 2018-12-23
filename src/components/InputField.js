import React from 'react';

class InputField extends React.Component {
  state = {
    comment: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.setState({comment: ''})
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input 
          type="text" 
          name="comment" 
          id="comment" 
          onChange={event => this.setState({comment: event.target.value})} 
          value={this.state.comment}
          autoFocus
        />
        <button>Send</button>
      </form>
    );
  }
};

export default InputField;