import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import Comments from './Comments';
import InputField from './InputField.js';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    background: theme.palette.primary.light,
    marginBottom: theme.spacing.unit,
    maxWidth: 700,
    margin: '20px auto',
  },
  comments: {
    width: '100%',
    height: '70vh',
    overflow: 'scroll',
    overflowX: 'hidden',
    background: theme.palette.primary.light,
  },
  inputField: {
    width: '100%',
    maxWidth: 700,
    marginTop: 20,
    background: theme.palette.primary.main,
  }
});

class MessagingPage extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper} elevation={1}>
        <section className={classes.comments}>
          <Comments />
        </section>
        <section className={classes.inputField}>
          <InputField />
        </section>
      </Paper>
    );
  }
}

export default withStyles(styles)(MessagingPage);