import React, { Component } from "react";
import { connect } from "react-redux";

import MockApi from "../../services/mockApi";

import Grid from "@material-ui/core/Grid";
import Header from "../Header/index";
import Product from "../Product/index";
import Form from "../Form/index";

class Main extends Component {

  render() {
    return (
      <div className="product-list">
        <Header name={"Produtos"} />
        <Grid
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
    );
  }
}

export default connect(state => ({
  counter: state
}))(Main);
