import React from "react";
import "./styles.css";

import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const finishImg = require("../../resources/images/purchase.png");

function updateValue(value) {
  return (value).toLocaleString('pt-BR') + ",00"; 
}

const Finish = props => (
  <div className="container">

    <div className="mainFinish">
      <div className="topFinish">

        <div className="titleFinish">
          <p>{props.location.state.name}</p>
        </div>
        <div className="textFinish">
          <p>
            Sua compra no valor de
          <span className="priceFinish"> R$ {updateValue(props.counter.AddCartReducer.value)} </span>
            foi finalizada com sucesso
        </p>
        </div>

      </div>
      <div className="imageFinish">
        <img title="Imagem dedo fazendo positivo" alt="Imagem dedo fazendo positivo" src={finishImg} />
      </div>
      <div className="buttonFinish">
        <Button
          onClick={() => {
            window.location.href = "http://localhost:3000";
          }}
        >
          {/*
           deixar o href para dar refresh na pagina e perder os 
            estados do redux
          */}
          Iniciar Nova Compra
        </Button>
      </div>
    </div>
  </div>
);

export default connect(state => ({
  counter: state
}))(Finish);
