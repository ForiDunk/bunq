import React from 'react';

class Comment extends React.Component {

  render() {
    const { comment, user } = this.props;

    return (
      <div className="content">
        <div className="author">{user[0].name}</div>
        <div className="metadata">
          <span className="date">{new Date(comment.timestamp).toLocaleString()}</span>
        </div>
        <div className="text">{comment.message}</div>
      </div>
    );
  }
}


export default Comment;