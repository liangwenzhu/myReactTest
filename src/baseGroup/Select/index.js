//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Ul from './option'
export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
            ifShow:false,
            selected:{
                name:props.selectTips
            }
        }
    }
    static propTypes = {

    };
    static defaultProps = {
        optionData:[],
        selectTips:'点击选择',
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    handleClick = ()=>{
        this.setState({
            ifShow : !this.state.ifShow,
        })
    };
    getIfShow = (bool)=>{
        this.setState({
            ifShow : bool,
        })
    };
    getOptionVal = (value)=>{
        this.setState({
            selected:value
        });
    };
    render(){
        let optionData=[{"name":"中国"},{"name":"美国"}, {"name":"日本"}, {"name":"俄罗斯"}];
        const {
            // optionData, //option的数据
            className,
            selectTips, //select的提示
        } = this.props;
        return(
            <div className={style.init} onFocus={()=>{this.getIfShow(true)}} onBlur={()=>{this.getIfShow(false)}}>
                <button className={style.select}  placeholder="select" >{this.state.selected.name}</button>
                <span className={style.selectIcon} onClick={this.handleClick}>icon</span>
                {this.state.ifShow ? <Ul getOptionVal = {this.getOptionVal} getIfShow = {this.getIfShow} optionData={optionData}/> : ''}
            </div>
        )
    }
}
