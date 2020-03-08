import React, {useState, useEffect} from 'react';
import './rewards.css';
import {NavagationButtons} from './NavagationButtons';
import {
  filterTransactionsByMonth,
  sumOfTransactions,
  calculatePoints,
  simpleMonthConverter
} from './utils';
import {getTransactionData} from './transactionData';
import {LoadingPage} from './LoadingPage.js';
import {Link as RRLink, useParams} from 'react-router-dom';
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
import Typography from '@material-ui/core/Typography';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 750,
    minHeight: 500
  },
  buttonContainer: {
    padding: 20
  }
}));

export const ItemizedRewards = () => {
  const classes = useStyles();
  const {currentMonth} = useParams();
  const currentMonthAsNum = +currentMonth;

  const [currentUserData, setCurrentUserData] = useState('');

  useEffect(() => {
    const resultFromAPIRequest = getTransactionData();
    setCurrentUserData(
      filterTransactionsByMonth(resultFromAPIRequest, currentMonthAsNum)
    );
  }, [currentMonthAsNum]);

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
                    t.purchases.map(({price, quantity, itemName, itemId}) => (
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
                    ))
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
            <NavagationButtons
              currentMonthAsNum={currentMonthAsNum}
              destination={'/itemized/'}
            />
          </Paper>
        </Container>
      )}
    </div>
  );
};
