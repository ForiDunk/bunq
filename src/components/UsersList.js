import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

class UsersList extends React.Component {
  componentDidMount() {
    console.log('asdasdasdasds');
  }

  render() {
    return (
      <div>
        UsersList
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
}

export default connect(mapStateToProps, { getUsers })(UsersList);