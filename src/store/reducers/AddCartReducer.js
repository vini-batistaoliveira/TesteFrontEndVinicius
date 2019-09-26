import { createStore } from 'redux';

const INITIAL_STATE = {
    numItens: 0,
    totalVal: 0
}

export default function addCartReducer(state = INITIAL_STATE, action) {
    if (action.type == 'SET_ALERT_MESSAGE') {
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