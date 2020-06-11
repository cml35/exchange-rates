import React, { useState, useEffect } from 'react';
import ExchangeRateItem from './ExchangeRateItem.js';
import PropTypes from 'prop-types';

function ExchangeRateList({ listItems }) {

    const getExchangeListTable = () => {
        return listItems.map((item) => <ExchangeRateItem key={item.id} item={item} /> )
    }

    return (
        <table id = "exchange-list-table">
            {getExchangeListTable()}
        </table>
    );
}

ExchangeRateList.propTypes = {
    listItems: PropTypes.array
}

export default ExchangeRateList;