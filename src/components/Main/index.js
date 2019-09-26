import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/index';
import Product from '../Product/index';

export default class Main extends Component{


    render(){

        return(
            <div className="product-list">
                <Header />
                <Product />
            </div>
        );
    }
}