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
                <div className = {style.item}>
                    <div className = {style.flex}>
                        <div>
                            <img className = {style.userHead} src={require('../../../imgSource/7736_1.png')}/>
                            <div className = {style.title}>
                                <a>Liang</a>
                                你在主题
                                <a>啊啊啊我是一个主题</a>
                                中 <span className= {"iconfont icon-like_fill " + style.icon}/> 了
                                <a>zhu</a>
                            </div>
                        </div>
                        <div className = {style.time}>30天前</div>
                    </div>
                </div>
            </div>
        )
    }
}
