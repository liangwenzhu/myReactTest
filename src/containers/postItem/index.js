//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Article from '../../baseGroup/EditorReadOnly/index'
import Footer from './Footer/index';
import Operation from './Operation/index';
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
        } = this.props;
        let contentState = {"entityMap":{},"blocks":[{"key":"4t8sh","text":"如果一个人可以忘记所有","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"80vus","text":"那他的每一天","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"49f2t","text":"都是一个新的开始","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d9unu","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a7kpg","text":"当你不再拥有时","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5m8m9","text":"你唯一可做的","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ejjhp","text":"就是不要忘记","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
        return(
            <div className={style.init}>
                <img className={style.userHead} src={require('../../imgSource/45.png')}/>
                <div className={style.postContent}>
                    <div className={style.information}>
                        <p className={style.userName}>用户名字</p>
                        <span className={style.time}>5小时前</span>
                    </div>
                    <div className={style.article}>
                        <Article contentState = {contentState}/>
                    </div>
                    <div>
                        <Operation/>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
