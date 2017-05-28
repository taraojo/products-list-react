import React, {Component} from 'react';
import './ProductItem.css';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.productDescClasses = this.productDescClasses.bind(this);
        this.productHeaderClasses = this.productHeaderClasses.bind(this);
        this.state = {hidden: true};
    }

    handleClick() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    productDescClasses() {
        return this.state.hidden ? 'product__description product__description--hidden' : 'product__description';
    }

    productHeaderClasses() {
        return this.state.hidden ?
            'product__header' : 'product__header product__header--bold';
    }

    render() {
        return (
            <li className="product">
                <button className={this.productHeaderClasses()}
                        onClick={this.handleClick}>
                    {this.props.productInfo.title}
                </button>

                <div className={this.productDescClasses()}>
                    {this.props.productInfo.description}
                </div>
            </li>
        );
    }
}

export default ProductItem;