//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import style from './css.css';
export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
            a:undefined,
            b:undefined,
            c:undefined,
            d:undefined,
            e:'active',
        }
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
    handleClick = (val)=>{
        switch(val){
            case 'a':
             this.setState({
                 a:'active',
                 b:undefined,
                 c:undefined,
                 d:undefined,
                 e:undefined,
             });
             break;
            case 'b':
                this.setState({
                    a:undefined,
                    b:'active',
                    c:undefined,
                    d:undefined,
                    e:undefined,
                });
                break;
            case 'c':
                this.setState({
                    a:undefined,
                    b:undefined,
                    c:'active',
                    d:undefined,
                    e:undefined,
                });
                break;
            case 'd':
                this.setState({
                    a:undefined,
                    b:undefined,
                    c:undefined,
                    d:'active',
                    e:undefined,
                });
                break;
            case 'e':
                this.setState({
                    a:undefined,
                    b:undefined,
                    c:undefined,
                    d:undefined,
                    e:'active',
                })
        }
    };
    render(){
        const {
            children
        } = this.props;
        return(
            <div className={style.init}>
                <Link to={`/user`}><p className = {style[this.state.a]} onClick={()=>{this.handleClick('a')}}>概要</p></Link>
                <p className = {style[this.state.b]} onClick={()=>{this.handleClick('b')}}>活动</p>
                <Link to={`/user/notice`}><p className = {style[this.state.c]} onClick={()=>{this.handleClick('c')}}><span className="iconfont icon-remind_fill"/>通知</p></Link>
                <Link to={`/user/message`}><p className = {style[this.state.d]} onClick={()=>{this.handleClick('d')}}><span className="iconfont icon-mail_fill"/>私信</p></Link>
                <Link to={`/user`}><p className = {style[this.state.e]} onClick={()=>{this.handleClick('e')}}><span className="iconfont icon-setup_fill"/>设置</p></Link>
            </div>
        )
    }
}
