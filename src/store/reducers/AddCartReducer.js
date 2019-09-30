import { createStore } from 'redux';

const INITIAL_STATE = {
    numItens: 0,
    totalVal: 0
}

export default function addCartReducer(state = INITIAL_STATE, action) {
    console.log(action);
    if (action.type == 'INCREMENT') {
        // console.log('action');
        // console.log(action);
        return {
            ...state,
            numItens: action.numItens,
            totalVal: action.totalVal
        }
    }

    return state;
}