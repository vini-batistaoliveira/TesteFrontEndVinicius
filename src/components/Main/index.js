import React, { Component } from "react";
import { connect } from "react-redux";

import MockApi from "../../services/mockApi";
import "./styles.css";

import Grid from "@material-ui/core/Grid";
import Header from "../Header/index";
import Product from "../Product/index";
import Form from "../Form/index";

class Main extends Component {
  render() {
    return (
      <div classname="fullAppContainer">
        <Header name={"Produtos"} />
        <div className="product-list">
          <Grid
            className="mainContainer"
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {MockApi.map(function(item, i) {
              return (
                <Grid key={item.id} item>
                  <Product key={item.id} {...item} />
                </Grid>
              );
            })}
            <Header name={"Dados do Cliente"} />
            <Form history={this.props.history} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  counter: state
}))(Main);
