//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, NavLink, Switch, NavNavLink } from 'react-router-dom';
import style from './css.css';
export default class componentName extends Component{
    constructor(props){
        super(props);
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
                <NavLink to={`/user/summary`} activeClassName = {style.active}>
                    <span className="iconfont icon-workbench_fill"/>概要
                </NavLink>
                <NavLink to={`/user/active`} activeClassName = {style.active}>
                    <span className="iconfont icon-interactive_fill"/>活动
                </NavLink>
                <NavLink to={`/user/notice`} activeClassName = {style.active}>
                    <span className="iconfont icon-remind_fill"/>通知
                </NavLink>
                <NavLink to={`/user/message`} activeClassName = {style.active}>
                    <span className="iconfont icon-mail_fill"/>私信
                </NavLink>
                <NavLink to={`/user/setup`} activeClassName = {style.active}>
                    <span className="iconfont icon-setup_fill"/>设置
                </NavLink>
            </div>
        )
    }
}
