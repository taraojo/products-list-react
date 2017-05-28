import React, {Component} from 'react';
import ProductItem from './components/productItem/ProductItem';
import './App.css';

const CATEGORIES_API = 'https://api.gousto.co.uk/products/v2.0/categories';
const PRODUCTS_API = 'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i mage_sizes[]=400&period_id=120';

class App extends Component {
    constructor(props) {
        super(props);

        this.saveApiData = this.saveApiData.bind(this);
        //this.handleClick = this.handleClick.bind(this);
        this.state = {
            categories: [],
            products: []
        };
    }

    saveApiData(data) {
        this.setState({categories: data});
    }

    saveProductApiData(data) {
        this.setState({products: data});
    }

    componentDidMount() {
        let categories = fetch(CATEGORIES_API);
        let products = fetch(PRODUCTS_API);

        Promise.all([categories, products])
            .then(response => {
                    let categoryData = response[0],
                        productData = response[1];

                    if (categoryData.status !== 200 || productData.status !== 200) {
                        console.log('Looks like there was a problem.');
                        return;
                    }

                    categoryData.json().then(data => {
                        this.saveApiData(data.data);
                    });

                    productData.json().then(data => {
                        this.saveProductApiData(data.data);
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error', err);
            });
    }

    render() {
        const productList = this.state.products.map((product) =>
            <ProductItem key={product.id}
                         productInfo={product}/>
        );

        function ListItem(props) {
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


        const categoryList = this.state.categories.map((category) =>
            <ListItem key={category.id}
                      value={category.title}/>
        );

        return (
            <div>
                <ul className="category-list">
                    {categoryList}
                </ul>
                <input type="text"/>
                <ul className="product-list">
                    {productList}
                </ul>
            </div>
        );
    }
}

export default App;
