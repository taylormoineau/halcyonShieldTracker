//Just a simple page to emulate the next step in this application. You could check individual purchases which
//scored you those points.

import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {getItemInfo} from './getTransactionData';
import {LoadingPage} from './LoadingPage';

const useStyles = makeStyles(() => ({
  paperForInfo: {
    padding: 30
  }
}));

export const ItemInfo = () => {
  const {itemId} = useParams();
  const itemIdAsNum = +itemId;
  const classes = useStyles();
  const [currentItemInfo, setCurrentItemInfo] = useState('');

  useEffect(() => {
    const fetchNSet = async () =>
      setCurrentItemInfo(await getItemInfo(itemIdAsNum));
    fetchNSet();
  }, [itemIdAsNum]);

  return (
    <>
      {!currentItemInfo ? (
        <LoadingPage />
      ) : (
        <Paper className={classes.paperForInfo}>
          <Typography variant="h5">
            Here is some info about your item or a link to the shop page!
          </Typography>
          <Typography variant="h3">Item Id: {itemId}</Typography>
          <Typography variant="h3">
            Item Name: {currentItemInfo.itemName}
          </Typography>
          <Typography variant="h3">Price: ${currentItemInfo.price}</Typography>
        </Paper>
      )}
    </>
  );
};
