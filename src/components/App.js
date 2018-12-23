import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import UsersPage from './UsersPage';
import ConversationsPage from './ConversationsPage';
import Comments from './Comments';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/conversations" exact component={ConversationsPage} />
        <Route path="/conversations/:id" exact component={Comments} />
      </div>
    </BrowserRouter>
  );
};

export default App;
