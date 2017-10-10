import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Button from './Button/index'
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
                <div className={style.content}>
                    <div className = {style.user}>
                        <img className = {style.userHead} src={require('../../imgSource/7736_1.png')}/>
                        <div className = {style.userName}>
                            <h2>liang</h2>
                            <h4>kaka</h4>
                        </div>
                    </div>
                    <Button><span className="iconfont icon-message_fill"/>私信</Button>
                </div>
                <div className = {style.footer}>
                    <div>加入时间：<span>17年9月19日</span></div>
                    <div>最后发帖：<span>17年9月19日</span></div>
                    <div>最后活动：<span>17年9月19日</span></div>
                    <div>浏览：<span>5</span></div>
                    <div>发帖：<span>2</span></div>
                    <div>邮箱：<span>1252557331@qq.com</span></div>
                </div>
            </div>
        )
    }
}
