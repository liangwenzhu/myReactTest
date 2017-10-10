//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import style from './css.css';
import Ignore from './ignore/index'
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
                <NavLink exact to = {`/user/notice`} activeClassName = {style.active}>
                    <p className = {style.list}>系统通知</p>
                </NavLink>
               <NavLink exact to = {`/user/notice/receive`} activeClassName = {style.active}>
                    <p className = {style.list}>回应</p>
                </NavLink>
                <NavLink exact to = {`/user/notice/upVote`} activeClassName = {style.active}>
                    <p className = {style.list}>获得赞</p>
                </NavLink>
                <Ignore><span className = "iconfont icon-empty_fill"/>忽略全部</Ignore>
            </div>
        )
    }
}
