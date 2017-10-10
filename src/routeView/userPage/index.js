//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import style from './css.css';
import UserHeader from '../../containers/userHeader/index'
import UserNav from '../../containers/userNav/index'
import Setup from '../../containers/userSetUp/index'
import Message from '../../containers/userMessage/index'
import Notice from '../../containers/userNotice/index'
import Active from '../../containers/userActive/index'
import Summary from '../../containers/userSummary/index'

export default class componentName extends Component{
    constructor(props){
        super(props)
    }
    static propTypes = {

    };
    static defaultProps = {

    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        const {
            children
        } = this.props;
        return(
            <div className={style.init}>
                <UserHeader/>
                <UserNav/>
                <Switch>
                    <Route exact path="/user/summary" component={Summary}/>
                    <Route path="/user/setup" component={Setup}/>
                    <Route path="/user/notice" component={Notice}/>
                    <Route path="/user/active" component={Active}/>
                    <Route path="/user/message" component={Message}/>
                </Switch>
            </div>
        )
    }
}
