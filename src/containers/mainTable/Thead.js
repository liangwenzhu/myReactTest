//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
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
            <div className={style.thead}>
                <div className={style.title}>主题</div>
                <div className={style.category}>分类</div>
                <div className={style.user}>用户</div>
                <div className={style.reply}>回复</div>
                <div className={style.visit}>浏览</div>
                <div className={style.active}>活动</div>
            </div>
        )
    }
}
