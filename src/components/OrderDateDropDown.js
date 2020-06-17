import React from 'react';
import PropTypes from 'prop-types';
import { OverTime } from './OverTime';
import { connect } from 'react-redux';
import { reOrder } from '../action';

const OrderDateDropDown = ({ order, reOrder }) => {
  return (
    <select onChange={(event) => reOrder(event.target.value)} value={order}>
      <option value='ASC'>Ascending</option>
      <option value='DESC'>Descending</option>
    </select>
  );
};

OverTime.propTypes = {
  order: PropTypes.string,
  reOrder: PropTypes.func,
}

const mapDispatchToProps = {
  reOrder
}

export default connect(null, mapDispatchToProps)(OrderDateDropDown);
