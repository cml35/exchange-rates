import React, { useState, useEffect } from 'react';
import ExchangeRateList from './ExchangeRateList';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { setSpecificDate, setCurrency } from '../action';
import PropTypes from 'prop-types';
import Currency from './Currency';
import currenciesArray from './Currencies';

export function SpecificDate({ setSpecificDate, date, currency, setCurrency }) {
    const [ exchangeRateList, setExchangeRateList ] = useState([]);
    const appendLeadingZeroes = (n) => {
        if(n <= 9){
          return "0" + n;
        }
        return n;
    } 

    useEffect(() => {
        const formattedDate = date.getFullYear  () + '-' + appendLeadingZeroes(date.getMonth() + 1) + '-' + appendLeadingZeroes(date.getDate());
        let url = 'https://api.exchangeratesapi.io/' + formattedDate;
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
            <Currency id={1} currency={currency} onCurrencyChange={setCurrency}/>
            <p style={{display: 'inline-block'}}>$1</p>
            <br />
            <label>Date: </label>
            <DatePicker
                onChange={setSpecificDate}
                selected={date}
                dateFormat="yyyy-MM-dd"
            />
            <br />
            <br />
            <ExchangeRateList type="SpecificDate" listItems={exchangeRateList}/>
        </div>
    );
}

SpecificDate.propTypes = {
    date: PropTypes.string
}

const mapStateToProps = (state, props) => {
    return {
        date: state.exchangeRates.date || new Date(),
        currency: state.exchangeRates.currency
    }
}

const mapDispatchToProps = {
    setSpecificDate,
    setCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecificDate)