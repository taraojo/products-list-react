import React, {Component} from 'react';
import './ProductItem.css';

class ProductItem extends Component {
    render() {
        return (
            <li>
                {this.props.value}
                <br/>
                {this.props.productInfo}
            </li>
        );
    }
}

export default ProductItem;