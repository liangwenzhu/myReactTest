//input
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Ul from './option'
export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state={
            value:props.value,
            ifTipsShow:false
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
        ifOpenSearchTips:true, //是否打开"搜索提示"功能
        inputTips:'最小长度2个字符，最大长度8个字符',    //输入限制提示
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    showTips = () =>{
      this.setState({
          ifTipsShow:true
      })
    };
    unShowTips = () =>{
        this.setState({
            ifTipsShow:false
        })
    };
    handelChange = (e)=>{
        this.setState({
            value:e.target.value,
        })
    };
    getOptionVal = (obj)=>{
        this.setState({
            value:obj.name,
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
            ifOpenSearchTips,
        } = this.props;
        let optionData=[{"name":"中国"},{"name":"美国"}, {"name":"日本"}, {"name":"俄罗斯"}];
        let limitTips;
        //是否打开限制输入提示功能
        if(ifOpenTips){
            limitTips =
                <p className={style.p}>
                    {inputTips}
                    <span className={style.triangle}/>
                </p>;
        }
        let searchTips;
        if(ifOpenSearchTips) {
            searchTips = <Ul optionData={optionData} inputVal={this.state.value} getOptionVal={this.getOptionVal}/>;
        }
        return(
            <div className={style.init}>
                <input className = {style.input}
                       disabled = {disabled}
                       onBlur = {this.unShowTips}
                       onFocus = {this.showTips}
                       readOnly = {readOnly}
                       placeholder = {placeholder}
                       value = {this.state.value}
                       onChange = {this.handelChange}
                />
                {this.state.ifTipsShow ? searchTips : ''}
                {this.state.ifTipsShow ? limitTips : ''}
            </div>
        )
    }
}
