//This page itemizes each purchase, listing its relevent information and providing a link to each item.
//The total of each months purchases and points earned are both listed at the bottom.

import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import './rewards.css';
import {NavigationButtons} from './NavigationButtons';
import {
  getTransactionData,
  simpleMonthConverter,
  sumOfSeconds
} from './getTransactionData';
import {LoadingPage} from './LoadingPage.js';
import {data} from './data';
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

const fieldArr = [
  {fieldName: 'elastic_prepped', label: 'Boxes of prepped el. bands leftover'},
  {fieldName: 'foamed', label: 'Foamed Shields leftover'},
  {fieldName: 'snaps', label: 'Snapped Shields (uncleaned)'},
  {fieldName: 'city', label: 'City'},
  {fieldName: 'country', label: 'Country'},
  {fieldName: 'goal', label: "Today's goal"}
];

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
    const fetchNSet = async () =>
      setCurrentUserData(await getTransactionData(currentMonthAsNum));
    fetchNSet();
  }, [currentMonthAsNum]);

  return (
    <div>
      {!currentUserData ? (
        <LoadingPage />
      ) : (
        <Container component="main" maxWidth="lg">
          <Paper>
            <Typography component="h1" variant="h3" align="center">
              What is left over from yesterday? What is the goal today?
            </Typography>
            {fieldArr.map(({fieldName, type = 'text', label}) => (
              <TextField
                key={fieldName}
                variant="outlined"
                margin="normal"
                fullWidth
                label={label}
                type={type}
              />
            ))}
            <Typography component="h1" variant="h3" align="center">
              List of tasks and times.
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Task:</TableCell>
                    <TableCell align="right">Stocked:</TableCell>
                    <TableCell align="right">Avg. Time Required Per:</TableCell>
                    <TableCell align="right">Avg. Created Per Hour:</TableCell>
                    <TableCell align="right">Multiplier:</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data.map(({task, stocked, timeReqPer, multiplier}) => (
                    <TableRow key={task}>
                      <TableCell component="th" scope="row" align="left">
                        {task}
                      </TableCell>
                      <TableCell align="right">{stocked}</TableCell>
                      <TableCell align="right">
                        {timeReqPer / 1000} seconds
                      </TableCell>
                      <TableCell align="right">
                        {Math.floor(
                          (3600 / (timeReqPer / 1000)) *
                            (multiplier ? multiplier : 1)
                        )}{' '}
                        per hr
                      </TableCell>
                      <TableCell align="right">
                        {multiplier ? multiplier : 'n/a'}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={2} align="left">
                      Finished Product
                    </TableCell>
                    <TableCell align="right">
                      {sumOfSeconds() / 1000} seconds
                    </TableCell>
                    <TableCell align="right">
                      {Math.floor(3600 / (sumOfSeconds() / 1000))}
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
