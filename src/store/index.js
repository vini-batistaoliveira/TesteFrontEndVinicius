// import { createStore } from 'redux';

// import rootReducer from './reducers/index';

// const store = createStore(rootReducer);

// export default store;

import reducerAdd from './reducers/index';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  reducerAdd,
  form: formReducer
})

const store = createStore(rootReducer);

export default store;
