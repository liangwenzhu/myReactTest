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
                <h3 className = {style.title}>心得 · 知识</h3>
                <div className = {style.item}>
                    <h4 className = {style.h}>狗狗真的是色盲吗？狗狗的眼睛是否真的看不见东西？</h4>
                    <div className = {style.flex}>
                        <img className = {style.articlePic} src = {require('../../imgSource/articlePic1.jpg')}/>
                        <div className = {style.content}>
                            <p className = {style.detail}><span className={style.classify}>知识</span><span className={style.time}>2016-5-15 22:40</span></p>
                            <article className = {style.article}>
                                人的眼睛都拥有能够捕捉光线的感受体称为光感受体，而光感受体分两种，一种是杆状细胞（Rod Cell)，负责夜间的视觉，另一种细胞称为椎状细胞或是视椎细胞(Cone Cell)，负责日间视力。　　在1995年Journal of the ...
                            </article>
                        </div>
                    </div>
                    <span className = {"iconfont icon-enter " + style.icon}/>
                </div>
                <div className = {style.item}>
                    <h4 className = {style.h}>夏天要不要给狗狗剃毛？</h4>
                    <div className = {style.flex}>
                        <img className = {style.articlePic} src = {require('../../imgSource/articlePic2.jpg')}/>
                        <div className = {style.content}>
                            <p className = {style.detail}><span className={style.classify}>知识</span><span className={style.time}>2016-3-15 12:41</span></p>
                            <article className = {style.article}>
                                进入夏季，许多狗主人不想看着自己的爱犬热得呼哧带喘的，不禁心生怜悯，操起剃刀给狗狗剃光光，好给狗狗来个“解脱”。这样究竟有没有必要？好不好？绝大部分动物都没法用出汗的方式来散热。天热的时候狗会伸着舌头 ...
                            </article>
                        </div>
                    </div>
                    <span className = {"iconfont icon-enter " + style.icon}/>
                </div>
                <div className = {style.item}>
                    <h4 className = {style.h}>为什么狗狗散步会要一直看着主人?</h4>
                    <div className = {style.flex}>
                        <img className = {style.articlePic} src = {require('../../imgSource/articlePic3.jpg')}/>
                        <div className = {style.content}>
                            <p className = {style.detail}><span className={style.classify}>心得</span><span className={style.time}>2016-9-15 21:10</span></p>
                            <article className = {style.article}>
                                为什么在散步的时候狗狗要一直看着主人？ 带着狗狗散步的时候，偶尔你想看看狗狗，转过头却发现狗狗却带着笑瞇瞇的表情 ，一边注目着你，一边踩着小小的步伐开心的跑着，为什么他要老是看着你呢？　这种灼热的视线是 ...
                            </article>
                        </div>
                    </div>
                    <span className = {"iconfont icon-enter " + style.icon}/>
                </div>
            </div>
        )
    }
}
