//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';

import style from './css.css';
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
                <NavLink exact to = {`/user/message`} activeClassName = {style.active}>
                    <p className = {style.list}>收件箱</p>
                </NavLink>
                <NavLink exact to = {`/user/message/send`} activeClassName = {style.active}>
                    <p className = {style.list}>已发送</p>
                </NavLink>
            </div>
        )
    }
}
