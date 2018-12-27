import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getConversations, selectConversation } from '../actions';

class ConversationsPage extends React.Component {
  componentDidMount() {
    this.props.getConversations(this.props.user.id);
  }

  onConversationSelect = (conversation) => {
    this.props.selectConversation(conversation);
  }

  render() {
    const allConversations = this.props.conversations.map((conversation, index) => {
      const path = `/conversations/${conversation.conversation.conversationId}`;

      return (
        <Link to={path} onClick={() => this.onConversationSelect(conversation)} key={index}>
          <div>{conversation.conversation.name ? conversation.conversation.name : 'undefined'}</div>
        </Link>
      );
    });

    return (
      <div>
        <h3>Select a Conversation:</h3>
        {allConversations}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.selectedUser,
    conversations: state.conversations,
    selectedConversation: state.selectedConversation
  };
}

export default connect(mapStateToProps, { getConversations , selectConversation })(ConversationsPage);