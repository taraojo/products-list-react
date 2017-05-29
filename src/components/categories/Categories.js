import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Categories.css';

class Categories extends Component {

    render() {
        function CategoryItem(props) {
            function handleClick() {
                console.log('test', arguments);
            }

            return (
                <li>
                    <h2>
                        <button onClick={handleClick}>{props.value}</button>
                    </h2>
                </li>
            );
        }

        const categoryList = this.props.categoriesData.map((category) =>
            <CategoryItem key={category.id}
                      value={category.title}/>
        );

        return (
            <ul className="category-list">
                {categoryList}
            </ul>
        );
    }
}

Categories.propTypes = {
    categoriesData: PropTypes.array.isRequired
};

export default Categories;