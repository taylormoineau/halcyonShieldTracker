import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import loadingGif from './loadingGif.gif';

const useStyles = makeStyles(theme => ({
  paperForLoading: {
    padding: 30
  }
}));

export const LoadingPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.paperForLoading}>
        <Typography component="h1" variant="h5">
          {'LOADING REWARDS....'}
        </Typography>
        <img src={loadingGif} alt="loading" />
      </Paper>
    </React.Fragment>
  );
};
