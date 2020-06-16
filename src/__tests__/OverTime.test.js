import React from 'react';
import { shallow } from 'enzyme';

import { OverTime } from '../components/OverTime.js';
import Currency from '../components/Currency';
import ExchangeRateList from '../components/ExchangeRateList';

describe('OverTime', () => {
  const wrapper = shallow(<OverTime />);

  it('Renders the currency components', () => {
    expect(wrapper.find(Currency)).toBeDefined();
  })

  it('Renders the exchange rate list', () => {
    expect(wrapper.find(ExchangeRateList)).toBeDefined();
  })
});
