//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
                    <Link to = {`/user/summary`}>
                        <div className = {style.user}>
                            <b className="iconfont icon-people_fill"/>
                            Liangwenzhu
                        </div>
                    </Link>
                    <div>
                        <Link to = {`/user/active/collect`}>
                            <b className="iconfont icon-collection_fill"/>
                        </Link>
                        <Link to = {`/user/message`}>
                            <b className="iconfont icon-mail_fill"/>
                        </Link>
                        <Link to = {`/user/setup`}>
                            <b className="iconfont icon-setup_fill"/>
                        </Link>
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
