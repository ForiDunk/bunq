import React from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions';
import Comment from './Comment';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const styles = theme => ({
  list: {
    height: '70vh',
    overflow: 'scroll',
    backgroundColor: theme.palette.primary.light
  }
});

class Comments extends React.Component {
  intervalID = 0;

  // in absence of a websocket, this is a working solution I could come up with
  //  if there's a better solution without a websocket, let me know :)
  componentDidMount() {
    this.props.getComments(this.props.conversation.conversationId, 1);
    this.intervalID = setInterval(() => this.props.getComments(this.props.conversation.conversationId, 1), 2000);
  }

  // this is to stop the requests when user leaves this page
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { comments, users, classes, selectedUser } = this.props;
    const commentList = comments.map(comment => {
      const sender = users.filter(user => user.id === comment.senderId);

      return <Comment key={comment.id} user={sender} comment={comment} selectedUser={selectedUser} />;
    });

    if(this.props.comments.length === 0) {
      return <div>Be the first to comment!</div>;
    }

    return (
      <List className={classes.list} disablePadding>
        {commentList}
      </List>
    );
  }
};

const mapStateToProps = (state) => {
  return { 
    selectedUser: state.selectedUser,
    comments: state.comments,
    users: state.users,
    conversation: state.selectedConversation.conversation
  };
}

export default connect(mapStateToProps, { getComments })(withStyles(styles)(Comments));