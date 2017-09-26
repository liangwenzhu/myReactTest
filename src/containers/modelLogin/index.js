import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import { connect } from 'react-redux';
import animation from './animation.css';
import style from './css.css';
import User from './User/index';
import Email from './Email/index';

import Sign from './Sgin/index'
import Login  from './Login/index';
class componentName extends Component{
    constructor(props){
        super(props)
    }
    static propTypes = {
        title:string
    };
    static defaultProps = {
        title:"标题"
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    handleClick = ()=>{
        this.props.dispatch({
            type:'modelWinState',
            modelWinState:undefined
        })
    };
    loginClick = ()=>{

    };
    render(){
        const {
            title
        } = this.props;
        return(
            <div className={style.init + ' ' + animation.modelShowOut}>
                <div className={style.modelContent} >
                    <div className={style.title}>
                        <p className={style.titleContent}>{title}</p>
                        <span className={"iconfont icon-close " + style.closeIcon} onClick={this.handleClick}/>
                    </div>
                    <div className={style.content}>
                        <div className={style.item}>
                            <label className={style.label}>用户：</label>
                            <User/>
                            <span className={style.tips}>输入邮箱或者用户名</span>
                        </div>
                        <div className={style.item}>
                            <label className={style.label}>密码：</label>
                            <Email/>
                            <span className={style.forgetTips}><i className="iconfont icon-lights"/>忘记密码？戳这里</span>
                            <span className={style.tips}>输入您的密码</span>
                        </div>
                    </div>
                    <footer className={style.footer}>
                        <div>
                            <Login><span className={"iconfont icon-unlock_fill " + style.loginIcon}/>登陆</Login>
                            <Sign>注册</Sign>
                        </div>
                        <p className={style.announce}>注册表示您同意<span className={style.announceSpan}>隐私策略</span>和<span className={style.announceSpan}>服务条款</span></p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default connect()(componentName);