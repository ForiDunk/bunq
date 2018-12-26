import React from 'react';
import { connect } from 'react-redux';
import { sendMessage, getComments } from '../actions';

class InputField extends React.Component {
  state = {
    comment: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const params = {
      message: this.state.comment,
      senderId: this.props.senderId
    };

    this.props.sendMessage(this.props.conversationId, params);

    this.setState({comment: ''});
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
        <button disabled={!this.state.comment}>Send</button>
      </form>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    senderId: state.selectedUser.id,
    conversationId: state.selectedConversation.conversation.conversationId
  };
};

export default connect(mapStateToProps, { sendMessage, getComments })(InputField);