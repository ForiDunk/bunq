import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import UsersPage from './UsersPage';
import ConversationsPage from './ConversationsPage';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/conversations" exact component={ConversationsPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
