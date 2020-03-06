import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

export const NavBar = ({classes, currentUser, logout}) => {
  let history = useHistory();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Rewards Page
        </Typography>
        <Typography variant="h6" className={classes.title}>
          {currentUser && `Logged in as ${currentUser.email}`}
        </Typography>

        <Button
          size="large"
          color="inherit"
          onClick={() => history.push('/adminpage')}
        >
          Switch User
        </Button>
      </Toolbar>
    </AppBar>
  );
};
