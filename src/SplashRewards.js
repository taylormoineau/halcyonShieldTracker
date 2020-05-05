//This is the "Splash Page" for the rewards program.

import React, {useState, useEffect} from 'react';
import {LoadingPage} from './LoadingPage';
import {getTransactionData, simpleMonthConverter} from './getTransactionData';
import {NavigationButtons} from './NavigationButtons';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Link as RRLink, useParams} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './rewards.css';
import Button from '@material-ui/core/Button';

const menuArr = [
  {fieldName: 'staff', label: 'Staff'},
  {fieldName: 'inventory', label: 'Inventory'},
  {fieldName: 'tasks', label: 'Task List'},
  {fieldName: 'simulate', label: 'Simulate Week'},
  {fieldName: 'record', label: 'Record Info'}
];

const useStyles = makeStyles(() => ({
  paperForSplashPage: {padding: 30},
  boxMargin: {marginTop: 20, marginBottom: 35}
}));
export const SplashRewards = () => {
  const [currentUserData, setCurrentUserData] = useState('');
  const {currentMonth} = useParams();
  const currentMonthAsNum = +currentMonth;
  const classes = useStyles();
  useEffect(() => {
    const fetchNSet = async () =>
      setCurrentUserData(await getTransactionData(currentMonthAsNum));
    fetchNSet();
  }, [currentMonthAsNum]);

  return (
    <>
      {!currentUserData ? (
        <LoadingPage />
      ) : (
        <div>
          {menuArr.map(({fieldName, type = 'text', label}) => (
            <Paper className={classes.paperForSplashPage} key={fieldName}>
              <Button
                onClick=""
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {fieldName}
              </Button>
            </Paper>
          ))}

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
                {currentUserData.totalPoints}
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
                  {currentUserData.points} pts
                </Typography>
              </Grid>
              <Grid item align="right">
                <Typography
                  component="h4"
                  variant="h4"
                  className="pointHighlight"
                >
                  ${currentUserData.spent}
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
                  Curious how your points are broken down?
                </RRLink>
              </Grid>
            </Grid>
          </Paper>
        </div>
      )}
    </>
  );
};
