import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
// import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import {Router, Route, Link,Switch} from 'react-router-dom';
import reducers from './store/store' // Or wherever you keep your reducers
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import About from './dontknow/About'
import Inbox from './dontknow/Inbox'
import InboxChild from './dontknow/InboxChild'
const history = createHistory();
const middleware = routerMiddleware(history);
// const store = createStore(
//     combineReducers({
//         reducers,
//         router: routerReducer
//     })
//     applyMiddleware(middleware)
// );
const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/about" component={About}/>
                    <Switch>
                        <Route exact path="/inbox" component={Inbox}/>
                        <Route path="/inbox/react/:id" component={InboxChild}/>
                    </Switch>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
