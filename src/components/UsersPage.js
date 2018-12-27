import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers, selectUser } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleTwoTone from '@material-ui/icons/AccountCircleTwoTone';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => {
  return ({
    paper: {
      width: '100%',
      maxWidth: 700,
      margin: '0 auto',
      textAlign: 'center',
    },
    headingText: {
      backgroundColor: theme.palette.primary.dark,
      padding: '5px 0', 
      color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
    link: {
      textDecoration: 'none'
    },
    progress: {
      margin: theme.spacing.unit * 2,
    },
  })
};

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  onUserSelect = (user) => {
    this.props.selectUser(user);
  }

  render() {
    const { classes } = this.props;

    const allUsers = this.props.users.map(user => (
      <Link className={classes.link} to="/conversations" onClick={() => this.onUserSelect(user)} key={user.id}>
        <ListItem button divider>
          <ListItemIcon><AccountCircleTwoTone color="primary" fontSize="large"/></ListItemIcon>
          <ListItemText>{user.name}</ListItemText>
        </ListItem>
      </Link>
    ));

    return (
      <Paper className={classes.paper} elevation={1}>
        <Typography className={classes.headingText} variant="h5">Select a test account:</Typography>
        <List disablePadding>
          {this.props.users.length === 0 ? <CircularProgress className={classes.progress}/> : allUsers}
        </List>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users
  };
}

export default connect(mapStateToProps, { getUsers, selectUser })(withStyles(styles)(UsersPage));