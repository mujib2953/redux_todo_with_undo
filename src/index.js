import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import MainComp from './Components/MainComp/MainComp';

const store = createStore( reducer );

ReactDOM.render(
    <Provider store={ store } >
        <MainComp />
    </Provider>, 
    document.getElementById('root')
);