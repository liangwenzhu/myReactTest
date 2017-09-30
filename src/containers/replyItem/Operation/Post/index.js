//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
export default class componentName extends Component{
    constructor(props){
        super(props)
    }
    static propTypes = {
    };
    static defaultProps = {
        children: '按钮',
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    handleClick = ()=>{
        this.props.postFn();
    };
    render(){
        const {
            children,
            active
        } = this.props;
        let activeClass ;
        active ? activeClass = style.activeClass : '';
        return(
            <button className = {style.init + ' ' + activeClass}
                    onClick = {this.handleClick}
            >{children}</button>
        )
    }
}
