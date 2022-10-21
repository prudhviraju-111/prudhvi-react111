import { createStore, applyMiddleware} from "redux";

import rootReducer from './../reducers/index'

import promiseMiddleware from 'redux-promise'

//redux-promise

var store = createStore(rootReducer,applyMiddleware(promiseMiddleware));


export default store