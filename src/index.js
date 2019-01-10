import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import "semantic-ui-css/semantic.min.css";
import { HashRouter } from "react-router-dom";
import axios from "axios";
import { url } from "./config";
import axiosMiddleware from "redux-axios-middleware";

const clients = axios.create({
    baseURL: `${url}/api`,
    responseType: 'json'
})

let middleware = applyMiddleware(axiosMiddleware(clients));

let store = createStore(
    reducers,
    middleware
)

ReactDOM.render(
    <Provider store = {store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, document.getElementById('root')
);
