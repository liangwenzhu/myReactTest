import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Ul from './option'
export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state={
            value:this.props.value,
            middleValue:undefined,
            ifLimitTipsShow:false,
            ifTipsShow:false,
        }
    }
    static propTypes = {
        disabled:bool,
        handelChange:func
    };
    static defaultProps = {
        disabled: false,
        placeholder: '输入点什么..',
        readOnly:false, //只读属性
        ifOpenTips:false, //是否打开"输入限制提示"功能
        inputTips:'最小长度2个字符，最大长度8个字符',    //输入限制提示
    };
    componentWillMount(){

    }
    componentDidMount(){
        this.refs.videoUrlInput.focus();
    }
    componentWillUnmount(){

    }
    //验证成功时
    showLimitTips = ()=>{
        this.setState({
            ifLimitTipsShow:true
        })
    };
    unShowLimitTips = ()=>{
        this.setState({
            ifLimitTipsShow:false
        });
    };
    showSearchTips = () =>{
      this.setState({
          ifTipsShow:true
      })
    };
    unShowSearchTips = () =>{
        this.setState({
            ifTipsShow:false
        })
    };
    handelChange = (e)=>{
        this.setState({
            value:e.target.value,
        });
        this.props.onChangeFn(e.target.value);
    };
    getOptionVal = (obj)=>{
        this.setState({
            value:obj.name,
            ifTipsShow:false
        })
    };
    render(){
        const {
            disabled,
            className,
            placeholder,
            readOnly,
            ifOpenTips,
            inputTips,
        } = this.props;
        let limitTips;
        //是否打开限制输入提示功能
        if(ifOpenTips){
            limitTips =
                <p className={style.p}>
                    {inputTips}
                    <span className={style.triangle}/>
                </p>;
        }
        return(
            <div className={style.init}>
                <input className = {style.input}
                       disabled = {disabled}
                       onFocus = {this.showLimitTips}
                       onBlur = {this.unShowLimitTips}
                       onClick = {this.showSearchTips}
                       readOnly = {readOnly}
                       placeholder = {placeholder}
                       value = {this.state.value}
                       onChange = {this.handelChange}
                       ref="videoUrlInput"
                />
                {this.state.ifLimitTipsShow ? limitTips : ''}
            </div>
        )
    }
}
