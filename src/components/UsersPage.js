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
        <Link 
          to="/conversations" 
          onClick={() => this.onUserSelect(user)} 
          key={user.id} 
          className="item"
        >
          <i className="user icon"></i>
          <div className="content">
            <div className="header">{user.name}</div>
          </div>
        </Link>
    ));

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