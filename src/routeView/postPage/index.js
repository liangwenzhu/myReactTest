//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import PostTitle from '../../containers/postTitle/index';
import PostItem from '../../containers/postItem/index';
import ReplyItem from '../../containers/replyItem/index';
import Editor from '../../baseGroup/Editor/index';
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

        } = this.props;
        return(
            <div>
                <PostTitle/>
                <div className={style.container}>
                    <PostItem/>
                    <ReplyItem/>
                    <ReplyItem/>
                    <div className={style.editor}>
                        <Editor buttonVal="提交评论"/>
                    </div>
                </div>
            </div>
        )
    }
}
