import React, {useState, useEffect} from 'react';
import {LoadingPage} from './LoadingPage';
import {getTransactionData} from './transactionData';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {filterTransactionsByMonth} from './pointCalculator';
import {Link as RRLink, useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from '@material-ui/core/Link';

// const filteredTransactionsBySelectedMonth = transactionData.filter((t) => {
//     if (t.transactionDate >= start && t.transactionDate <= end){
//       return t
//     };

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
export const SplashRewards = () => {
  const [currentUserData, setCurrentUserData] = useState('');
  const [monthOfReward, setMonthOfReward] = useState(1);
  const classes = useStyles();

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
          <Paper>
            {currentUserData.map(t =>
              t.purchases.map(({price, quantity, itemName}, i) => (
                <div key={i}>
                  <Typography component="h1" variant="h1">
                    {itemName}
                  </Typography>
                </div>
              ))
            )}
            <Typography component="h1" variant="h1">
              Check out your rewards!
            </Typography>
            <Typography component="h2" variant="h2">
              Wow USERNAME, you have earned PNTS points so far!
            </Typography>
            Date: {new Date(1578411515213).toDateString()}
            {monthOfReward}
            <Grid container spacing={3} justify="center">
              <Grid item>
                <Typography component="h3" variant="h3">
                  Total points from MONTH:
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="h3" variant="h3">
                  4827
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
              <Grid item>
                <Button
                  onClick={nextMonth}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  LEFT{' '}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={prevMonth}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  RIGHT{' '}
                </Button>
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
