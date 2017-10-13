//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
/*
* @styleName 需要切换的样式名
* @label 按钮名字，有ICON的情况下为空
* @buttonClass 按钮样式，有ICON和没ICON的样式不一样
* */
export default class componentName extends Component{
    constructor(props){
        super(props);
        this.onClickFn = ()=>{
            this.props.onClickFn(this.props.styleName)
        }
    }
    static propTypes = {

    };
    static defaultProps = {
        value:'',
        label:'',
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        const {
            title,
            label,
            active,
            iconClassName,
        } = this.props;
        let classNames;
        if(active){
            classNames = 'editorActiveButton'
        }
        return(
            <span className={style.init + ' ' + classNames + ' ' + iconClassName}
                  title={title}
                  onClick =  {this.onClickFn}
            >
                {label}
            </span>
        )
    }
}
