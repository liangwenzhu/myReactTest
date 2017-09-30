//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import style from './css.css';
import TitleImg from './titleImg/index';
import TitleContent from './titleContent/index'
import Navigation from './headerNavigation/index';
export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:false
        }
    }
    static propTypes = {

    };
    static defaultProps = {

    };
    componentWillMount(){

    }
    componentDidMount(){
        window.onscroll = ()=>{
            let a = document.documentElement.scrollTop;
            if(a>0){
                this.setState({
                    title : true
                })
            }else{
                this.setState({
                    title : false
                })
            }
        }
    }
    componentWillUnmount(){

    }
    render(){
        //条件渲染<TitleImg/>以及 <TitleContent/>
        let title = this.state.title ? <TitleContent>标题</TitleContent> : <TitleImg/>;
        const {
            children
        } = this.props;
        return(
            <div className={style.init}>
                <header className={style.header}>
                    <div className={style.logo}>
                        <Link to={`/`}>
                            <img className={style.logoImg} src={require('../../imgSource/headerIcon.jpg')} />
                        </Link>
                        {title}
                    </div>
                    <Navigation/>
                </header>
            </div>
        )
    }
}
