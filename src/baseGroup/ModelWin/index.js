import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import animation from './animation.css';
import style from './css.css';
export default class componentName extends Component{
    constructor(props){
        super(props)
    }
    static propTypes = {
        title:string
    };
    static defaultProps = {
        title:"标题"
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    handleClick = ()=>{
        console.log('关闭事件')
    };
    render(){
        const {
            title
        } = this.props;
        return(
            <div className={style.init}>
                <div className={style.modelContent + ' ' + animation.modelShowOut} >
                    <div className={style.title}>
                        <p className={style.titleContent}>{title}</p>
                        <span className={"iconfont icon-close " + style.closeIcon} onClick={this.handleClick}/>
                    </div>
                    <div className={style.content}>
                        内容
                    </div>
                </div>
            </div>
        )
    }
}
