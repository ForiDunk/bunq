import React from 'react';

const Comment = (props) => {
  return (
    <div className="content">
      <div className="author">Username</div>
      <div className="metadata">
        <span className="date">Timestamp</span>
      </div>
      <div className="text">Message</div>
    </div>
  );
};

export default Comment;