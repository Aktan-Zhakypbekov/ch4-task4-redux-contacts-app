import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterSwitch from './RouterSwitch';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reduxFunctions/dataReducer';

let store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterSwitch />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
