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
    Modifier
} from 'draft-js';
import Immutable from 'immutable';
import InlineStyle from './InlineStyleControl/index';
import BlockStyle from './BlockStyleControl/index';
import ColorStyle from './InlineStyleControl/index';
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
//扩展块元素
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);
// 绘制方法,组件

export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
            editorState:EditorState.createEmpty()
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
                    {/*<span title="插入图片" className={"iconfont icon-picture " + style.icon}/>*/}
                </div>
                <div className={style.editorRoot} onClick={this.focus}>
                    <Editor
                        customStyleMap = {editorStyleMap}
                        blockRenderMap={extendedBlockRenderMap}
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