import React, { Component } from "react";
import api from "../../services/api";
import './styles.css';
import { Link } from 'react-router-dom';

const options = {
    method: 'GET',
    url: '/api/retail/v1/retailPriceList/01%7CNET/itensTablePrice/',
    params: {page: 1, pagesize: 20},
  };
  
export default class Main extends Component {

    state = {
        products: [],
        hasNext : ".T.",
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async ( page = 1 ) => {
        options.params.page = page;
        const response = await api.request(options);
        const products = response.data.items;
        const hasNext = response.data.hasNext;
        this.setState( { products: products, hasNext, page } );
        //console.log(response.data.items);
        //console.log(response.data.hasNext);
        //console.log(page)

    };

    prevPage = () => {
        const {page} = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    };

    nextPage = () => { 
        const {page, hasNext} = this.state;
        if (hasNext === ".F.") return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);

    };
    
    render(){
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <article key={product.itemInternalId}>
                        <strong>{product.itemCode}</strong>
                        <p>{product.minimumSalesPrice}</p>

                        <Link to={`/products/${product.itemCode}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={ this.state.page === 1 } onClick={this.prevPage}>Anterior</button>
                    <button disabled={ this.state.hasNext === '.F.' } onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}