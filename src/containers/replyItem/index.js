//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Footer from './Footer/index';
import Operation from './Operation/index';
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
        //条件渲染<Footer/>
        const {
        } = this.props;
        return(
            <div className={style.init}>
                <img className={style.userHead} src={require('../../imgSource/45.png')}/>
                <div className={style.postContent}>
                    <div className={style.information}>
                        <p className={style.userName}>用户名字</p>
                        <span className={style.time}>5小时前</span>
                    </div>
                    <article className={style.article}/>
                    <Operation/>
                </div>
            </div>
        )
    }
}
