import React from 'react';
import Message from './Message';

export default (props) => {

  return (
    <div className="messages-list">
      {props.users.map(user => <Message key={user.id} user={user} />)}
    </div>
  )
};