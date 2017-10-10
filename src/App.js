import React, {findDOMNode, Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './gobalCss/App.css';
import './gobalCss/animation.css'
//路由
import Header from './containers/header/index';
import HomePage from './routeView/homePage/index';
import PostPage from './routeView/postPage/index';
import UserPage from './routeView/userPage/index';
//模态窗
import ModelLogin from './containers/modelLogin/index';
import ModelSign from './containers/modelSign/index';

import Button from './baseGroup/Button/index';
import Input from './baseGroup/Input/index';
import Select from './baseGroup/Select/index';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount(){
    }
    componentWillMount(){
    }
    render(){
        let ModelWindow;
        switch(this.props.modelWinState){
            case 'sign':
                ModelWindow = <ModelLogin title="登陆"/>;
                break;
            case 'login':
                ModelWindow = <ModelSign title="注册"/>;
        }
        return(
            <ConnectedRouter history={history}>
            <div className="App">
                {ModelWindow}
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/post" component={PostPage}/>
                        <Route path="/user" component={UserPage}/>
                        {/*<Switch>*/}
                        {/*<Route path="/inbox/react/:id" component={InboxChild}/>*/}
                        {/*<Route exact path="/inbox" component={Inbox}/>*/}
                        {/*</Switch>*/}
                    </Switch>
                </div>
            </div>
            </ConnectedRouter>
        )
    }
}

function select(state) {
    return {
        modelWinState: state.modelWinState,
        userName: state.userName
    };
}
export default connect(select)(App);