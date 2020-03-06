import React, {useState, useEffect} from 'react';
import {getTransactionData} from './transactionData';
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

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  error: {
    color: theme.palette.secondary.main
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  userPaper: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 50,
    padding: 10
  },
  authorLink: {
    color: 'white'
  }
}));

export const ItemizedRewards = () => {
  const history = useHistory();
  const classes = useStyles();

  const [currentUserData, setCurrentUserData] = useState('');
  const [monthOfReward, setMonthOfReward] = useState(1);

  useEffect(() => {
    const resultFromAPIRequest = getTransactionData();
    setCurrentUserData(
      filterTransactionsByMonth(resultFromAPIRequest, monthOfReward)
    );
  }, [monthOfReward]);

  return (
    <>
      <Typography component="h1" variant="h5">
        {'ITEMIZED PAGE'}
      </Typography>
      <TableContainer component={Paper}>
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
            {currentUserData.map(t =>
              t.purchases.map(({price, quantity, itemName, itemId}, i) => (
                <div key={i}>
                  <TableRow key={itemId}>
                    <TableCell component="th" scope="row">
                      {price}
                    </TableCell>
                    <TableCell align="right">
                      <Link>
                        <RRLink to={'/item/' + itemId} itemName={itemName}>
                          {quantity}
                        </RRLink>
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      <Paper color="primary">
                        {/* <RRLink
                          className={classes.authorLink}
                          to={'/UserInfo/' + author_id}
                          author_id={author_id}
                        > */}
                        <Link variant="body2">{itemName}</Link>
                        {/* </RRLink> */}
                      </Paper>
                    </TableCell>
                  </TableRow>
                </div>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
