//button
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
                <h3 className = {style.title}>求宠物~</h3>
                <div className = {style.item}>
                    <img className = {style.userHead} src = {require('../../imgSource/7736_1.png')}/>
                    <div className = {style.user}>
                        <p className = {style.userName}><span className={style.span}>爱你一万年</span> 求宠物：</p>
                        <p className = {style.askTitle}>LOREM IPSUM</p>
                    </div>
                    <article className = {style.article}>
                        重新发帖： 狗狗一岁半了，黑色，大号泰迪，公的，18斤重，比较粘人，脾气好，很讨人喜欢。我现 ...
                    </article>
                    <span className = {"iconfont icon-enter " + style.icon}/>
                </div>
                <div className = {style.item}>
                    <img className = {style.userHead} src = {require('../../imgSource/7736_1.png')}/>
                    <div className = {style.user}>
                        <p className = {style.userName}><span className={style.span}>爱你一万年</span> 求宠物：</p>
                        <p className = {style.askTitle}>LOREM IPSUM</p>
                    </div>
                    <article className = {style.article}>
                        现居住广州荔湾区，跟女朋友两个人住，家里养过小猫小狗 工作我们两人都是双休的，朝九晚六，有 .
                    </article>
                    <span className = {"iconfont icon-enter " + style.icon}/>
                </div>
                <div className = {style.item}>
                    <img className = {style.userHead} src = {require('../../imgSource/7736_1.png')}/>
                    <div className = {style.user}>
                        <p className = {style.userName}><span className={style.span}>爱你一万年</span> 求宠物：</p>
                        <p className = {style.askTitle}>LOREM IPSUM</p>
                    </div>
                    <article className = {style.article}>
                        晚上散步捡到的小母猫，大约一个月大小，白色头顶有一小撮黑毛，性格活泼亲人跟着我和老公走了好 ...
                    </article>
                    <span className = {"iconfont icon-enter " + style.icon}/>
                </div>
            </div>
        )
    }
}
