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
            <footer className={style.init}>
                <div className={style.flex}>
                    <div className={style.bigone}>创建时间</div>
                    <div className={style.bigone}>最后回复</div>
                    <div className={style.smalloneDetail}>6</div>
                    <div className={style.smalloneDetail}>48</div>
                    <div className={style.smalloneDetail}>2</div>
                    <div className={style.smalloneDetail}>1</div>
                </div>
                <div className={style.flex}>
                    <div className={style.bigoneDetail}><img src={require('../../../imgSource/45.png')}/>5小时前</div>
                    <div className={style.bigoneDetail}><img src={require('../../../imgSource/45.png')}/>1小时前</div>
                    <div className={style.smallone}>回复</div>
                    <div className={style.smallone}>浏览</div>
                    <div className={style.smallone}>用户</div>
                    <div className={style.smallone}>链接</div>
                </div>
            </footer>
        )
    }
}
