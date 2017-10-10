//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import PassWorldChange from './passWorldChange/index'
import Post from './post/index'
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
                <div className = {style.item}>
                    <label className = {style.active}>背景墙</label>
                    <img className = {style.bgPic} src = {require('../../../imgSource/userHeaderBg.jpg')}/>
                    <span className = {"iconfont icon-editor " + style.edit + ' ' + style.picEdit} />
                    <span className = {style.tips}>上传的图片将作为个人主页的背景图片</span>
                </div>
                <Post>保存更改</Post>
            </div>
        )
    }
}
