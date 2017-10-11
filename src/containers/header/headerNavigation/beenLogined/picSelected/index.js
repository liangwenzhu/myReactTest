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
    componentWillUnmount(){

    }
    mouseOutHandle = ()=>{
      this.props.mouseOut(' ')
    };
    render(){
        const {
            children
        } = this.props;
        return(
            <div className = {style.init} onMouseLeave = {this.mouseOutHandle}>
                <header className = {style.header}>
                    <NavLink to = {`/user/summary`}>
                        <div className = {style.user}>
                            <b className="iconfont icon-people_fill"/>
                            Liangwenzhu
                        </div>
                    </NavLink>
                    <div>
                        <NavLink to = {`/user/active/collect`} activeClassName={style.active}>
                            <b className="iconfont icon-collection_fill"/>
                        </NavLink>
                        <NavLink to = {`/user/message`} activeClassName={style.active}>
                            <b className="iconfont icon-mail_fill"/>
                        </NavLink>
                        <NavLink to = {`/user/setup`} activeClassName={style.active}>
                            <b className="iconfont icon-setup_fill"/>
                        </NavLink>
                    </div>
                </header>
                <footer className = {style.footer}>
                    <div>
                        <b className="iconfont icon-send"/>
                        登出
                    </div>
                </footer>
            </div>
        )
    }
}
