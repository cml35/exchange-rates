import React from 'react';
import PropTypes from 'prop-types';
import { OverTime } from './OverTime';
import { connect } from 'react-redux';
import { reOrder } from '../action';
import { Select, MenuItem } from '@material-ui/core';

const OrderDateDropDown = ({ order, reOrder }) => {
  return (
    <Select
      value={order}
      onChange={(event) => reOrder(event.target.value)}
    >
      <MenuItem value='ASC'>ASC</MenuItem>
      <MenuItem value='DESC'>DESC</MenuItem>
    </Select>
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
