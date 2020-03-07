import React, {useState, useEffect} from 'react';
import './rewards.css';

import {getTransactionData} from './transactionData';
import {filterTransactionsByMonth} from './pointCalculator';
import {LoadingPage} from './LoadingPage.js';
import {Link as RRLink, useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Grid from '@material-ui/core/Grid';

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
  table: {
    minWidth: 650,
    minHeight: 500
  },
  buttonContainer: {
    marginTop: 20
  }
}));

export const ItemizedRewards = () => {
  const history = useHistory();
  const classes = useStyles();

  const [currentUserData, setCurrentUserData] = useState('');
  const [monthOfReward, setMonthOfReward] = useState(1);

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

  useEffect(() => {
    const resultFromAPIRequest = getTransactionData();
    setCurrentUserData(
      filterTransactionsByMonth(resultFromAPIRequest, monthOfReward)
    );
    console.log(currentUserData);
  }, [monthOfReward]);

  return (
    <div>
      {!currentUserData ? (
        <LoadingPage />
      ) : (
        <Container component="main" maxWidth="lg">
          <Paper>
            <Typography component="h1" variant="h3" align="center">
              Itemized List of Purchases
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Transaction Id:</TableCell>
                    <TableCell align="right">Date:</TableCell>
                    <TableCell align="right">Item Purchased:</TableCell>
                    <TableCell align="right">Price:</TableCell>
                    <TableCell align="right">Quantity Purchased:</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {currentUserData.map(t =>
                    t.purchases.map(
                      ({price, quantity, itemName, itemId}, i) => (
                        <TableRow key={itemId}>
                          <TableCell component="th" scope="row" align="left">
                            {t.transactionId}
                          </TableCell>
                          <TableCell align="right">
                            {new Date(t.transactionDate * 1000).toDateString()}
                          </TableCell>
                          <TableCell align="right">
                            <RRLink to={'/item/' + itemId} itemName={itemName}>
                              {itemName}
                            </RRLink>
                          </TableCell>
                          <TableCell align="right">${price}</TableCell>
                          <TableCell align="right">{quantity}</TableCell>
                        </TableRow>
                      )
                    )
                  )}
                  <TableRow>
                    <TableCell colSpan={4} align="left">
                      Total of Purchases:
                    </TableCell>
                    <TableCell align="right">12422</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} align="left">
                      Points earned in MONTH:
                    </TableCell>
                    <TableCell align="right">12422</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Grid
              container
              justify="space-between"
              className={classes.buttonContainer}
            >
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
          </Paper>
        </Container>
      )}
    </div>
  );
};
