import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers/index';
import thunk from 'redux-thunk';
const store = createStore(
    appReducers,
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store ={store}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
