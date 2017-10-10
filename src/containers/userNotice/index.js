import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import style from './css.css';
import Aside from './aside/index'
import System from './system/index'
import Receive from './receive/index'
import Nothing from './nothing/index'
import UpVote from './upVote/index'
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
                <Aside/>
                <Switch>
                    <Route exact path="/user/notice" component={System}/>
                    <Route exact path="/user/notice/receive" component={Receive}/>
                    <Route exact path="/user/notice/upVote" component={UpVote}/>
                </Switch>
            </div>
        )
    }
}
