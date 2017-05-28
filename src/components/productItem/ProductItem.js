import React, {Component} from 'react';
import './ProductItem.css';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.productDescription = this.productDescription.bind(this);
        this.productHeaderClasses = this.productHeaderClasses.bind(this);
        this.state = {hidden: true};
    }

    productHeaderClasses() {
        return this.state.hidden ?
            'product__header' : 'product__header product__header--bold';
    }

    productDescription() {
        if (!this.state.hidden) {
            return (
                <div className="product__description">
                    {this.props.productInfo.description}
                </div>
            );
        }
        return null;
    }

    handleClick() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    render() {
        return (
            <li className="product">
                <button className={this.productHeaderClasses()}
                        onClick={this.handleClick}>
                    {this.props.productInfo.title}
                </button>

                {this.productDescription()}
            </li>
        );
    }
}

export default ProductItem;