import React from 'react';

class Comment extends React.Component {

  render() {

    const { comment } = this.props;

    return (
      <div className="content">
        <div className="author">batman</div>
        <div className="metadata">
          <span className="date">{new Date(comment.timestamp).toLocaleString()}</span>
        </div>
        <div className="text">{comment.message}</div>
      </div>
    );
  }
}


export default Comment;