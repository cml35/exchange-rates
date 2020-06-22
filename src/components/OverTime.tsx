import React, { useState, useEffect } from 'react';
import ExchangeRateList from './ExchangeRateList';
import { connect } from 'react-redux';
import { setCurrency as setCurrencyAction, setBaseCurrency as setBaseCurrencyAction } from '../action';
import OrderDateDropDown from './OrderDateDropDown';
import { apiRequest } from '../api/apiRequest';
import CurrencyDropDown from './CurrencyDropDown';

interface OverTimeProps {
    reOder: void;
    order: string;
    currency: string;
    baseCurrency: string;
    setCurrency(currency: string): void;
    setBaseCurrency(currency: string): void;
}

export function OverTime({ order, currency, baseCurrency, setCurrency, setBaseCurrency }: OverTimeProps) {
    const [exchangeRateDateList, setExchangeRateDateList] = useState<{ date: string, value: number }[]>([]);

    useEffect(() => {
        apiRequest(baseCurrency, currency).then((arr) => setExchangeRateDateList(arr));
    }, [baseCurrency, currency])

    let sortedList = exchangeRateDateList;

    sortedList.sort((x: {date: string, value: number}, y: {date: string, value: number}): number => {
        let xDate = new Date(x.date);
        let yDate = new Date(y.date);
        if (order == 'DESC') {
            return yDate.getTime() - xDate.getTime();
        }
        return xDate.getTime() - yDate.getTime();
    });

    return (
        <div className="overtime">
            <CurrencyDropDown currency={baseCurrency} setCurrency={setBaseCurrency}/>
            <p style={{display: 'inline-block'}}>v</p>
            <CurrencyDropDown currency={currency} setCurrency={setCurrency}/>
            <p>{baseCurrency ? baseCurrency : 'AUD'} $1</p>.
            <br />
            <label>Order Date: </label>
                <OrderDateDropDown order={order}/>
            <br />
            <br />
            <ExchangeRateList listItems={sortedList}/>
        </div>
    );
}


const mapDispatchToProps =  {
    setCurrency: setCurrencyAction,
    setBaseCurrency: setBaseCurrencyAction, 
}

const mapStateToProps = (state: any) => {
    const { order, currency, baseCurrency } = state.exchangeRates;
    return {
        order,
        currency,
        baseCurrency
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverTime)
