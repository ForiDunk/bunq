import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getConversations, selectConversation } from '../actions';

class ConversationsPage extends React.Component {
  componentDidMount() {
    this.props.getConversations(this.props.user.id);
  }

  onConversationSelect = (conversation) => {
    selectConversation(conversation.conversationId);
  }

  render() {
    console.log('props:', this.props);

    const allConversations = this.props.conversations.map((conversation, index) => {
      const path = `/conversations/${conversation.conversation.conversationId}`;
      console.log(conversation);
      return (
        <Link 
          to={path}
          onClick={() => this.onConversationSelect(conversation)} 
          key={index} 
          className="item"
        >
          <i className="users icon"></i>
          <div className="content">
            <div className="header">{conversation.conversation.name ? conversation.conversation.name : 'undefined'}</div>
          </div>
        </Link>
      );
    });

    return (
      <div className="ui segment">
        <h3 className="ui top attached header">
          Select a Conversation:
        </h3>
        <div className="ui attached segment">
          <div className="ui middle aligned selection list">
            {allConversations}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.selectedUser,
    conversations: state.conversations
  };
}

export default connect(mapStateToProps, { getConversations , selectConversation })(ConversationsPage);