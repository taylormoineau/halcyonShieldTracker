//This page itemizes each purchase, listing its relevent information and providing a link to each item.
//The total of each months purchases and points earned are both listed at the bottom.

import React, {useState, useEffect} from 'react';
import './rewards.css';
import {NavigationButtons} from './NavigationButtons';
import {getTransactionData, simpleMonthConverter} from './getTransactionData';
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
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
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
    const resultFromAPIRequest = getTransactionData(currentMonthAsNum);
    setCurrentUserData(resultFromAPIRequest);
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
                  {currentUserData.purchases.map(
                    ({
                      price,
                      quantity,
                      itemName,
                      itemId,
                      transactionId,
                      transactionDate
                    }) => (
                      <TableRow key={itemId}>
                        <TableCell component="th" scope="row" align="left">
                          {transactionId}
                        </TableCell>
                        <TableCell align="right">
                          {new Date(transactionDate * 1000).toDateString()}
                        </TableCell>
                        <TableCell align="right">
                          <RRLink to={'/item/' + itemId}>{itemName}</RRLink>
                        </TableCell>
                        <TableCell align="right">${price}</TableCell>
                        <TableCell align="right">{quantity}</TableCell>
                      </TableRow>
                    )
                  )}
                  <TableRow>
                    <TableCell colSpan={4} align="left">
                      Total of Purchases:
                    </TableCell>
                    <TableCell align="right">
                      ${currentUserData.spent}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} align="left">
                      Points earned in {simpleMonthConverter(currentMonthAsNum)}
                      :
                    </TableCell>
                    <TableCell align="right">
                      {currentUserData.points} pts
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <NavigationButtons
              currentMonthAsNum={currentMonthAsNum}
              destination={'/itemized/'}
            />
          </Paper>
        </Container>
      )}
    </div>
  );
};
