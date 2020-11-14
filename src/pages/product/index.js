import React, { Component } from 'react';
import api from '../../services/api';
import './style.css'

export default class Product extends Component {

    state = {
        product :[],
    };



    async componentDidMount() {
        const { id } = this.props.match.params;

        const options = {
            method: 'POST',
            url: `/restprod`,
            data:{
                "produto": `${id}`
            }
        };

        const response = await api.request(options);
        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.Produto}</h1>
                <p>Estoque: {product.Estoque}</p>
            </div>
        )
    }
}