import React from 'react';
import { shallow } from 'enzyme';
import { SpecificDate } from '../components/SpecificDate.js';
import Currency from '../components/Currency';
import DatePicker from 'react-datepicker';
import ExchangeRateList from '../components/ExchangeRateList';

describe('SpecificDate', () => {

  const mockSetSpecificDate = jest.fn();
  const mockSetCurrency = jest.fn();
  const defaultProps = { setSpecificDate : mockSetSpecificDate, date: '2020-05-05', currency: 'CAD', setCurrency: mockSetCurrency }

  const wrapper = shallow(<SpecificDate {...defaultProps} />);
  it('Renders the currency component', () => {
     expect(wrapper.find(Currency)).toBeDefined();
  })

  it('Renders the date picker', () => {
    expect(wrapper.find(DatePicker)).toBeDefined();
  })

  it('Renders the exchange rate list', () => {
    expect(wrapper.find(ExchangeRateList)).toBeDefined();
  })
});
