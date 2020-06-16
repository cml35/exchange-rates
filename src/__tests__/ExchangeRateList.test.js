
import React from 'react';
import { shallow } from 'enzyme';

import ExchangeRateList from '../components/ExchangeRateList.js';
import ExchangeRateItem from '../components/ExchangeRateItem';

describe('ExchangeRateList', () => {
    const listItemsRate = [
        { rate: "CAD", value: "1.5342" },
        { rate: "HKD", value: "8.7211" },
        { rate: "ISK", value: "151.7000" },
        { rate: "PHP", value: "56.6530" },
        { rate: "DKK", value: "7.4559" },
        { rate: "HUF", value: "347.0600" }
    ];

    const listItemsDate = [
        { date: "2018-10-12", value: 7.4602 },
        { date: "2018-10-15", value: 7.4609 },
        { date: "2018-10-16", value: 7.4609 },
        { date: "2018-10-17", value: 7.4604 },
        { date: "2018-10-18", value: 7.4606 },
        { date: "2018-10-19", value: 7.4606 }
    ];
    const wrapperRate = shallow(<ExchangeRateList listItems={listItemsRate}/>);
    const wrapperDate = shallow(<ExchangeRateList listItems={listItemsDate}/>);

    it('Renders a exchange list table', () => {
        expect(wrapperRate.find('#exchange-list-table')).toBeDefined();
    });

    it(`Renders <ExchangeRateItem /> 6 times`, () => {
        expect(wrapperRate.find(ExchangeRateItem)).toHaveLength(6);
    });

    it('Renders a exchange list table', () => {
        expect(wrapperDate.find('#exchange-list-table')).toBeDefined();
    });

    it(`Renders <ExchangeRateItem /> 6 times`, () => {
        expect(wrapperDate.find(ExchangeRateItem)).toHaveLength(6);
    });
})
