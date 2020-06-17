import React from 'react';
import currenciesArray from './Currencies.js';
import { connect } from 'react-redux';
import { setCurrency } from '../action';
import PropTypes from 'prop-types';

function Currency({ id, currency }) {
    const getCurrencies = () => {
        return currenciesArray.map((currency) => <option>{currency}</option> )
    }

    return (
        <div className="currency" style={{display: "inline-block"}}>
            <select onChange={(event) => setCurrency(id, event.target.value)} value={currency}>
                {getCurrencies()}
            </select>
        </div>
    );
}

Currency.propType = {
    currency: PropTypes.string
}

const mapDispatchToProps = {
  setCurrency
}

export default connect(null, mapDispatchToProps)(Currency);
