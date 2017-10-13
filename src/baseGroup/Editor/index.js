import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {
    convertFromRaw,
    convertToRaw,
    CompositeDecorator,
    DefaultDraftBlockRenderMap,
    ContentState,
    Editor,
    EditorState,
    Entity,
    RichUtils,
    getDefaultKeyBinding,
    KeyBindingUtil,
    Modifier,
    AtomicBlockUtils
} from 'draft-js';
import Immutable from 'immutable';

import InlineStyle from './InlineStyleControl/index';
import BlockStyle from './BlockStyleControl/index';
import ColorStyle from './InlineStyleControl/index';
import MediaStyle from './MediaStyleControl/index';
import Post from './Post/index';
import style from './css.css';

//块按钮
const BlockType = [
    // {key:1,label: 'H', styleName: 'section',title:'小标题',iconClassName:''},
    {key:1,label: 'H', styleName: 'header-two',title:'小标题',iconClassName:''},
    {key:2,label: '“ ”', styleName: 'blockquote',title:'引用',iconClassName:''},
    {key:3,label: '</>', styleName: 'code-block',title:'代码块',iconClassName:''},
    {key:4,label: '', styleName: 'unordered-list-item',title:'有序列表',iconClassName:'iconfont icon-other editorButtonIcon'},
    {key:5,label: '', styleName: 'ordered-list-item',title:'无序列表',iconClassName:'iconfont icon-other editorButtonIcon'},
];
// 行按钮
const InlineType = [
    {key:1,label:'B',styleName:'Bold',title:'加粗',iconClassName:''},
    {key:2,label:'I',styleName:'Italic',title:'斜体',iconClassName:''},
];

//颜色按钮
const ColorType = [
    {key:1,label:'',styleName:'Black',title:'黑色字体',iconClassName:'editorButtonColorBlack'},
    {key:2,label:'',styleName:'Blue',title:'蓝色字体',iconClassName:'editorButtonColorBlue'},
    {key:3,label:'',styleName:'Purple',title:'紫色字体',iconClassName:'editorButtonColorPurple'},
];
//多媒体插入按钮
const MediaType = [
    {key:1,label: 'image', styleName: '',title:'插入配图',iconClassName:'iconfont icon-picture editorButtonIcon'},
    {key:2,label: 'video', styleName: '',title:'插入小视频',iconClassName:'iconfont icon-video editorButtonIcon'},
];
//行样式映射
const editorStyleMap = {
    //颜色
    Black:{
        color:'#000'
    },
    Blue:{
        color: '#48baff'
    },
    Purple:{
        color: '#8f64e6'
    },
    //字体
    Bold:{
        fontWeight: '600',
    },
    Italic:{
        fontStyle: 'italic',
    },
};

const blockRenderMap = Immutable.Map({
    'section': {
        element: 'section'
    },
});

//扩展块组件
function mediaBlockRenderer(block) {
    if (block.getType() === 'atomic') {
        return {
            component: Media,
            editable: false,
        };
    }

    return null;
}
const Audio = (props) => {
    return <audio controls src={props.src} style={styles.media} />;
};

const Image = (props) => {
    return <img src={props.src} style={styles.media} />;
};

const Video = (props) => {
    return <video controls src={props.src} style={styles.media} />;
};

const Media = (props) => {
    const entity = props.contentState.getEntity(
        props.block.getEntityAt(0)
    );
    const {src} = entity.getData();
    const type = entity.getType();

    let media;
    if (type === 'audio') {
        media = <Audio src={src} />;
    } else if (type === 'image') {
        media = <Image src={src} />;
    } else if (type === 'video') {
        media = <Video src={src} />;
    }

    return media;
};

//扩展块元素
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);
// 绘制方法,组件

export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
            editorState:EditorState.createEmpty(),
            urlValue:'',
            urlType:''
        };
        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({editorState});
    }
    static propTypes = {

    };
    static defaultProps = {
        buttonVal:'按钮'
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }

    storeHandle = ()=>{
        const content = this.state.editorState.getCurrentContent();
        console.log(JSON.stringify(convertToRaw(content)))
    };
    //行格式
    _toggleInlineStyle = (inlineStyle)=>{
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    };
    //块格式
    _toggleBlockType = (blockType)=>{
        this.onChange(
            RichUtils.toggleBlockType (
                this.state.editorState,
                blockType
            )
        );
    };

    _mediaBlockType = ()=>{
        const {editorState, urlValue, urlType} = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            urlType,
            'IMMUTABLE',
            {src: urlValue}
        );
        // alert(urlValue);
        // 'https://pic3.zhimg.com/1578ef5a2_m.jpg'
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(
            editorState,
            {currentContent: contentStateWithEntity}
        );
        //更新
        this.setState({
            editorState: AtomicBlockUtils.insertAtomicBlock(
                newEditorState,
                entityKey,
                ' '
            ),
            // showURLInput: false,
            urlValue: '',
        }, () => {
            setTimeout(() => this.focus(), 0);
        });
    };

    //urlGet
    URLGet = (val,urlType)=>{
        this.setState({
            urlValue:val,
            urlType:urlType
        });
    };
    render(){
        const {editorState} = this.state;
        const {

        } = this.props;
        return(
            <div className={style.init}>
                <div className={style.operate}>
                    <InlineStyle editorState={editorState} onToggle={this._toggleInlineStyle} InlineType = {InlineType}/>
                    <BlockStyle editorState={editorState} onToggle={this._toggleBlockType} BlockType = {BlockType}/>
                    <ColorStyle editorState={editorState} onToggle={this._toggleInlineStyle} InlineType = {ColorType}/>
                    {/*<span title="表情" className={"iconfont icon-emoji " + style.icon}/>*/}
                    <MediaStyle editorState={editorState} getUrl={this.URLGet} urlPost = {this._mediaBlockType} onClickFn={this._mediaBlockType} BlockType = {MediaType}/>
                </div>
                <div className={style.editorRoot} onClick={this.focus}>
                    <Editor
                        customStyleMap = {editorStyleMap}
                        blockRendererFn={mediaBlockRenderer}
                        // blockRenderMap={extendedBlockRenderMap}
                        editorState={editorState}
                        onChange = {this.onChange}
                        blockStyleFn={getBlockStyle}
                        ref="editor"
                    >
                    </Editor>
                </div>
                <Post storeHandle={this.storeHandle}>{}{this.props.buttonVal}</Post>
            </div>
        )
    }
}

function getBlockStyle(blockName){
    switch(blockName.getType()){
        case 'blockquote' :
            return 'RichEditor-blockquote';
        case 'code-block' :
            return 'RichEditor-code-block';
        // case 'section' :
        //     return 'RichEditor-section';
        default:
            return null;
    }
}
const styles = {
    media: {
        width: '120px',
        height: '75px',
        // Fix an issue with Firefox rendering video controls
        // with 'pre-wrap' white-space
        whiteSpace: 'initial'
    },
};