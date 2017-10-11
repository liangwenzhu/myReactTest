//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Article from '../../baseGroup/EditorReadOnly/index'
import Operation from './Operation/index';
import Reply from '../replyItemReply/index';


export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
            isReplyShow:false
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
    postFn = ()=>{
        this.setState({
            isReplyShow:!this.state.isReplyShow
        })
    };
    render(){
        //条件渲染<Footer/>
        const {
        } = this.props;
        const {
            isReplyShow,

        } = this.state;
        return(
            <div className={style.init}>
                <img className={style.userHead} src={require('../../imgSource/45.png')}/>
                <div className={style.postContent}>
                    <div className={style.information}>
                        <p className={style.userName}>用户名字</p>
                        <span className={style.time}>5小时前</span>
                    </div>

                    <div className={style.article}>
                        <Article/>
                    </div>
                    <Operation postFn={this.postFn} isReplyShow={isReplyShow}/>
                    {isReplyShow ? <Reply/> : ''}
                </div>
            </div>
        )
    }
}
