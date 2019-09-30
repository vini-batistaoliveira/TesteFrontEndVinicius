import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import MockApi from '../../services/mockApi';

import Grid from '@material-ui/core/Grid';
import Header from '../Header/index';
import Product from '../Product/index';
import Form from '../Form/index';
import PriceSubmit from '../PriceSubmit/index';

class Main extends Component {

    constructor(props){
        super(props);

        // this.state = {
        //     total: 0
        // }

        // this.total = 0;

    }

    // componentDidUpdate(){

    //     let total = 0;
    //     this.props.counter.map(item => {
    //         total = item.value + total;
    //      });

    //      this.total = total;
    // }

    render() {

        return (
            <div className="product-list">
                <Header name={"Produtos"}/>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                {
                    MockApi.map(function(item, i){
                        return(
                         <Grid key={item.id} item> 
                            <Product key={item.id} {...item} />
                        </Grid>
                        );
                    })
                }
                <Header name={"Dados do Cliente"}/>
                <Form />
                <PriceSubmit />                
                </Grid>
                

            </div>
        );
    }
}


export default connect(state => ({
    counter: state
}))(Main);