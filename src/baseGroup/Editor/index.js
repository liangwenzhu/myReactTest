import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {
    convertFromRaw,
    convertToRaw,
    CompositeDecorator,
    ContentState,
    Editor,
    EditorState,
    Entity,
    RichUtils,
    getDefaultKeyBinding,
    KeyBindingUtil,
    Modifier
} from 'draft-js';

import Post from './Post/index';
import style from './css.css';

const colorStyle = [
    'black',
    'blue',
    'purple',
];
//样式映射
const colorStyleMap = {
    'black':{
        color:'#000'
    },
    'blue':{
        color: '#48baff'
    },
    'purple':{
        color: '#8f64e6'
    }
};

const styleMap = {
    'Restore':{
        textDecoration:'Restore'
    }
};
const styles = {
    root: {
        fontFamily: '\'Helvetica\', sans-serif',
        padding: 20,
        width: 600,
        borderWidth:1,
        border: '1px solid #ccc',
    },
    editor: {
        border: '1px solid #ccc',
        cursor: 'text',
        minHeight: 80,
        padding: 10,
    },
    button: {
        marginTop: 10,
        textAlign: 'center',
    },
    immutable: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: '2px 0',
    },
    mutable: {
        backgroundColor: 'rgba(204, 204, 255, 1.0)',
        padding: '2px 0',
    },
    restore: {
        backgroundColor: 'rgba(248, 222, 126, 1.0)',
        padding: '2px 0',
    },
};
// 获取样式
function getDecoratedStyle(mutability) {
    switch (mutability) {
        case 'IMMUTABLE':
            return styles.immutable;
        case 'MUTABLE':
            return styles.mutable;
        case 'Restore':
            return styles.restore;
        default:
            return null;
    }
}
// 绘制方法,组件
const TokenSpan = (props) => {

    // 获取样式
    const style = getDecoratedStyle(
        Entity.get(props.entityKey).getMutability()
    );
    return (
        <span {...props} style={style}>
            {props.children}
        </span>
    );
};
function getEntityStrategy(mutability) {
    return function (contentBlock, callback) {
        contentBlock.findEntityRanges(
            (character) => {
                const entityKey = character.getEntity();
                if (entityKey === null) {
                    return false;
                }
                return Entity.get(entityKey).getMutability() === mutability;
            },
            callback
        );
    };
}
const decorator = new CompositeDecorator([
    {
        // 查找方法
        strategy: getEntityStrategy('IMMUTABLE'),
        // 元素
        component: TokenSpan,
    },
    {
        strategy: getEntityStrategy('MUTABLE'),
        component: TokenSpan,
    },
    {
        strategy: getEntityStrategy('SEGMENTED'),
        component: TokenSpan,
    },
]);

export default class componentName extends Component{
    constructor(props){
        super(props);
        this.state = {
            editorState:EditorState.createEmpty()
        };
        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({editorState});
        this.toggle = (toggledColor) => this._toggleColor(toggledColor);
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
    storeHandle = ()=>{
        console.log(JSON.stringify(this.state.editorState))
    };
    _toggleColor = (toggledColor)=>{
        const {editorState} = this.state;
        // Object.keys(colorStyleMap) 获取所以颜色属性名数组
        // editorState.getCurrentContent()当前编辑器的内容对象。以这个为起点。
        //Modifier.removeInlineStyle(contentState,selection,color)
        //contentState 是 editorState.getCurrentContent()获取的当前编辑器的内容对象。
        //color 颜色名称，从Object.keys(colorStyleMap)的数组中获取。
        // Modifier.removeInlineStyle() 删除指定内联样式。
        //第二个参数selection 从editorState.getSelection()获取。当前光标选中的文字。
        // 整段的意思，去除选中文字中所有colorStyleMap带有的样式。
        const selection = editorState.getSelection();
        const nextContentState = Object.keys(colorStyleMap)
            .reduce((contentState,color)=>{
                return Modifier.removeInlineStyle(contentState,selection,color)
            },editorState.getCurrentContent());

        //EditorState.push 返回一个新的EditorState对象。 最开始对象是从draft.js中得到的。
        
        let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
        );

        const currentStyle = editorState.getCurrentInlineStyle();
        if (selection.isCollapsed()) {
            nextEditorState = currentStyle.reduce((state, color) => {
                return RichUtils.toggleInlineStyle(state, color);
            }, nextEditorState);
        }
        if (!currentStyle.has(toggledColor)) {
            nextEditorState = RichUtils.toggleInlineStyle(
                nextEditorState,
                toggledColor
            );
        }
        //把状态改变，映射
        this.onChange(nextEditorState);
    };
    //加粗
    Bold = ()=>{
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,'BOLD'));
    };
    //倾斜
    Italic = ()=>{
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,'ITALIC'));
    };
    //代码块
    Code = ()=>{
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,'CODE'));
    };
    //还原
    Restore = ()=>{
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,'Restore'));
    };
    //字体颜色
    Color =(color)=>{
        this.toggle(color)
    };
    render(){
        const {
            children
        } = this.props;
        let colorSpan = [];
        for(let colorName of colorStyle){
        colorSpan.push(
            <span onClick={()=>{this.Color(colorName)}} className={style.colors} title="字体颜色"><b className={style.color + ' ' + style[colorName]}/></span>
             );
        }
        return(
            <div className={style.init}>
                <div className={style.operate}>
                    <span onClick={this.Bold} title="加粗">B</span>
                    <span onClick={this.Italic} title="倾斜"><i>I</i></span>
                    <span onClick={this.Restore} title="还原">H</span>
                    <span title="引用">&quot;&nbsp;&quot;</span>
                    <span onClick={this.Code} title="代码块">&lt;/&gt;</span>
                    <span title="有序列表" className={"iconfont icon-other " + style.icon}/>
                    <span title="无序列表" className={"iconfont icon-other " + style.icon}/>
                    <span title="表情" className={"iconfont icon-emoji " + style.icon}/>
                    <span title="插入图片" className={"iconfont icon-picture " + style.icon}/>
                    {colorSpan}
                </div>
                <div className={style.editorRoot} onClick={this.focus}>
                    <Editor
                        editorState = {this.state.editorState}
                        onChange = {this.onChange}
                        customStyleMap = {colorStyleMap}
                        ref="editor"
                    >
                    </Editor>
                </div>
                <Post storeHandle={this.storeHandle}>保存</Post>
                {/*<button onClick = {this.storeHandle}>保存</button>*/}
            </div>
        )
    }
}
