import React, { Fragment, Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  listItem: {
    width: 'auto',
    background: 'linear-gradient(45deg, #fff 50%, #7986cb 95%)',
    borderRadius: '30px',
    padding: '16px',
    margin: '12px 8px'
  },
  listItemUser: {
    width: 'auto',
    background: 'linear-gradient(45deg, #7986cb 30%, #303f9f 70%)',
    textAlign: 'end',
    borderRadius: '30px',
    padding: '16px',
    margin: '12px 8px'
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

    if (comment.senderId === selectedUser.id) {
      return (
        <ListItem dense divider className={classes.listItemUser}>
        <ListItemText>
          <Typography variant="body1" className={classes.messageTextUser}>
            {comment.message}
          </Typography>
        </ListItemText>
      </ListItem>
      );
    }

    return (
      <ListItem dense divider className={classes.listItem}>
        <ListItemText
          primary={
            <Typography variant="body1" className={classes.messageText}>
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