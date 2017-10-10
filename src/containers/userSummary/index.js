import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
                <section>
                    <label>统计</label>
                    <div className = {style.item}>
                        <div><span>8</span>个月园龄</div>
                        <div><span>200</span>访问天数</div>
                        <div><span>100</span>阅读主题</div>
                        <Link to = {`/user/active/upVote`}>
                            <div><span>2</span><b className= {"iconfont icon-like_fill " + style.upvote}/>送出赞</div>
                        </Link>
                        <Link to = {`/user/active/collect`}>
                            <div><span>3</span><b className= {"iconfont icon-collection_fill " + style.upvote}/>收藏</div>
                        </Link>
                        <Link to = {`/user/active`}>
                            <div><span>1</span>创建主题</div>
                        </Link>
                        <Link to = {`/user/active/reply`}>
                            <div><span>4</span>创建回复</div>
                        </Link>
                        <Link to = {`/user/notice/upVote`}>
                            <div><span>0</span><b className= {"iconfont icon-like_fill " + style.upvote}/>获得赞</div>
                        </Link>
                    </div>
                </section>
                <div>
                    <section className = {style.inlineSection}>
                        <label>最近回复</label>
                        <div className = {style.content}>
                            <p>10天前</p>
                            <a><p>这是一条主题的名字</p></a>
                        </div>
                        <div className = {style.content}>
                            <p>220天前</p>
                            <a><p>这是第二条主题的名字</p></a>
                        </div>
                    </section>
                    <section className = {style.inlineSection}>
                        <label>最近主题</label>
                        <div className = {style.content}>
                            <p>10天前</p>
                            <a><p>这是一条主题的名字</p></a>
                        </div>
                        <div className = {style.content}>
                            <p>220天前</p>
                            <a><p>这是第二条主题的名字</p></a>
                        </div>
                    </section>
                </div>
                <div>
                    <section className = {style.inlineSection}>
                        <label>最近获赞</label>
                        <div className = {style.content}>
                            <p>10天前</p>
                            <p><a>Zhu</a>在<a>这是一条主题的名字</a>中赞了他</p>
                        </div>
                        <div className = {style.content}>
                            <p>103天前</p>
                            <p><a>Wen</a>在<a>这是一条主题的名字</a>中赞了他</p>
                        </div>
                    </section>
                    <section className = {style.inlineSection}>
                        <label>最近点赞</label>
                        <div className = {style.content}>
                            <p>10天前</p>
                            <p><a>Liang</a>在<a>这是一条主题的名字</a>中赞了<a>Zhu</a></p>
                        </div>
                        <div className = {style.content}>
                            <p>103天前</p>
                            <p><a>Liang</a>在<a>这是一条主题的名字</a>中赞了<a>Wen</a></p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
