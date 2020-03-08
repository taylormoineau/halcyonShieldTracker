//Basic NavBar. Nothing fancy here. Just a title and a button to take you home.

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

export const NavBar = ({classes}) => {
  let history = useHistory();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" className={classes.title}>
          Rewards Page
        </Typography>

        <Button size="large" color="inherit" onClick={() => history.push('/1')}>
          <HomeIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};
