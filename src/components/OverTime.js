import React, { useState, useEffect } from 'react';
import ExchangeRateList from './ExchangeRateList';
import { connect } from 'react-redux';
import { reOrder, setCurrency } from '../action';
import PropTypes from 'prop-types';
import Currency from './Currency';

export function OverTime({ reOrder, order, currency, comparecurrency, setCurrency }) {

    const [exchangeRateDateList, setExchangeRateDateList] = useState([]);
    const [date] = useState(new Date());

    function appendLeadingZeroes(n) {
        if(n <= 9){
          return "0" + n;
        }
        return n;
    }

    const formattedDate = date.getFullYear  () + '-' + appendLeadingZeroes(date.getMonth() + 1) + '-' + appendLeadingZeroes(date.getDate());
    useEffect(() => {
        let url = 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=' + formattedDate;

        if (currency) {
            url = url + '&base=' + currency;
        }

        if (comparecurrency) {
            url = url + '&symbols=' + comparecurrency;
        }

        //By default we set it to AUD
        if (typeof(comparecurrency) == 'undefined' && typeof(currency) == 'undefined') {
            url = url + '&base=AUD&symbols=AUD';
        }

        fetch(url)
            .then(results => results.json())
            .then(data => {    
                const arr = [];            
                for (let [key] of Object.entries(data.rates)) {
                    let obj = data.rates[key];
                    let curr = obj[comparecurrency]; 
                    //By default we set it to AUD
                    if (typeof(curr) == 'undefined') {
                        curr = obj['AUD'];
                    }
                    arr.push({'date': key, 'value': curr})
                }
                setExchangeRateDateList(arr);
            })
    }, [currency, comparecurrency])

    let sortedList = exchangeRateDateList;
    
    sortedList.sort((x, y) => {
        let xDate = new Date(x.date);
        let yDate = new Date(y.date);
        if (order == 'DESC') {
            return yDate.getTime() - xDate.getTime();
        }
        return xDate.getTime() - yDate.getTime();
    });

    return (
        <div className="overtime">
            <Currency id={1} currency={currency} onCurrencyChange={setCurrency}/>
            <p style={{display: 'inline-block'}}>v</p>
            <Currency id={2} currency={comparecurrency} onCurrencyChange={setCurrency}/>
            <p>{currency ? currency : 'AUD'} $1</p>
            <br />
            <label>Order Date:</label>
            <select onChange={(event) => reOrder(event.target.value)} value={order}>
                <option value='ASC'>Ascending</option>
                <option value='DESC'>Descending</option>
            </select>
            <br />
            <br />
            <ExchangeRateList type="OverTime" listItems={sortedList}/>
        </div>
    );
}

OverTime.propTypes = {
    order: PropTypes.string
}

const mapStateToProps = (state, props) => {
    return {
        order: state.exchangeRates.order,
        currency: state.exchangeRates.currency,
        comparecurrency: state.exchangeRates.comparecurrency
    }
}

const mapDispatchToProps = {
    reOrder,
    setCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(OverTime)
