import React from 'react';
import { connect } from 'react-redux';
import { getUsers, selectUser } from '../actions';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  // when you select a user
  onUserSelect = (user) => {
    this.props.selectUser(user);
  }

  render() {

    const allUsers = this.props.users.map(user => (
      <div onClick={() => this.onUserSelect(user)} key={user.id} className="item">
        <i className="user icon"></i>
        <div className="content">
          <div className="header">{user.name}</div>
        </div>
      </div>
    ));

    const selectedAccount = () => {
      if (this.props.selectedUser.name) {
        return (
          <p className="ui bottom attached header">
            Selected Account: {this.props.selectedUser.name}
          </p>
        );
      }
    }

    return (
      <div className="ui segment">
        <h3 className="ui top attached header">
          Select a test account:
        </h3>
        <div className="ui attached segment">
          <div className="ui middle aligned selection list">
            {allUsers}
          </div>
        </div>
        {selectedAccount()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
    selectedUser: state.selectedUser
  };
}

export default connect(mapStateToProps, { getUsers, selectUser })(UsersList);