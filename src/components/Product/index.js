import React from 'react';
import "./styles.css";
//Stateless component

const image1 = require('../../resources/images/produto-01.jpeg');

const Product = () => (
    <div className="products">
        <img src={image1}/>
        <div>

        </div>
    </div>
);

export default Product;