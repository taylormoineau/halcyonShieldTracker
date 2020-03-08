import React, {useState, useEffect} from 'react';
import {LoadingPage} from './LoadingPage';
import {getTransactionData} from './transactionData';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
  filterTransactionsByMonth,
  sumOfTransactions,
  calculatePoints,
  simpleMonthConverter
} from './utils';
import {Link as RRLink, useParams, useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  buttonContainer: {
    padding: 20
  }
}));
export const NavagationButtons = ({currentMonthAsNum}, {destination}) => {
  const history = useHistory();
  const classes = useStyles();

  const prevMonth = () => {
    if (currentMonthAsNum <= 1) history.push('/' + (currentMonthAsNum - 1));
  };

  const nextMonth = () => {
    if (currentMonthAsNum < 3) history.push('/' + (currentMonthAsNum + 1));
  };

  

  return (
   <Paper>
       <Grid container justify="space-between" className={classes.buttonContainer}>
              <Grid item>
                {currentMonthAsNum > 1 && (
                  <Button
                    onClick={prevMonth}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    <ArrowLeftIcon />
                    {simpleMonthConverter(currentMonthAsNum - 1)}
                  </Button>
                )}
              </Grid>

              <Grid item>
                {currentMonthAsNum < 3 && (
                  <Button
                    onClick={nextMonth}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {simpleMonthConverter(currentMonthAsNum + 1)}
                    <ArrowRightIcon />
                  </Button>
                )}
              </Grid>
            </Grid>
          </Paper>
        
      )}

  );
};
