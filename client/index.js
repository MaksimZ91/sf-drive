import React from "react";
import ReactDOM from "react-dom";
import "./src/scss/module20.scss";
import "./src/scss/module20faq.scss";
import "./src/scss/registr.scss";
import "./src/scss/main.scss";
import './src/scss/authorization.scss'
import './src/scss/recovery.scss'
import './src/scss/navbarMobile.scss'
import './src/scss/autolisttitel.scss'
import './src/scss/auto.scss'
import './src/scss/myAuto.scss'
import './src/scss/infoAutoBlock.scss'
import './src/scss/addauto.scss'
import './src/scss/Options.scss'
import './src/scss/addautophoto.scss'
import './src/scss/uploader.scss'
import './src/scss/alert.scss'
import './src/scss/confirmation.scss'
import './src/scss/filterAuto.scss'
import './src/scss/arenda.scss'
import App from "./src/components/App";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from "./redux/root.Reducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
    
))
const app = (<Provider store={store}><App/></Provider>)


ReactDOM.render(app, document.getElementById("root"));
