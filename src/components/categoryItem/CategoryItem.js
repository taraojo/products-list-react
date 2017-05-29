import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CategoryItem.css';

class CategoryItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
    }

    render() {
        return (
            <li className="category-item">
                <button onClick={() => this.props.clickHandler(this.props.id)}>
                    <h2>
                        {this.props.value}
                    </h2>
                </button>
            </li>
        );
    }
}

CategoryItem.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    clickHandler: PropTypes.func
};

export default CategoryItem;