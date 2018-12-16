import React, { Component } from 'react';
import Title from './components/Title';
import SendMessageForm from './components/SendMessageForm';
import MessagesList from './components/MessagesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <MessagesList />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
