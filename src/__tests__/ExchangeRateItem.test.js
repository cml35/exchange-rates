import React from 'react';
import { shallow } from 'enzyme';

import ExchangeRateItem from '../components/ExchangeRateItem.js';

describe('ExchangeRateItem', () => {

    const dateItem =  { date: "2020-06-05", value: "1.5342" }
    const rateItem =  { rate: "CAD", value: "100.0600" }

    const wrapperDate = shallow(<ExchangeRateItem item={dateItem}/>);
    const wrapperRate = shallow(<ExchangeRateItem item={rateItem}/>);

    it('Renders the exchange rate item row for SpecificDate', () => {
        expect(wrapperDate.find('tr')).toBeDefined();
    });

    it('Renders the td and p element for the exchange rate item row (SpecificDate)', () => {
        expect(wrapperDate.find('td')).toBeDefined();
        expect(wrapperDate.find('p')).toBeDefined();
    });

    it('Renders the exchange rate item row for OverTime', () => {
        expect(wrapperRate.find('tr')).toBeDefined();
    });

    it('Renders the td and p element for the exchange rate item row (OverTime)', () => {
        expect(wrapperRate.find('td')).toBeDefined();
        expect(wrapperRate.find('p')).toBeDefined();
    });
})
