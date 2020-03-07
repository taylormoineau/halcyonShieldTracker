import React, {useState, useEffect} from 'react';
import {LoadingPage} from './LoadingPage';
import {getTransactionData} from './transactionData';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {filterTransactionsByMonth} from './utils';
import {Link as RRLink, useHistory, useParams} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
export const ItemInfo = ({itemName}) => {
  const {itemId} = useParams();
  console.log(itemId, itemName);

  return (
    <Paper>
      <Typography variant="h3">
        Item name: {itemName} Id: {itemId}
      </Typography>
      <Typography variant="h5">
        Here is some info about your item or a link to the shop page!
      </Typography>
    </Paper>
  );
};
