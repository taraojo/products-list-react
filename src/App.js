import React, {Component} from 'react';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import './App.css';

const CATEGORIES_API = 'https://api.gousto.co.uk/products/v2.0/categories';
const PRODUCTS_API = 'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i mage_sizes[]=400&period_id=120';

class App extends Component {
    constructor(props) {
        super(props);

        this.saveApiData = this.saveApiData.bind(this);
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
        return (
            <div className="app">
                <Categories categoriesData={this.state.categories}/>
                <input type="text"/>
                <Products productsData={this.state.products}/>
            </div>
        );
    }
}

export default App;
