import React from 'react';
import {shallow} from 'enzyme';
import Categories from './Categories';

let categories,
    category = {id: '1234'},
    categoriesData = [{
        id: '17eb3f8e-bf7e-11e5-ab63-02fada0dd3b9',
        title: 'Snacks'
    }];

describe('Product item component', () => {
    beforeEach(() => {
        categories = shallow(
            <Categories categoriesData={categoriesData}/>
        );
    });


    it('renders a list of categories', () => {
        expect(categories.find('CategoryItem').length).toEqual(1);
    });

    it('renders nothing with empty array', () => {
        categoriesData = [];
        categories = shallow(
            <Categories categoriesData={categoriesData}/>
        );
        expect(categories.find('CategoryItem').length).toEqual(0);
    });

    it('renders 3 items', () => {
        categoriesData = [category, category, category];
        categories = shallow(
            <Categories categoriesData={categoriesData}/>
        );
        expect(categories.find('CategoryItem').length).toEqual(3);
    });
});


