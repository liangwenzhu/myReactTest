//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import style from './css.css';
import Thead from'./'
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
            <div className={style.tbody}>
                <div className={style.title}>
                    <Link to={`/post`}>React 封装tree实现节点删除，编辑功能？</Link>
                    <div className={style.pitContainer}>
                        <img className={style.pitPic} src={require('./pitPic/0a4b80881c7c6e73a2c76de4d275590a.jpg')}/>
                        <img className={style.pitPic} src={require('./pitPic/01ee36309c86c20b766e983e69bb8bf0.jpg')}/>
                        <img className={style.pitPic} src={require('./pitPic/00683ee14f381c00a6dfe75bb06dc6ad.jpg')}/>
                    </div>
                </div>
                <div className={style.category}><span className={style.categoryColor}/>提问</div>
                <div className={style.user}>
                    <img className={style.userHead} src={require('./userHeadImg/2_1.png')}/>
                    <img className={style.userHead} src={require('./userHeadImg/25.png')}/>
                    <img className={style.userHead} src={require('./userHeadImg/299_1.png')}/>
                    <img className={style.userHead} src={require('./userHeadImg/1562_1.png')}/>
                </div>
                <div className={style.reply}>2</div>
                <div className={style.visit}>15.3K</div>
                <div className={style.active}>26天前</div>
            </div>
        )
    }
}
