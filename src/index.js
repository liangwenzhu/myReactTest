import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import {Router, Route, Link,Switch} from 'react-router-dom';
import reducers from './reducers/reduce' // Or wherever you keep your reducers
import App from './App';
import aaa from './routeView/homePage/index'
import registerServiceWorker from './registerServiceWorker';

// import About from './dontknow/About'
// import Inbox from './dontknow/Inbox'
// import InboxChild from './dontknow/InboxChild'
const history = createHistory();
const middleware = routerMiddleware(history);
// const store = createStore(
//     reducers
    // combineReducers({
    //     reducers,
    //     router: routerReducer
    // })
    // applyMiddleware(middleware)
// );
const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
