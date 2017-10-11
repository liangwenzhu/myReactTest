import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import style from './css.css';
import PicSelected from './picSelected/index'
export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
            selecting:undefined
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
    handleClick = (val) =>{
        this.setState({
            selecting:val,
        })
    };
    render(){
        const {
            children
        } = this.props;
        let a;
        switch(this.state.selecting){
            case 'pic':
                a = <PicSelected mouseOut = {this.handleClick}/>;
                break;
            case 'list':
                break;
        }
        return(
            <div className={style.init}>
                <span className = "iconfont icon-other"/>
                <img className = {style.userHead} src = {require('../../../../imgSource/7736_1.png')}
                    onClick = {()=>{this.handleClick('pic')}}
                />
                {a}
            </div>
        )
    }
}
