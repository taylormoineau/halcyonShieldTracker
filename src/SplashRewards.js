import React, {useState, useEffect} from 'react';
import {LoadingPage} from './LoadingPage';
import {getTransactionData} from './transactionData';
import {NavagationButtons} from './NavagationButtons';
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
import './rewards.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  paperForSplashPage: {padding: 30}
}));
export const SplashRewards = () => {
  const [currentUserData, setCurrentUserData] = useState('');
  const {currentMonth} = useParams();
  const currentMonthAsNum = +currentMonth;
  const history = useHistory();
  const classes = useStyles();

  const totalPointsEarned = calculatePoints(
    sumOfTransactions(getTransactionData())
  );

  const moneySpentThisMonth = sumOfTransactions(
    filterTransactionsByMonth(getTransactionData(), currentMonthAsNum)
  );

  const pointsEarnedThisMonth = calculatePoints(moneySpentThisMonth);

  const prevMonth = () => {
    if (currentMonthAsNum <= 1) history.push('/' + (currentMonthAsNum - 1));
  };

  const nextMonth = () => {
    if (currentMonthAsNum < 3) history.push('/' + (currentMonthAsNum + 1));
  };

  useEffect(() => {
    const resultFromAPIRequest = getTransactionData();
    setCurrentUserData(
      filterTransactionsByMonth(resultFromAPIRequest, currentMonthAsNum)
    );
  }, [currentMonthAsNum]);

  return (
    <>
      {!currentUserData ? (
        <LoadingPage />
      ) : (
        <div>
          <Paper className={classes.paperForSplashPage}>
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
                  {pointsEarnedThisMonth} pts
                </Typography>
              </Grid>
              <Grid item align="right">
                <Typography
                  component="h4"
                  variant="h4"
                  className="pointHighlight"
                >
                  ${moneySpentThisMonth}
                </Typography>
              </Grid>
            </Grid>
            <NavagationButtons
              currentMonthAsNum={currentMonthAsNum}
              destination={'/'}
            />
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
