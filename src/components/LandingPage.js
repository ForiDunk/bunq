import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Explore from '@material-ui/icons/Explore';
import Button from '@material-ui/core/Button';

const styles = theme => {
  return ({
    paper: {
      paddingBottom  : theme.spacing.unit * 2,
      width          : '100%',
      maxWidth       : 700,
      margin         : '0 auto',
      textAlign      : 'center',
      // backgroundColor: theme.palette.primary.light
    },
    heading: {
      backgroundColor: theme.palette.primary.dark,
      padding        : '10px 0',
    },
    headingText: {
      color          : theme.palette.getContrastText(theme.palette.primary.dark),
    },
    list: {
      ...theme.mixins.gutters(),
    }
  })
};

const LandingPage = (props) => {
  const { classes } = props;

  const toolsUsed = [
    {
      name: "React",
      url : "https://reactjs.org/"
    },
    {
      name: "Redux and React-Redux",
      url : "https://react-redux.js.org/"
    },
    {
      name: "React-Router",
      url : "https://reacttraining.com/react-router/"
    },
    {
      name: "Axios",
      url : "https://github.com/axios/axios"
    },
    {
      name: "Lodash (on one specific situation)",
      url : "https://lodash.com/"
    },
    {
      name: "Material-UI",
      url : "https://material-ui.com/"
    }
  ];

  const toolsUsedList = toolsUsed.map((tool, index) => (
    <ListItem key={index}>
      <ListItemIcon><a target="_blank" rel="noopener noreferrer" href={tool.url}><Explore color="primary"/></a></ListItemIcon>
      <ListItemText>{tool.name}</ListItemText>
    </ListItem>
  ));

  return (
    <Paper className={classes.paper} elevation={1}>
    <section className={classes.heading}>
      <Typography className={classes.headingText} variant="h5">
        Wellcome to my little Chat App!
      </Typography>
      <Typography className={classes.headingText} variant="subtitle1">
        This app was built by me (Szabolcs Forreiter) using the following technologies:
      </Typography>
    </section>
      <List className={classes.list}>
        {toolsUsedList}
      </List>
      <Button variant="contained" color="primary" component={Link} to="/users">Start Testing the app</Button>
    </Paper>
  );
};

export default withStyles(styles)(LandingPage);