import React from 'react';
import DatePicker from 'react-datepicker';
import { setSpecificDate } from '../action';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DatePickerInput = ({ setSpecificDate, date }) => (
  <DatePicker
    onChange={setSpecificDate}
    selected={date}
    dateFormat="yyyy-MM-dd"
  />
);

DatePickerInput.prototype = {
  setSpecificDate: PropTypes.func,
  date: PropTypes.string,
}

const mapDispatchToProps = {
  setSpecificDate
};

export default connect(null, mapDispatchToProps)(DatePickerInput);
