//input
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
export default class componentName extends Component{
    constructor(props){
        super(props)
    }
    static propTypes = {
        disabled:bool,
        handelChange:func
    };
    static defaultProps = {
        disabled: false,
        placeholder: '输入点什么..',
        readOnly:'',
        value:'',
        handelChange:()=>{}
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
            className,
            handleClick,
            placeholder,
            readOnly,
            value,
            handelChange
        } = this.props;
        return(
            <input className={style.init}
                   disabled={disabled}
                   onClick={handleClick}
                   placeholder={placeholder}
                   readOnly={readOnly}
                   value={value}
                   onChange={handelChange}
            />
        )
    }
}
