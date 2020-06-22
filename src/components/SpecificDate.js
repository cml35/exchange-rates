import React, { useState, useEffect } from 'react';
import ExchangeRateList from './ExchangeRateList';
import "react-datepicker/dist/react-datepicker.css";
import { setCurrency as setCurrencyAction } from '../action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrencyDropDown from './CurrencyDropDown';
import { getFormattedDate } from '../api/helper/getFormattedDate';
import DatePickerInput from './DatePickerInput';

export function SpecificDate({ date, currency, setCurrency }) {
    const [ exchangeRateList, setExchangeRateList ] = useState([]);

    useEffect(() => {
        let url = 'https://api.exchangeratesapi.io/' + getFormattedDate();
        if (currency) {
            url = url + '?base=' + currency;
        }
        fetch(url)
            .then(results => results.json())
            .then(data => {
                const arr = [];
                for (let  [key, value] of Object.entries(data.rates)) {
                    if (typeof(currency) == 'undefined') {
                        currency = 'AUD';
                    }
                    if (key != currency) {
                        arr.push({'rate': key, 'value': value.toFixed(4)});
                    }
                }
                setExchangeRateList(arr);
            })

    }, [date, currency])

    return (
        <div className="specific-date">
            <CurrencyDropDown currency={currency} setCurrency={setCurrency}/>
            <p style={{display: 'inline-block'}}>$1</p>
            <br />
            <label>Date: </label>
            <DatePickerInput date={date}/>
            <br />
            <br />
            <ExchangeRateList listItems={exchangeRateList}/>
        </div>
    );
}

SpecificDate.propTypes = {
    date: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        date: state.exchangeRates.date || new Date(),
        currency: state.exchangeRates.currency
    }
}

const mapDispatchToProps =  {
    setCurrency: setCurrencyAction, 
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecificDate)
