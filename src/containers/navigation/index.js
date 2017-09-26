//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
// import animation from '../../gobalCss/animation.css'
import Select from './Select/index'
import Latest from './Latest/index'
import Classify from './Classify/index'
import Post from './postBtn/index'
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
                <div>
                    <Select selectTips="所有分类"/>
                    <Latest>最新</Latest>
                    <Classify>分类</Classify>
                </div>
                <Post><span className="iconfont icon-add"/>发新主题</Post>
            </div>
        )
    }
}
