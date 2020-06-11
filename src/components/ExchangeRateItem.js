import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ExchangeRateItem(props) {    
    const getItemKey = () => {
        if (props.item.rate) {
            return props.item.rate;
        } else {
            return props.item.date;
        }
    }

    return (
        <tr className="exchange-item">
            <td><p>{getItemKey()}</p></td>
            <td><p>{props.item.value}</p></td>
        </tr>
    );
}

ExchangeRateItem.propTypes = {
    item: PropTypes.object.isRequired
  };

export default ExchangeRateItem;