import React from 'react';

class Comment extends React.Component {

  render() {
    const { comment, user } = this.props;

    return (
      <div>
        <div>{user[0].name}</div>
        <span>{new Date(comment.timestamp).toLocaleString()}</span>
        <div>{comment.message}</div>
      </div>
    );
  }
}


export default Comment;