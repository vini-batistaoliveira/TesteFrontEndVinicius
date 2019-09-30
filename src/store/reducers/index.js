const INITIAL_STATE = [
        {id: 0, quantity: 0, value: 0},
        {id: 1, quantity: 0, value: 0},
        {id: 2, quantity: 0, value: 0},
        {id: 3, quantity: 0, value: 0},
        {id: 4, quantity: 0, value: 0},
        {id: 5, quantity: 0, value: 0},
        {id: 6, quantity: 0, value: 0},
        {id: 7, quantity: 0, value: 0},
    ];

export default (state = INITIAL_STATE, action) => {

    console.log('ACTION: ', action);
    console.log('STATE: ', state);

    switch (action.type) {
      case 'INCREMENT':
        return state.map(product => {
          if (product.id === action.product.id) {
            return {...product, quantity: product.quantity + 1, value: product.value + action.product.value}
          };
          return product;
        });

        case 'DECREMENT':
        return state.map(product => {
          if (product.id === action.product.id) {
            return {...product, quantity: product.quantity - 1, value: product.value - action.product.value}
          };
          return product;
        });
      default: return state
    }
  }

// const reducer = (state = INITIAL_STATE, action) => {


//     // if (action.type == "INCREMENT") {
//     //     console.log('VALOR RET', ret);
//     //     return {
//     //         ...state,
//     //         total: action.product.value,
//     //         product:  ret ? ret : state.product.concat(action.product)
//     //     }

//     // } else if (action.type == "DECREMENT") {
//     //     return state;
//     // }
// }
// export default reducer;