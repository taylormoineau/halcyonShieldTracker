import React from 'react';
import {useParams} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// const filteredTransactionsBySelectedMonth = transactionData.filter((t) => {
//     if (t.transactionDate >= start && t.transactionDate <= end){
//       return t
//     };

export const ItemInfo = ({itemName}) => {
  const {itemId} = useParams();

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
