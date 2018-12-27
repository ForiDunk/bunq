import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getConversations, selectConversation } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupTwoTone from '@material-ui/icons/GroupTwoTone';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => {
  return ({
    paper: {
      width          : '100%',
      maxWidth       : 700,
      margin         : '0 auto',
      textAlign      : 'center',
    },
    headingText: {
      backgroundColor: theme.palette.primary.dark,
      padding        : '5px 0', 
      color          : theme.palette.getContrastText(theme.palette.primary.dark),
    },
    link: {
      textDecoration: 'none'
    },
    progress: {
      margin: theme.spacing.unit * 2,
    },
  })
};

class ConversationsPage extends React.Component {
  componentDidMount() {
    this.props.getConversations(this.props.user.id);
  }

  onConversationSelect = (conversation) => {
    this.props.selectConversation(conversation);
  }

  render() {
    const { classes } = this.props;
    const allConversations = this.props.conversations.map((conversation, index) => {
      const path = `/conversations/${conversation.conversation.conversationId}`;

      return (
        <Link to={path} onClick={() => this.onConversationSelect(conversation)} key={index}>
          <ListItem button divider>
            <ListItemIcon><GroupTwoTone color="primary" fontSize="large"/></ListItemIcon>
            <ListItemText>{conversation.conversation.name ? conversation.conversation.name : 'undefined'}</ListItemText>
          </ListItem>
        </Link>
      );
    });

    return (
      <Paper className={classes.paper} elevation={1}>
        <Typography className={classes.headingText} variant="h5">Select a Conversation:</Typography>
        <List disablePadding>
          {this.props.conversations.length === 0 ? <CircularProgress className={classes.progress}/> : allConversations}
        </List>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.selectedUser,
    conversations: state.conversations,
    selectedConversation: state.selectedConversation
  };
}

export default connect(mapStateToProps, { getConversations , selectConversation })(withStyles(styles)(ConversationsPage));