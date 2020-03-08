//Component for the buttons which navigate you through the months of rewards.

import React from 'react';
import {useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {simpleMonthConverter} from './utils';
import {makeStyles} from '@material-ui/core/styles';

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
export const NavigationButtons = ({currentMonthAsNum, destination}) => {
  const history = useHistory();
  const classes = useStyles();

  //simple functions to navigate you up or down the months in order.

  const prevMonth = () => {
    if (currentMonthAsNum >= 1)
      history.push(destination + (currentMonthAsNum - 1));
  };

  const nextMonth = () => {
    if (currentMonthAsNum < 3)
      history.push(destination + (currentMonthAsNum + 1));
  };

  return (
    <>
      <Grid
        container
        justify="space-between"
        className={classes.buttonContainer}
      >
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
    </>
  );
};
