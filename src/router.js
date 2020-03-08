import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {NavBar} from './NavBar';
import {ItemizedRewards} from './ItemizedRewards.js';
import {ItemInfo} from './ItemInfo';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import {SplashRewards} from './SplashRewards.js';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    background: {
      default: blue[100]
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30
  }
}));

export const Router = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar classes={classes} />
          <Container component="main" maxWidth="lg">
            <CssBaseline />
            <div className={classes.paper}>
              <Switch>
                <Route path="/itemized/:currentMonth">
                  <ItemizedRewards />
                </Route>
                <Route path="/item/:itemId">
                  <ItemInfo />
                </Route>
                <Route path="/:currentMonth">
                  <SplashRewards />
                </Route>
                <Redirect exact from="/" to="/1" />
              </Switch>
            </div>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
