import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import {BrowserRouter} from 'react-router-dom';
import General from './general.js';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers'

if (module.hot) {
  module.hot.accept();
}

const middleware = (applyMiddleware(thunk));
const store = createStore(reducer, middleware);
ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<General />
		</BrowserRouter>
	</Provider>
), document.getElementById('container'));
