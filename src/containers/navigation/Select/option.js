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

    }
    componentWillUnmount(){

    }
    handleClick = (bool)=>{
        this.props.getIfShow(bool);
    };
    handleMouseMove = (obj)=>{
        this.props.getOptionVal(obj)
    };
    render(){
        const {
            optionData
        } = this.props;
        return(
            <ul className={style.ul}>
                <li className={style.liAll}><span className={style.span}>所有分类</span></li>
                {optionData.map((obj)=>(
                        <li className={style.li} onMouseMove={()=>{this.handleMouseMove(obj)}} onClick={()=>{this.handleClick(false)}}><span className={style.categoryColor}/><span className={style.span}>{obj.name}</span></li>
                ))}
            </ul>
        )
    }
}
