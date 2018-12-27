import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExploreTwoTone from '@material-ui/icons/ExploreTwoTone';
import Fab from '@material-ui/core/Fab';

const styles = theme => {
  return ({
    paper: {
      paddingBottom: theme.spacing.unit * 2,
      width: '100%',
      maxWidth: 700,
      margin: '0 auto',
      textAlign: 'center',
    },
    headingText: {
      backgroundColor: theme.palette.primary.dark,
      padding: '20px 0',
      color: theme.palette.getContrastText(theme.palette.secondary.dark),
      marginBottom: theme.spacing.unit,
    }
  })
};

const LandingPage = (props) => {
  const { classes } = props;

  const toolsUsed = [
    {
      name: "React",
      url: "https://reactjs.org/"
    },
    {
      name: "Redux and React-Redux",
      url: "https://react-redux.js.org/"
    },
    {
      name: "React-Router",
      url: "https://reacttraining.com/react-router/"
    },
    {
      name: "Axios",
      url: "https://github.com/axios/axios"
    },
    {
      name: "Lodash (on one specific situation)",
      url: "https://lodash.com/"
    },
    {
      name: "Material-UI",
      url: "https://material-ui.com/"
    }
  ];

  const toolsUsedList = toolsUsed.map((tool, index) => (
    <ListItem key={index}>
      <ListItemIcon><a target="_blank" rel="noopener noreferrer" href={tool.url}><ExploreTwoTone color="primary"/></a></ListItemIcon>
      <ListItemText>{tool.name}</ListItemText>
    </ListItem>
  ));

  return (
    <Paper className={classes.paper} elevation={1}>
      <Typography className={classes.headingText} variant="h5">
        Wellcome to my little Chat App!
      </Typography>
      <List disablePadding>
      <Typography variant="subtitle1">
        This app was built by me (Szabolcs Forreiter) using the following technologies:
      </Typography>
        {toolsUsedList}
      </List>
      <Fab variant="extended" color="primary" component={Link} to="/users">Start Testing the app</Fab>
    </Paper>
  );
};

export default withStyles(styles)(LandingPage);