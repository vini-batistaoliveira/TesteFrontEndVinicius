import React, { Fragment } from 'react';
import { connect } from 'react-redux';

function updateValue(value) {
    return (value).toLocaleString('pt-BR') + ",00"; 
}

const Price = (props) => (
    <Fragment>
        <h4>Total: R$ {updateValue(props.counter.AddCartReducer.value)}</h4>
    </Fragment>
);

export default connect(state => ({
    counter: state
}))(Price);
