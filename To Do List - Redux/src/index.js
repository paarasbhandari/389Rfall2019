import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import defaultState from './defaultState'
import { createStore } from 'redux'
import todos from './todosReducer'
import nextID from './nextIdReducer'
import displayInput from './displayInputReducer'
import form from './formReducer'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({todos:todos, nextID: nextID, displayInput:displayInput, form:form});
const store = createStore(rootReducer, defaultState);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
