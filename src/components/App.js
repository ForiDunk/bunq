import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash' ;
import LandingPage from './LandingPage';
import UsersPage from './UsersPage';
import ConversationsPage from './ConversationsPage';
import Comments from './Comments';


const App = ({ isUserSelected }) => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/conversations" exact render={() =>  isUserSelected ? <ConversationsPage/> : <Redirect to="/"/>} />
        <Route path="/conversations/:id" exact render={() =>  isUserSelected ? <Comments/> : <Redirect to="/"/>} />
      </div>
    </BrowserRouter>
  );
};
  
const mapStateToProps =(state) => {
  return {
    isUserSelected: !_.isEmpty(state.selectedUser)
  }
};

export default connect(mapStateToProps)(App);
