import React, { Component } from 'react';
import Title from './components/Title';
import SendMessageForm from './components/SendMessageForm';
import MessagesList from './components/MessagesList';
import axios from 'axios';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    axios.get('http://assignment.bunq.com/users')
      .then(response => this.setState({ users: response.data }));
  }

  formSubmitted = (message) => {
    console.log(message);
  }

  render() {
    return (
      <div className="App">
        <Title />
        <MessagesList users={this.state.users} />
        <SendMessageForm formSubmitted={this.formSubmitted} />
      </div>
    );
  }
}

export default App;
