import React from 'react';
import "./styles.css";
import { connect } from 'react-redux';
// import { increment, decrement, reset } from '../../actions/counters';
import reducer from '../../store/reducers/index';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const plus = require('../../resources/icons/baseline-add-24px.svg');
const less = require('../../resources/icons/baseline-remove-24px.svg');

// const {counter,increment,decrement,reset} = this.props;

// const mapStateToProps = (state) => {
//     return {
//        counter: state
//     };
//  };
//  const mapDispatchToProps = (dispatch) => {
//     return {
//        increment: () => dispatch(increment()),
//        decrement: () => dispatch(decrement()),
//        reset: () => dispatch(reset())
//     };
//  };

 function dispatchIncrement(props, id, value){
     console.log("Dispatch increment function");
     console.log(props);

    value = parseFloat(value.replace(",00", ""));

    let dispatchIncrement = {
        type: 'INCREMENT',
        product: {
            id: id,
            value: value,
            quantity: 1
        }
    }; 
    props.dispatch(dispatchIncrement);
}

function dispatchDecrement(props, id, value){

    if(props.counter.reducerAdd[props.id].quantity == 0){
        return;
    }

    console.log("Dispatch decrement function");

    value = parseFloat(value.replace(",00", ""));

    let dispatchIncrement = {
        type: 'DECREMENT',
        product: {
            id: id,
            value: value,
            quantity: 1
        }
   }; 
   props.dispatch(dispatchIncrement);
}

const Product = (props) => (
    <Paper className="backPaper">
    {console.log("props", props)}
        <Card className="card">
            <div className="img">
                <img alt={props.title} title={props.title} src={require(`../../resources/images/${props.image}`)} />
            </div>
            <div className="buttons">

                <div className="up">
                    <p className="title">{props.title}</p>
                    <p className="price">R${props.price}</p>
                    <p className="subTitle">Em até 12x de R$ {props.splitPrice}</p>
                    <p className="subTitle"> R$ {props.singlePrice} à vista (10% de desconto)</p>
                </div>

                <div className="down">

                    <span className="rowSpan">
                        <span className="circleContainer">
                            <Button onClick={() => {dispatchDecrement(props, props.id, props.price)}}>
                                <img alt="Diminuir Quantidade" title="Diminuir Quantidade" className="circle" src={less} />
                            </Button>
                        </span>
                        <input defaultValue={props.counter.reducerAdd[props.id].quantity} value={props.counter.reducerAdd[props.id].quantity} className="inputNum" />
                        <span className="circleContainer">
                            <Button onClick={() => {dispatchIncrement(props, props.id, props.price)}} className="btnCircle">
                                <img alt="Aumentar Quantidade" title="Aumentar Quantidade" className="circle" src={plus} />
                            </Button>
                        </span>
                    </span>

                    <span className="rowButton">
                        <Button title="Adicionar" variant="contained" color="primary">
                            Adicionar
                     </Button>
                    </span>
                </div>
            </div>
        </Card >
    </Paper>
);

export default connect(state => ({
    counter: state
}))(Product);

// export default Product;

