import React from 'react';
import UsersList from './UsersList';
import Comments from './Comments';

const App = () => {
  return (
    <div className="app ui very padded text container segment">
      <UsersList />
      <Comments />
    </div>
  );
};

export default App;
