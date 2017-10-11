//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    static propTypes = {
        getIfShow:func,
        getOptionVal:func,
        optionData:array
    };
    static defaultProps = {
        getIfShow : ()=>{},
        getOptionVal : ()=>{}
    };
    componentWillMount(){

    }
    componentDidMount(){
        this.refs.myUl.onmousemove = ()=>{
            this.handleMouseMove();
        };
        this.refs.myUl.onmouseout = ()=>{
            this.handleMouseOut();
        }
    }
    componentWillUnmount(){

    }
    handleClick = (obj)=>{
        this.props.getOptionVal(obj)
    };
    handleMouseOut = ()=>{
        this.props.unShowTips()
    };
    handleMouseMove = ()=>{
        this.props.showTips()
    };
    render(){
        const {
            inputVal,
            optionData
        } = this.props;
        let data = [];
        for(let i of optionData){
            if(i.name.includes(inputVal)){
                data.push(i);
            }
        }
        return(
            <ul className={style.ul} ref="myUl">
                {data.map((obj)=>(
                    <li className={style.li} onClick={()=>{this.handleClick(obj)}}><span className={style.span}>{obj.name}</span></li>
                ))}
            </ul>
        )
    }
}
