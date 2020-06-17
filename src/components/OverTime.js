import React, { useState, useEffect } from 'react';
import ExchangeRateList from './ExchangeRateList';
import { connect } from 'react-redux';
import { reOrder, setCurrency } from '../action';
import PropTypes from 'prop-types';
import Currency from './Currency';
import OrderDateDropDown from './OrderDateDropDown';
import { apiRequest } from '../api/apiRequest';


export function OverTime({ reOrder, order, currency, comparecurrency }) {

    const [exchangeRateDateList, setExchangeRateDateList] = useState([]);

    useEffect(() => {
        apiRequest(currency, comparecurrency).then((arr) => setExchangeRateDateList(arr));
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
            {/*Use Material UI */}
            <br />
            <label>Order Date:</label>
                <OrderDateDropDown order={order}/>
            <br />
            <br />
            <ExchangeRateList type="OverTime" listItems={sortedList}/>
        </div>
    );
}

OverTime.propTypes = {
    order: PropTypes.string
}

const mapStateToProps = (state) => {
    const { order, currency, comparecurrency} = state.exchangeRates;
    return {
        order,
        currency,
        comparecurrency,
    }
}

export default connect(mapStateToProps)(OverTime)
