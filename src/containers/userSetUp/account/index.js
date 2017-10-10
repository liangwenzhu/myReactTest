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
                    <label className = {style.active}>用户名</label>
                    <p>liangwenz</p>
                </div>
                <div className = {style.item}>
                    <label className = {style.active}>昵称</label>
                    <p>
                        kitty
                        <span className = {"iconfont icon-editor " + style.edit}/>
                    </p>
                </div>
                <div className = {style.item}>
                    <label className = {style.active}>邮箱</label>
                    <p>
                        1252557331@qq.com
                        <span className = {"iconfont icon-editor " + style.edit}/>
                    </p>
                    <span className = {style.tips}>永不公开显示,仅自己可见</span>
                </div>
                <div className = {style.item}>
                    <label className = {style.active}>密码</label>
                    <PassWorldChange>
                        <span className = "iconfont icon-mail_fill"/>
                        发送密码重置邮件
                    </PassWorldChange>
                    <span className = {style.tips}>通过邮件进行密码修改</span>
                </div>
                <div className = {style.item}>
                    <label className = {style.active}>头像</label>
                    <img className = {style.userhead} src = {require('../../../imgSource/7736_1.png')}/>
                    <span className = {"iconfont icon-editor " + style.edit + ' ' + style.picEdit} />
                </div>
                <Post>保存更改</Post>
            </div>
        )
    }
}
