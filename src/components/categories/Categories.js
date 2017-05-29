import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CategoryItem from '../categoryItem/CategoryItem'
import './Categories.css';

class Categories extends Component {

    render() {
        const categoryList = this.props.categoriesData.map(category =>
            <CategoryItem key={category.id}
                          value={category.title}
                          id={category.id}
                          clickHandler={this.props.clickHandler}/>
        );

        return (
            <ul className="category-list">
                {categoryList}
            </ul>
        );
    }
}

Categories.propTypes = {
    categoriesData: PropTypes.array.isRequired,
    clickHandler: PropTypes.func
};

export default Categories;