import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import { connect } from 'react-redux';
import animation from './animation.css';
import style from './css.css';
import Title from './title/index'
import Select from './select/index'
import Post from './post/index'
import Editor from '../../baseGroup/Editor/index'
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
                            <Title ifOpenTips={true} placeholder = "主题标题" inputTips = "输入你即将发表主题的标题，30字符以内。"/>
                            <Select/>
                        </div>
                        <div className={style.item}>
                            <div className = {style.editor}>
                                <Editor buttonVal="发表主题"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(componentName);