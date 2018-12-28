import React from 'react';
import { connect } from 'react-redux';
import { sendMessage, getComments } from '../actions';
import Fab from '@material-ui/core/Fab';
import SendTwoTone from '@material-ui/icons/SendTwoTone';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '72%',
    color: '#fff'
  }
});

class InputField extends React.Component {
  state = {
    comment: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const params = {
      message: this.state.comment,
      senderId: this.props.senderId
    };

    this.props.sendMessage(this.props.conversationId, params);

    this.setState({comment: ''});
  }

  render() {

    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onFormSubmit}>
        <TextField
          id="comment"
          label="Comment"
          className={classes.textField}
          margin="normal"
          value={this.state.comment}
          onChange={event => this.setState({comment: event.target.value})}
        />
        <Fab color="secondary" type="submit" size="large" aria-label="Send" disabled={!this.state.comment}>
          <SendTwoTone />
        </Fab>
      </form>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    senderId: state.selectedUser.id,
    conversationId: state.selectedConversation.conversation.conversationId
  };
};

export default connect(mapStateToProps, { sendMessage, getComments })(withStyles(styles)(InputField));