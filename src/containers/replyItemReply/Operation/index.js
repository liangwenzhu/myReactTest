//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Post from './Post/index';
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
                <ul className={style.ul}>
                    <li className={style.listType}><Post><span className={"iconfont icon-brush_fill " + style.post}/>回复(<span className={style.replyNum}>101</span>)</Post></li>
                </ul>
            </div>
        )
    }
}
