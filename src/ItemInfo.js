//Just a simple page to emulate the next step in this application. You could check individual purchases which
//scored you those points.

import React from 'react';
import {useParams} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paperForInfo: {
    padding: 30
  }
}));

export const ItemInfo = () => {
  const {itemId} = useParams();
  const classes = useStyles();

  return (
    <Paper className={classes.paperForInfo}>
      <Typography variant="h3">Item Id: {itemId}</Typography>
      <Typography variant="h5">
        Here is some info about your item or a link to the shop page!
      </Typography>
    </Paper>
  );
};
