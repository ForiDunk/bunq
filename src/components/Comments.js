import React from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions';
import Comment from './Comment';

class Comments extends React.Component {
  componentDidMount() {
    this.props.getComments(this.props.conversation.conversationId, 1);
  }

  render() {
    const { comments, users } = this.props;
    const commentList = comments.map(comment => {
      const sender = users.filter(user => user.id === comment.senderId);

      return (
        <div key={comment.id} className="comment">
          <Comment user={sender} comment={comment} />
        </div>
      );
    });

    if(this.props.comments.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div className="ui comments">
        {commentList}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { 
    comments: state.comments,
    users: state.users,
    conversation: state.selectedConversation.conversation
  };
}

export default connect(mapStateToProps, { getComments })(Comments);