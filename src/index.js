
// Index.js--> Root_Module for Entire project

import React from 'react'

import ReactDOM from 'react-dom'


// import Bootstrap css into React

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


//import routing.js

import Routings from './components/Routings';

import { Provider } from "react-redux";

import store from "./store";

ReactDOM.render( <Provider store={store}>
    <Routings />
</Provider> , document.getElementById('root'))