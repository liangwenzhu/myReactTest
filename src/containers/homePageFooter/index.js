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
                <p className = {style.p}>© 2001-2015 去领养 PETLY 备案：冀ICP备11010768号-4</p>
                <div className = {style.select}>
                    <div className = {style.item}>关于我们</div>
                    <div className = {style.item}>领养提示</div>
                    <div className = {style.item}>商务合作</div>
                    <div className = {style.item}>联系我们</div>
                </div>
            </div>
        )
    }
}
