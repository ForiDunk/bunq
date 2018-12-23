import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import UsersList from './UsersList';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/user" exact component={UsersList} />
      </div>
    </BrowserRouter>
  );
};

export default App;
