//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch,NavLink } from 'react-router-dom';
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
        return(
            <div className={style.init}>
                <NavLink exact to = {`/user/setup`} activeClassName = {style.active}>
                    <p className = {style.list}>
                        账户
                    </p>
                </NavLink>
                <NavLink exact to = {`/user/setup/decorate`} activeClassName = {style.active}>
                    <p className = {style.list}>
                        装饰
                     </p>
                </NavLink>
            </div>
        )
    }
}
