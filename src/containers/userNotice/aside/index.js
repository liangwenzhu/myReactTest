//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Ignore from './ignore/index'
export default class componentName extends Component{
    constructor(props){
        super(props)
    }
    static propTypes = {

    };
    static defaultProps = {

    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        const {
            children
        } = this.props;
        return(
            <div className={style.init}>
                <p className = {style.active + ' ' + style.list}>系统通知</p>
                <p className = {style.list}>回应</p>
                <p className = {style.list}>获得赞</p>
                <Ignore><span className = "iconfont icon-empty_fill"/>忽略全部</Ignore>
            </div>
        )
    }
}
