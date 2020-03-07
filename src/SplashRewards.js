import React, {useState, useEffect} from 'react';
import {LoadingPage} from './LoadingPage';
import {getTransactionData} from './transactionData';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
  filterTransactionsByMonth,
  sumOfTransactions,
  calculatePoints
} from './utils';
import {Link as RRLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './rewards.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const simpleMonthSwitcher = monthNum => {
  switch (monthNum) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
  }
};

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  paperForSplashPage: {padding: 30}
}));
export const SplashRewards = () => {
  const [currentUserData, setCurrentUserData] = useState('');
  const [monthOfReward, setMonthOfReward] = useState(1);
  const [displayedMonthTotalPoints, setdisplayedMonthTotalPoints] = useState(
    simpleMonthSwitcher(monthOfReward)
  );
  const [displayedMonthTotalSpent, setdisplayedMonthTotalSpent] = useState();

  const classes = useStyles();

  const totalPointsEarned = calculatePoints(
    sumOfTransactions(getTransactionData())
  );

  const pointsEarnedThisMonth = calculatePoints(
    filterTransactionsByMonth(getTransactionData(), monthOfReward)
  );

  const prevMonth = () => {
    monthOfReward <= 1
      ? setMonthOfReward(1)
      : setMonthOfReward(monthOfReward - 1);
  };

  const nextMonth = () => {
    monthOfReward < 3
      ? setMonthOfReward(monthOfReward + 1)
      : setMonthOfReward(3);
  };

  //   const history = useHistory();

  useEffect(() => {
    const resultFromAPIRequest = getTransactionData();
    setCurrentUserData(
      filterTransactionsByMonth(resultFromAPIRequest, monthOfReward)
    );
  }, [monthOfReward]);

  return (
    <>
      {!currentUserData ? (
        <LoadingPage />
      ) : (
        <div>
          <Paper className={classes.paperForSplashPage}>
            {currentUserData.map(t =>
              t.purchases.map(({price, quantity, itemName}, i) => (
                <div key={i}></div>
              ))
            )}
            <Typography component="h1" variant="h1" align="center">
              Check out your rewards!
            </Typography>
            <Typography component="h3" variant="h3" align="center">
              Wow USERNAME, you have earned
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
            Date:
            {monthOfReward}
            <Grid
              container
              spacing={3}
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography component="h4" variant="h4">
                  You earned:
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="h4" variant="h4">
                  From spending:
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
                  {pointsEarnedThisMonth}
                </Typography>
              </Grid>
              <Grid item align="right">
                <Typography
                  component="h4"
                  variant="h4"
                  className="pointHighlight"
                >
                  $93149
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between">
              <Grid item>
                <Button
                  onClick={prevMonth}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  <ArrowLeftIcon />
                  Previous Month
                </Button>
              </Grid>
              <Grid item>
                <Typography component="h4" variant="h4">
                  jan
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={nextMonth}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Next Month
                  <ArrowRightIcon />
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <RRLink to="/itemized">
                  <Link variant="body2">
                    Curious how your points are broken down?
                  </Link>
                </RRLink>
              </Grid>
            </Grid>
          </Paper>
        </div>
      )}

      {/* <LoadingPage /> */}
      {/* <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Book id:</TableCell>
              <TableCell align="right">Title:</TableCell>
              <TableCell align="right">Author:</TableCell>
              <TableCell align="right">Date Created:</TableCell>
              <TableCell align="right">Last Edited By:</TableCell>
              <TableCell align="right">Date of Last Edit:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booksState.map(
              ({
                id,
                title,
                author,
                created_date,
                edited_by_user,
                edited_date,
                author_id
              }) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="right">
                    <Link>
                      <RRLink to={'/book/' + id} id={id}>
                        {title}
                      </RRLink>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Paper color="primary" className={classes.userPaper}>
                      <RRLink
                        className={classes.authorLink}
                        to={'/UserInfo/' + author_id}
                        author_id={author_id}
                      >
                        <Link variant="body2">{author}</Link>
                      </RRLink>
                    </Paper>
                  </TableCell>
                  <TableCell align="right">
                    {new Date(created_date).toDateString()}
                  </TableCell>
                  <TableCell align="right">{edited_by_user}</TableCell>
                  <TableCell align="right">{edited_date}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  );
};
