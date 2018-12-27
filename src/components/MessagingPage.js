import React, {Fragment} from 'react';
import Comments from './Comments';
import InputField from './InputField.js';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    width: '100%',
    maxWidth: 700,
    margin: '0 auto',
    marginBottom: theme.spacing.unit,
  }
});

const MessagingPage = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      <Paper className={classes.paper} elevation={1}>
        <Comments />
      </Paper>
      <Paper className={classes.paper} elevation={1}>
        <InputField />
      </Paper>
    </Fragment>
  );
}

export default withStyles(styles)(MessagingPage);