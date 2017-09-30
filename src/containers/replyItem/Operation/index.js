//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Post from './Post/index';
export default class componentName extends Component{
    constructor(props){
        super(props);
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
    postFn = ()=>{
        this.props.postFn();
    };

    render(){
        const {
            isReplyShow
        } = this.props;
        let postChildren = <span><span className={"iconfont icon-brush_fill " + style.post}/>回复(<span className={style.replyNum}>101</span>)</span>;
        isReplyShow
            ? postChildren = '收起回复'
            : postChildren = <span><span className={"iconfont icon-brush_fill " + style.post}/>回复(<span className={style.replyNum}>101</span>)</span>;
        return(
            <div className={style.init}>
                <ul className={style.ul}>
                    <li className={style.li + ' ' + style.love}><span className="iconfont icon-like_fill" title="给他点赞"/></li>
                    <li className={style.li}><span className="iconfont icon-share_fill" title="分享链接"/></li>
                    <li className={style.li}><span className="iconfont icon-collection_fill" title="内容不错，收藏"/></li>
                    <li className={style.listType}><Post postFn={this.postFn} active={isReplyShow}>{postChildren}</Post></li>
                </ul>
                {isReplyShow ? <div className={style.connect}/> : ''}
            </div>
        )
    }
}
