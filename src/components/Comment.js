import React, { Fragment, Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  listItem: {
    margin: theme.spacing.unit,
    width: 'auto',
    backgroundColor: 'white'
  },
  listItemUser: {
    margin: theme.spacing.unit,
    width: 'auto',
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'end'
  },
  inline: {
    display: 'inline',
    color: theme.palette.primary.dark,
  },
  messageText: {
    color: 'black',
    fontSize: '1.2rem'
  },
  messageTextUser: {
    color: 'white',
    fontSize: '1.2rem'
  }
});

class Comment extends Component {

  render() {
    const { comment, user, classes, selectedUser } = this.props;
    return (
      <ListItem className={comment.senderId === selectedUser.id ? classes.listItemUser : classes.listItem}>
        <ListItemText
          primary={
            <Typography variant="body1" className={comment.senderId === selectedUser.id ? classes.messageTextUser : classes.messageText}>
              {comment.message}
            </Typography>
          }
          secondary={
            <Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
              {user[0].name  + ' - '}
              </Typography>
              {new Date(comment.timestamp).toLocaleString()}
            </Fragment>
          }
        />
      </ListItem>
    );
  }
}





export default withStyles(styles)(Comment);