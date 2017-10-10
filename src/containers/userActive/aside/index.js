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
               <NavLink exact to = {`/user/active`} activeClassName = {style.active}>
                    <p className = {style.list}>主题</p>
                </NavLink>
                <NavLink exact to = {`/user/active/reply`} activeClassName = {style.active}>
                    <p className = {style.list}>回复</p>
                </NavLink>
                <NavLink exact to = {`/user/active/upVote`} activeClassName = {style.active}>
                    <p className = {style.list}>送出赞</p>
                </NavLink>
                <NavLink exact to = {`/user/active/collect`} activeClassName = {style.active}>
                    <p className = {style.list}>收藏</p>
                </NavLink>
            </div>
        )
    }
}
