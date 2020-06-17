import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ExchangeRateItem(props) {
    const { rate, date, value } = props.item;

    return (
        <tr className="exchange-item">
            <td><p>{rate || date}</p></td>
            <td><p>{value}</p></td>
        </tr>
    );
}

ExchangeRateItem.propTypes = {
    item: PropTypes.object.isRequired
  };

export default ExchangeRateItem;
