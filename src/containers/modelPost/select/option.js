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
    handleClick = (obj,bool)=>{
        this.props.getOptionVal(obj);
    };
    handleMouseLeave = (bool)=>{
        this.props.getIfShow(bool);

    };
    render(){
        const {
            optionData
        } = this.props;
        return(
            <ul className={style.ul} onMouseLeave={()=>{this.handleMouseLeave(false)}}>
                {optionData.map((obj)=>(
                    <li className={style.li}
                        onClick={()=>{this.handleClick(obj)}}>
                        <span className={style.span}>{obj.name}</span>
                    </li>
                ))}
            </ul>
        )
    }
}
