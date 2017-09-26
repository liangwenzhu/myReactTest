//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import { connect } from 'react-redux';
import style from './css.css';
class componentName extends Component{
    constructor(props){
        super(props)
    }
    static propTypes = {
        disabled:bool,
    };
    static defaultProps = {
        disabled: false,
        children: '按钮',
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    handleClick = ()=>{
        this.props.dispatch({
            type: 'modelWinState',
            modelWinState:'sign'
        })
    };
    render(){
        const {
            disabled,
            children,
        } = this.props;
        return(
            <button className={style.init}
                    disabled={disabled}
                    onClick={this.handleClick}
            >{children}</button>
        )
    }
}
export default connect()(componentName);