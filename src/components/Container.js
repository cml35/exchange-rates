import React from 'react';
import ExchangeRateList from './ExchangeRateList.js';
import { BrowserRouter, Route, Link, withRouter, useHistory, Switch } from 'react-router-dom';
import OverTime from './OverTime.js';
import SpecificDate from './SpecificDate.js';
import Currency from './Currency.js';

function Container() {
    return (
        <div className="container">
            <br />
            <BrowserRouter>
            <Link to="/OverTime">
                <button type="button">Over Time</button>
            </Link>
                
            <Link to="/SpecificDate">
                <button type="button">Specific Date</button>
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