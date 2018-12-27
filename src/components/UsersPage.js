import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers, selectUser } from '../actions';

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  onUserSelect = (user) => {
    this.props.selectUser(user);
  }

  render() {

    const allUsers = this.props.users.map(user => (
        <Link to="/conversations" onClick={() => this.onUserSelect(user)} key={user.id}>
          <div>{user.name}</div>
        </Link>
    ));

    return (
      <div>
        <h3>Select a test account:</h3>
        {allUsers}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users
  };
}

export default connect(mapStateToProps, { getUsers, selectUser })(UsersPage);