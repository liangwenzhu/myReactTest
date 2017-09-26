import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import { connect } from 'react-redux';
import animation from './animation.css';
import style from './css.css';
import Email from './Email/index';
import Sign from './Sign/index';
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
                            <label className={style.label}>邮箱：</label>
                            <Email/>
                            <span className={style.tips}>绝不公开显示</span>
                        </div>
                        <div className={style.item}>
                            <label className={style.label}>用户名：</label>
                            <Email/>
                            <span className={style.tips}>独一无二，没有空格，简洁易记</span>
                        </div>
                        <div className={style.item}>
                            <label className={style.label}>昵称：</label>
                            <Email/>
                            <span className={style.tips}>个性化</span>
                        </div>
                        <div className={style.item}>
                            <label className={style.label}>密码：</label>
                            <span className={style.tips}>简洁易记</span>
                            <Email/>
                        </div>
                    </div>
                    <footer className={style.footer}>
                        <div>
                            <Sign>创建新账户</Sign>
                            <Login>登陆</Login>
                        </div>
                        <p className={style.announce}>注册表示您同意<span className={style.announceSpan}>隐私策略</span>和<span className={style.announceSpan}>服务条款</span></p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default connect()(componentName);