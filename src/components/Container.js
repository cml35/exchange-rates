import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import OverTime from './OverTime.tsx';
import SpecificDate from './SpecificDate.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        textDecoration: 'none'
      },
    },
  }));

function Container() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <br />
            <BrowserRouter>
            <Link to="/OverTime">
                <Button variant='outlined'>Over Time</Button>
            </Link>

            <Link to="/SpecificDate">
            <Button variant='outlined'>Specific Date</Button>
            </Link>
            <Switch>
                <Route path="/OverTime">
                    <OverTime />
                </Route>
                <Route path="/SpecificDate">
                    <SpecificDate />
                </Route>
                </Switch>
            </BrowserRouter>
            <br />
            <br />
        </div>
    );
}

export default Container;
