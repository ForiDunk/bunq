import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash' ;
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import LandingPage from './LandingPage';
import UsersPage from './UsersPage';
import ConversationsPage from './ConversationsPage';
import MessagingPage from './MessagingPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = ({ isUserSelected }) => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Route path="/" exact component={LandingPage} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/conversations" exact render={() =>  isUserSelected ? <ConversationsPage/> : <Redirect to="/"/>} />
        <Route path="/conversations/:id" exact render={() =>  isUserSelected ? <MessagingPage/> : <Redirect to="/"/>} />
      </MuiThemeProvider>
    </BrowserRouter>
  );
};
  
const mapStateToProps =(state) => {
  return {
    isUserSelected: !_.isEmpty(state.selectedUser)
  }
};

export default connect(mapStateToProps)(App);
