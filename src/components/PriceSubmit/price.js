import React, { Fragment } from 'react';
import { connect } from 'react-redux';

function updateValue(props) {
    let total = 0
    props.counter.reducerAdd.map(item => {
        total = item.value + total;
    });


    return total = (total).toLocaleString('pt-BR').concat(",00"); 
}

const Price = (props) => (
    <Fragment>
        {console.log("Price")}
        {console.log(props.counter)}
        <h4>Total: R$ {updateValue(props)}</h4>
    </Fragment>
);

export default connect(state => ({
    counter: state
}))(Price);
