//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
export default class componentName extends Component{
    constructor(props){
        super(props)
    }
    static propTypes = {
        disabled:bool,
        handleClick:func
    };
    static defaultProps = {
        disabled: false,
        children: '按钮',
        handleClick:()=>{}
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        const {
            disabled,
            children,
            handleClick
        } = this.props;
        return(
            <button className={style.init}
                    disabled={disabled}
                    onClick={handleClick}
            >{children}</button>
        )
    }
}
