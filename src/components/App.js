import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash' ;
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import LandingPage from './LandingPage';
import UsersPage from './UsersPage';
import ConversationsPage from './ConversationsPage';
import MessagingPage from './MessagingPage';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const App = ({ isUserSelected }) => {
  return (
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <Route path="/" exact component={LandingPage} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/conversations" exact render={() =>  isUserSelected ? <ConversationsPage/> : <Redirect to="/"/>} />
        <Route path="/conversations/:id" exact render={() =>  isUserSelected ? <MessagingPage/> : <Redirect to="/"/>} />
      </MuiThemeProvider>
    </HashRouter>
  );
};
  
const mapStateToProps =(state) => {
  return {
    isUserSelected: !_.isEmpty(state.selectedUser)
  }
};

export default connect(mapStateToProps)(App);
