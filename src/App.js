import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store/index'
function App() {
  return (
    <div className="App">
     <Provider store={store}>
        <Routes />
     </Provider>
    </div>
  );
}

export default App;
