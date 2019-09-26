import React from 'react';
import "./styles.css";
//Stateless component

const image1 = require('../../resources/images/produto-01.jpeg');

const Product = () => (
    <div className="products">
        <img src={image1}/>
        <div className="info-products">
            <p className="productName">AirPods Apple Fones de Ouvido</p>
            <p className="productValue">R$ 1.499,00</p>
            <p className="productValueSecond">Em até 12x de R$ 124,92</p>
            <p className="productValueSecond">R$ 1.349 à vista (10% de desconto)</p>
        </div>
        <div className="product-add">
            <span className="product-plus">+</span>
            <input className="product-quantity"/>
            <span className="product-less">-</span>
        </div>
        <div className="product-button">
            <button>Adicionar</button>
        </div>
    </div>
);

export default Product;