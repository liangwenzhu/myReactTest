import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import { connect } from 'react-redux';


import style from './css.css';
class componentName extends Component{
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
        this.props.dispatch({
            type:'modelWinState',
            modelWinState:'reply'
        })
    };
    render(){
        const {
            children,
        } = this.props;
        return(
            <button className = {style.init}
                    onClick = {this.handleClick}
            >{children}</button>
        )
    }
}
function select(state){
    return{
        modelWin: state.modelWin,
    }
}
export default connect(select)(componentName);