
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';

import style from './css.css';
import Post from './Post/index';
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
    handleClick = ()=>{

    };
    render(){
        const {
            children
        } = this.props;
        return(
            <div className={style.init}>
                <ul className={style.ul}>
                    <li className={style.li + ' ' + style.love}><span className="iconfont icon-like_fill" title="给他点赞"/></li>
                    <li className={style.li}><span className="iconfont icon-share_fill" title="分享链接"/></li>
                    <li className={style.li}><span className="iconfont icon-collection_fill" title="内容不错，收藏"/></li>
                    <li className={style.listType}><Post onClick = {this.handleClick}><span className={"iconfont icon-brush_fill " + style.post}/>回复(<span className={style.replyNum}>101</span>)</Post></li>
                </ul>
            </div>
        )
    }
}
