import React from 'react';
import { shallow } from 'enzyme';

import Currency from '../components/Currency.js';

describe('Currency', () => {

    const mockOnCurrencyChange = jest.fn();
    const defaultProps = { id: '1', currency: 'CAD', mockOnCurrencyChange }
    const wrapper = shallow(<Currency {...defaultProps} />);

    it('Renders the div encapsulating the select element', () => {
        expect(wrapper.find('.currency')).toBeDefined();
    })

    it('Renders the select element', () => {
        expect(wrapper.find('select')).toBeDefined();
    })

    it('Renders the all the options in the select element', () => {
        expect(wrapper.find('option')).toHaveLength(32);
    })
});
