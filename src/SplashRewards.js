import React, {useState, useEffect} from 'react';
import {LoadingPage} from './LoadingPage';
import {getTransactionData} from './transactionData';
import {NavigationButtons} from './NavigationButtons';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import {
  filterTransactionsByMonth,
  sumOfTransactions,
  calculatePoints,
  simpleMonthConverter
} from './utils';
import {Link as RRLink, useParams} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './rewards.css';

const useStyles = makeStyles(() => ({
  paperForSplashPage: {padding: 30},
  boxMargin: {marginTop: 20, marginBottom: 35}
}));
export const SplashRewards = () => {
  const [currentUserData, setCurrentUserData] = useState([]);
  const {currentMonth} = useParams();
  const currentMonthAsNum = +currentMonth;
  const classes = useStyles();

  const totalPointsEarned = calculatePoints(sumOfTransactions(currentUserData));

  const moneySpentThisMonth = sumOfTransactions(
    filterTransactionsByMonth(currentUserData, currentMonthAsNum)
  );

  const pointsEarnedThisMonth = calculatePoints(moneySpentThisMonth);

  useEffect(() => {
    const resultFromAPIRequest = getTransactionData();
    setCurrentUserData(resultFromAPIRequest);
  }, [currentMonthAsNum]);

  return (
    <>
      {!currentUserData ? (
        <LoadingPage />
      ) : (
        <div>
          <Paper className={classes.paperForSplashPage}>
            <Box className={classes.boxMargin}>
              <Typography component="h3" variant="h3" align="center">
                Wow John Smith! You have earned
              </Typography>
              <Typography
                component="h1"
                variant="h1"
                align="center"
                className="pointHighlight"
              >
                {totalPointsEarned}
              </Typography>
              <Typography component="h3" variant="h3" align="center">
                points so far!
              </Typography>
            </Box>
            <Grid
              container
              spacing={3}
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography component="h4" variant="h4">
                  In {simpleMonthConverter(currentMonthAsNum)} you earned:
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="h4" variant="h4">
                  By spending:
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  component="h4"
                  variant="h4"
                  className="pointHighlight"
                >
                  {pointsEarnedThisMonth} pts
                </Typography>
              </Grid>
              <Grid item align="right">
                <Typography
                  component="h4"
                  variant="h4"
                  className="pointHighlight"
                >
                  ${moneySpentThisMonth.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
            <NavigationButtons
              currentMonthAsNum={currentMonthAsNum}
              destination={'/'}
            />
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <RRLink to={'/itemized/' + currentMonthAsNum}>
                  <Link variant="body2">
                    Curious how your points are broken down?
                  </Link>
                </RRLink>
              </Grid>
            </Grid>
          </Paper>
        </div>
      )}
    </>
  );
};
