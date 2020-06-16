import React from 'react';
import { shallow } from 'enzyme';
import { OverTime } from '../components/OverTime';
import { SpecificDate } from '../components/SpecificDate';
import Container from '../components/Container.js';

describe('Container', () => {
    const wrapper = shallow(<Container/>);

    it('Renders the SpecificDate component', () => {
        expect(wrapper.find(SpecificDate)).toBeDefined();
    });

    it('Renders the OverTime component', () => {
        expect(wrapper.find(OverTime)).toBeDefined();
    });
})

