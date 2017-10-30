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
                <h3 className = {style.title}>来领养~</h3>
                <div className = {style.flex}>
                    <div className = {style.item}>
                        <img className = {style.img} src = {require('../../imgSource/homePageDemo1.jpg')}/>
                        <h3 className = {style.h3}>LOREM IPSUM</h3>
                        <p className = {style.p}>那只狡猾的狐狸跃过那只慵懒的狗</p>
                        <span className = {"iconfont icon-enter " + style.icon}/>
                        <b className = {style.upVote}>11<span className = {"iconfont icon-like_fill " + style.upvote}/></b>
                    </div>
                    <div className = {style.item}>
                        <img className = {style.img} src = {require('../../imgSource/homePageDemo2.jpg')}/>
                        <h3 className = {style.h3}>LOREM IPSUM</h3>
                        <p className = {style.p}>本人因工作原因无法继续养爱犬，不得不为狗狗重新寻找一个温暖可爱的家，狗狗为拉布拉多犬，一岁左右...</p>
                        <span className = {"iconfont icon-enter " + style.icon}/>
                        <b className = {style.upVote}>11<span className = {"iconfont icon-like_fill " + style.upvote}/></b>
                    </div>
                    <div className = {style.item}>
                        <img className = {style.img} src = {require('../../imgSource/homePageDemo3.jpg')}/>
                        <h3 className = {style.h3}>LOREM IPSUM</h3>
                        <p className = {style.p}>重新发帖： 狗狗一岁半了，黑色，大号泰迪，公的，18斤重，比较粘人，脾气好，很讨人喜欢。本着对狗狗 ...</p>
                        <span className = {"iconfont icon-enter " + style.icon}/>
                        <b className = {style.upVote}>11<span className = {"iconfont icon-like_fill " + style.upvote}/></b>
                    </div>
                    <div className = {style.item}>
                        <img className = {style.img} src = {require('../../imgSource/homePageDemo4.jpg')}/>
                        <h3 className = {style.h3}>LOREM IPSUM</h3>
                        <p className = {style.p}>本人捡了一只荷兰猪 不太擅长养 所以寻爱心人士领养 如要决定灵药就跟我联系 另外 记得要把自己笼子准备好额!注意上门自取 ...</p>
                        <span className = {"iconfont icon-enter " + style.icon}/>
                        <b className = {style.upVote}>11<span className = {"iconfont icon-like_fill " + style.upvote}/></b>
                    </div>
                    <div className = {style.item}>
                        <img className = {style.img} src = {require('../../imgSource/homePageDemo5.jpg')}/>
                        <h3 className = {style.h3}>LOREM IPSUM</h3>
                        <p className = {style.p}>重新发帖： 狗狗一岁半了，黑色，大号泰迪，公的，18斤重，比较粘人，脾气好，很讨人喜欢。我现 ...</p>
                        <span className = {"iconfont icon-enter " + style.icon}/>
                        <b className = {style.upVote}>11<span className = {"iconfont icon-like_fill " + style.upvote}/></b>
                    </div>
                    <div className = {style.item}>
                        <img className = {style.img} src = {require('../../imgSource/homePageDemo6.jpg')}/>
                        <h3 className = {style.h3}>LOREM IPSUM</h3>
                        <p className = {style.p}>想领养狗狗，体积不用太大，佛山和广州都可以，希望能碰上有缘的狗狗...</p>
                        <span className = {"iconfont icon-enter " + style.icon}/>
                        <b className = {style.upVote}>11<span className = {"iconfont icon-like_fill " + style.upvote}/></b>
                    </div>
                    <div className = {style.item}>
                        <img className = {style.img} src = {require('../../imgSource/homePageDemo7.jpg')}/>
                        <h3 className = {style.h3}>LOREM IPSUM</h3>
                        <p className = {style.p}>现居住广州荔湾区，跟女朋友两个人住，家里养过小猫小狗 工作我们两人都是双休的，朝九晚六，有 ...</p>
                        <span className = {"iconfont icon-enter " + style.icon}/>
                        <b className = {style.upVote}>11<span className = {"iconfont icon-like_fill " + style.upvote}/></b>
                    </div>
                    <div className = {style.item}>
                        <img className = {style.img} src = {require('../../imgSource/homePageDemo8.jpg')}/>
                        <h3 className = {style.h3}>LOREM IPSUM</h3>
                        <p className = {style.p}>三色柯基弟弟，斑仔，现在6个月大。之前2个月时患病被主人抛弃，被我们收留医治，现已基本痊愈。由于狗狗前段时间生病体质弱，所以 ...</p>
                        <span className = {"iconfont icon-enter " + style.icon}/>
                        <b className = {style.upVote}>11<span className = {"iconfont icon-like_fill " + style.upvote}/></b>
                    </div>
                </div>
            </div>
        )
    }
}
