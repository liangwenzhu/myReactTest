import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';

import ButtonInsertType from '../ButtonInsertType/index';
import ImgUrlInput from './ImgUrlInput/index'
import VideoUrlInput from './VideoUrlInput/index'
import Post from './Button/index'

export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
            urlType : undefined
        }
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
    onChangeFn = (val)=>{
        this.props.getUrl(val,this.state.urlType);
    };
    onClickFn = ()=>{
        this.props.urlPost();
    };
    onShowUrlInput = (urlType)=>{
        if(urlType!==this.state.urlType){
            this.setState({
                urlType:urlType
            })
        }else{
            this.setState({
                urlType:undefined
            })
        }

    };
    render(){
        const {
            editorState,
            BlockType
        } = this.props;

        let urlInput;
        switch(this.state.urlType){
            case "image":
                urlInput =
                    <div>
                        <ImgUrlInput  onChangeFn = {this.onChangeFn} ifOpenTips = {true} inputTips = "键入可访问图片的URL" placeholder = "图片的url..."/>
                        <Post onClickFn = {this.onClickFn} >上传</Post>
                     </div>;
                        break;
            case "video":
                urlInput =
                    <div>
                        <VideoUrlInput onChangeFn = {this.onChangeFn} ifOpenTips = {true} inputTips = "键入可访问视频的URL" placeholder = "视频的url..."/>
                        <Post onClickFn = {this.onClickFn} >上传</Post>
                    </div>;
                break;
           default:
               urlInput = undefined
        }
        return(
            <div className={style.init}>
                {BlockType.map((obj)=>{
                    return <ButtonInsertType
                        key={obj.key}
                        title={obj.title}
                        // label={obj.label}
                        iconClassName = {obj.iconClassName}
                        styleName={obj.styleName}
                        onClickFn = {()=>{this.onShowUrlInput(obj.label)}}
                    />
                })}
                {urlInput}
            </div>
        )
    }
}
