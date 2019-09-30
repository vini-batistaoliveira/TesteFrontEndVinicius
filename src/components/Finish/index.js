import React from "react";
import "./styles.css";

import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const finishImg = require("../../resources/images/purchase.png");

function updateValue(props) {
  let total = 0;
  props.counter.reducerAdd.map(item => {
    total = item.value + total;
  });

  // return total = (total).toLocaleString('pt-BR');
  return total;
}

const Finish = props => (
  <div className="container">
    {console.log("FINISHHHHH")}
    {console.log(props)}

    <div className="mainFinish">
      <div className="titleFinish">
        <p>{props.location.state.color}</p>
      </div>
      <div className="textFinish">
        <p>
          Sua compra no valor de{" "}
          <span className="priceFinish">R$ {updateValue(props)}</span>
          foi finalizada com sucesso
        </p>
      </div>
      <div className="imageFinish">
        <img src={finishImg} />
      </div>
      <div className="buttonFinish">
        <Button
          onClick={() => {
            window.location.href = "http://localhost:3000";
          }}
        >
          Iniciar Nova Compra
        </Button>
      </div>
    </div>
  </div>
);

export default connect(state => ({
  counter: state
}))(Finish);
