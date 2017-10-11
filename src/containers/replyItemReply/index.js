//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Article from '../../baseGroup/EditorReadOnly/index'
import Operation from './Operation/index';
import Editor from '../../baseGroup/EditorSimple/index'
import ReplyBtn from './replyBtn/index'
export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
            ifEditorShow:false,
            replyName:'未知用户'
        }
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
    ifEditorShow = (name)=>{
        if(this.state.replyName!==name){
            this.setState({
                ifEditorShow:true,
                replyName:name
            })
        }else{
            this.setState({
                ifEditorShow : !this.state.ifEditorShow,
                replyName:name
            })
        }
    };
    render(){
        const {
        } = this.props;
        return(
            <div className = {style.init}>
                <div className={style.item}>
                    <img className={style.userHead} src={require('../../imgSource/45.png')}/>
                    <div className={style.postContent}>
                        <div className={style.information}>
                            <p className={style.userName}>用户名字</p>
                            <span className={style.time}>5小时前</span>
                        </div>
                        <div className={style.article}>
                            <Article/>
                        </div>
                        <Operation handleClick = {()=>{this.ifEditorShow('楼中楼用户')}}/>
                    </div>
                </div>
                <div className={style.replyBtn}>
                    {this.state.ifEditorShow ?
                        <span>回复<a>{this.state.replyName}</a>：</span>
                        :
                        <span> </span>
                    }
                    <ReplyBtn handleClick = {()=>{this.ifEditorShow('层主')}}>我也说一句</ReplyBtn>
                </div>
                {this.state.ifEditorShow
                    ?
                    <div className = {style.editor}><Editor ifFocus={true}/></div>
                    :
                    ''}
            </div>
        )
    }
}
