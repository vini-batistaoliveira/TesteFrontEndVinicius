import React from 'react';
import "./styles.css";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const image1 = require('../../resources/images/produto-01.jpeg');

const Product = () => (
    <Card className="card-container">
        <img src={image1} />
        <CardContent className="cardContent">
            <div className="productInfo">
                <p className="productName">AirPods Apple Fones de Ouvido</p>
                <p className="productValue">R$ 1.499,00</p>
                <p className="productValueSecond">Em até 12x de R$ 124,92</p>
                <p className="productValueSecond">R$ 1.349 à vista (10% de desconto)</p>
            </div>
            <span className="add-product">
                <div className="product-add">
                    <span className="product-plus">+</span>
                    <input className="product-quantity" />
                    <span className="product-less">-</span>
                </div>
                <div className="product-button">
                    <Button variant="contained" color="primary">
                        Primary
                    </Button> 
                 </div>
            </span>
        </CardContent>
    </Card>
    // <div className="products">
    //     <img src={image1}/>
    //     <div className="info-products">
    // <p className="productName">AirPods Apple Fones de Ouvido</p>
    // <p className="productValue">R$ 1.499,00</p>
    // <p className="productValueSecond">Em até 12x de R$ 124,92</p>
    // <p className="productValueSecond">R$ 1.349 à vista (10% de desconto)</p>
    //     </div>
    // <div className="product-add">
    //     <span className="product-plus">+</span>
    //     <input className="product-quantity"/>
    //     <span className="product-less">-</span>
    // </div>
    // <div className="product-button">
    //     <button>Adicionar</button>
    // </div>
    // </div>
);

export default Product;