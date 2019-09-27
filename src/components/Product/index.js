import React from 'react';
import "./styles.css";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const image1 = require('../../resources/images/produto-01.jpeg');
const plus = require('../../resources/icons/baseline-add-24px.svg');
const less = require('../../resources/icons/baseline-remove-24px.svg');

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
            <div className="add-product">
                <div className="topControl">
                    <span className="product-less">
                        {/* <img src={less} /> */}
                        -
                    </span>
                    <input value="0" />
                    <span>
                        {/* <img src={plus} /> */}
                        +
                    </span>
                </div>
                <div className="bottomControl">
                <Button variant="contained" color="primary">
                    Primary
                </Button> 
                 </div>
            </div>
        </CardContent>
    </Card>
);

export default Product;




// <Card className="card-container">
// <img src={image1} />
// <CardContent className="cardContent">
//     <div className="productInfo">
//         <p className="productName">AirPods Apple Fones de Ouvido</p>
//         <p className="productValue">R$ 1.499,00</p>
//         <p className="productValueSecond">Em até 12x de R$ 124,92</p>
//         <p className="productValueSecond">R$ 1.349 à vista (10% de desconto)</p>
//     </div>
//     <div className="add-product">
//         <div className="product-add">
//             <span className="product-less">
//                 <img src={less} />
//             </span>
//             <input value="0" className="product-quantity" />
//             <span className="product-plus">
//                 <img src={plus} />
//             </span>
//         </div>
//         <div className="product-button">
//         <Button variant="contained" color="primary">
//             Primary
//         </Button> 
//          </div>
//     </div>
// </CardContent>
// </Card>