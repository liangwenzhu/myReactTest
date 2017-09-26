import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import { connect } from 'react-redux';
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
        handleClick:()=>{}
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    handleClick = ()=>{
        this.props.dispatch(
            {
                type: 'modelWinState',
                modelWinState:'login'
            }
        )
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

function select(state) {
    return {
        modelWin: state.modelWin,
        userName: state.userName

    };
}
export default connect(select)(componentName);