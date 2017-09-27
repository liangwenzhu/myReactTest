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

//颜色
const colorStyle = [
    {label:'黑色',style:'black',title:'黑色字体'},
    {label:'蓝色',style:'blue',title:'蓝色字体'},
    {label:'紫色',style:'purple',title:'紫色字体'},
];
//行样式
const inlineStyle = [
    {label:'B',style:'bold',title:'加粗'},
    {label:'I',style:'italic',title:'斜体'},
];
//块样式
const blockStyle = [
    {label:'H',style:'subhead',title:'小标题'},
    {label:'" "',style:'cite',title:'引用'},
    {label:'</>',style:'code',title:'代码块'},
    {label:'序',style:'ul',title:'有序列表'},
    {label:'表',style:'ol',title:'无序列表'},
];
//样式映射
const editorStyleMap = {
    //颜色
    'black':{
        color:'#000'
    },
    'blue':{
        color: '#48baff'
    },
    'purple':{
        color: '#8f64e6'
    },
    //行
    'bold':{
        fontWeight: '600',
    },
    'italic':{
        fontStyle: 'italic',
    },
    //块
    'subhead':{
        display:'block',
        fontSize:'18px;',
        fontWeight:'600'
    },
    'cite':{
        display:'block',
        borderLeft: '5px solid #eee',
        color: '#666',
        // fontStyle: italic;
        margin: '16px 0',
        padding: '10px 20px'
    },
    'code':{
        width: '61.8%',
        display: 'block',
        color: '#880000',
        backgroundColor: '#f9f9f9',
        fontSize:'13px',
        margin: '16px 0',
        padding: '10px 20px'
    },
    'ul':{

    },
    'ol':{

    },
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
        this.toggle = (inlineStyle) => this._toggleColor(inlineStyle);
        this.toggleInlineStyle = (inlineStyle) => this._toggleInlineStyle(inlineStyle);
        this.toggleBlockType = (blockStyle) => this._toggleBlockType(blockStyle);
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
    //颜色切换
    _toggleColor = (styleObj)=>{
        const {editorState} = this.state;
        // Object.keys(editorStyleMap) 获取所以颜色属性名数组
        // editorState.getCurrentContent()当前编辑器的内容对象。以这个为起点。
        //Modifier.removeInlineStyle(contentState,selection,color)
        //contentState 是 editorState.getCurrentContent()获取的当前编辑器的内容对象。
        //color 颜色名称，从Object.keys(editorStyleMap)的数组中获取。
        // Modifier.removeInlineStyle() 删除指定内联样式。
        //第二个参数selection 从editorState.getSelection()获取。当前光标选中的文字。
        // 整段的意思，去除选中文字中所有editorStyleMap带有的样式，并返回整段文本的内容。
        const selection = editorState.getSelection();

        const nextContentState = colorStyle.reduce((contentState,styleObj)=>{
                return Modifier.removeInlineStyle(contentState,selection,styleObj.style)
            },editorState.getCurrentContent());

        //EditorState.push 返回一个新的editorState对象。 最开始对象是从draft.js中得到的。需要两个必要参数
        //第一个参数，editorState: 更改前的editorState
        //第二个参数，nextContentState, 已经经过编辑的文本内容
        //第三个参数，未知
        let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
        );
        //返回现在editorState下的行内样式。
        const currentStyle = editorState.getCurrentInlineStyle();
        //isCollapsed 当前是否有被选择。没选中为true，(鼠标光标起始位置和结束位置是否为同一个位置)
        //如果为true,也就是没选中的状态下在新的editorState中去除颜色行样式
        //也就是没选中的状态下，把之前改变的都撤销。意思是上面那些代码都白跑了？

        if (selection.isCollapsed()) {
            nextEditorState = currentStyle.reduce((state, styleClass) => {
                return RichUtils.toggleInlineStyle(state, styleClass.style);
            }, nextEditorState);
        }
        //现在的行样式内是否已经存在了被选中的样式“toggledColor”
        //没有。加上去,此时
        //有。跳过（由于前面将所有的颜色都去除。因此现在的editorState是没有颜色style的）。
        if (!currentStyle.has(styleObj)) {
            nextEditorState = RichUtils.toggleInlineStyle(
                nextEditorState,
                styleObj
            );
        }
        //把状态改变，映射
        this.onChange(nextEditorState);
    };
    //行格式
    _toggleInlineStyle = (inlineStyle)=>{
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        )
    };
    //块格式
    _toggleBlockType = (blockStyle)=>{
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockStyle
            )
        )
    };
    //字体颜色
    Color =(styleName)=>{
        this.toggle(styleName)
    };
    Inline = (inlineStyle)=>{
        this.toggleInlineStyle(inlineStyle);
    };
    Block = (blockStyle)=>{
        this.toggleBlockType(blockStyle)
    };
    render(){
        const {
            children
        } = this.props;
        let colorStyleSpan = [];
        let inlineSpan = [];
        let blockSpan = [];
        //颜色格式
        for(let obj of colorStyle){
            colorStyleSpan.push(
                <span onClick={()=>{this.Color(obj.style)}} className={style.colors} title={obj.title}><b className={style.color + ' ' + style[obj.style]}/></span>
                 );
        }
        //行格式
        for(let obj of inlineStyle){
            inlineSpan.push(
                <span onClick={()=>{this.Inline(obj.style)}} title={obj.title}>{obj.label}</span>
            )
        }
        //块格式
        for(let obj of blockStyle){
            blockSpan.push(
                <span onClick={()=>{this.Inline(obj.style)}} title={obj.title}>{obj.label}</span>
            )
        }
        return(
            <div className={style.init}>
                <div className={style.operate}>
                    {inlineSpan}
                    {/*<span onClick = {()=>{this.Color('fontStyle','bold')}} title="加粗">B</span>*/}
                    {/*<span onClick={this.Italic} title="倾斜"><i>I</i></span>*/}
                    {blockSpan}
                    <span onClick={this.Restore} title="小标题">H</span>
                    <span title="引用">&quot;&nbsp;&quot;</span>
                    <span onClick={this.Code} title="代码块">&lt;/&gt;</span>
                    <span title="有序列表" className={"iconfont icon-other " + style.icon}/>
                    <span title="无序列表" className={"iconfont icon-other " + style.icon}/>
                    <span title="表情" className={"iconfont icon-emoji " + style.icon}/>
                    <span title="插入图片" className={"iconfont icon-picture " + style.icon}/>
                    {colorStyleSpan}
                </div>
                <div className={style.editorRoot} onClick={this.focus}>
                    <Editor
                        editorState = {this.state.editorState}
                        onChange = {this.onChange}
                        customStyleMap = {editorStyleMap}
                        ref="editor"
                    >
                    </Editor>
                </div>
                <Post storeHandle={this.storeHandle}>保存</Post>
            </div>
        )
    }
}

class colorType extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>1</div>
        )
    }
}