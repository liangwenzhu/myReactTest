import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
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
                <div className = {style.community}>
                    <div className = {style.nav}>
                        <div className = {style.item}>
                            <span className = {style.navItem1}>宠物社区</span>
                            <span className = {style.navItem2}>我要领养</span>
                            <span className = {style.navItem3}>我要赠送</span>
                        </div>
                        <div className = {style.item}>
                            <span className = {style.navItem4}>宠物趣闻</span>
                            <span className = {style.navItem5}>宠物介绍</span>
                            <span className = {style.navItem6}>宠物心得</span>
                        </div>
                        <div className = {style.item}>
                            <span className = {style.navItem7}>今日签到</span>
                            <span className = {style.navItem8}>流浪救助站</span>
                        </div>
                    </div>
                    <div className = {style.code}>
                        <img className = {style.code} src = {require('../../imgSource/code.jpg')}/>
                        <span className = {style.codeTips}>扫一扫关注去领养<br/>微信公众号</span>
                    </div>
                </div>
                <div className = {style.welcome}>
                    <img className = {style.img} src = {require('../../imgSource/welcomeImg.png')}/>
                    <div className = {style.declare}>
                        <h4 className = {style.title}>欢迎来到我们的领养大家庭</h4>
                        <article className = {style.article}>
                            我们仅提供一个领养及交流宠物心得的平台，对平台内容的真实性不负任何法律责任。
                            <p className={style.link}>详情请点击： <a><span className="iconfont icon-label_fill"/>《这是一个协议》</a></p>
                        </article>

                    </div>
                </div>
            </div>
        )
    }
}
