//button
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
} from 'draft-js';
let ReactDOM = require('react-dom');

// 样式
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
    segmented: {
        backgroundColor: 'rgba(248, 222, 126, 1.0)',
        padding: '2px 0',
    },
};

const {hasCommandModifier} = KeyBindingUtil;

//处理快捷键
function myKeyBindingFn(e) {
    if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
        return 'myeditor-save';
    }
    return getDefaultKeyBinding(e);
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

// 获取样式
function getDecoratedStyle(mutability) {
    switch (mutability) {
        case 'IMMUTABLE':
            return styles.immutable;
        case 'MUTABLE':
            return styles.mutable;
        case 'SEGMENTED':
            return styles.segmented;
        default:
            return null;
    }
}

// 原始 初始化诗句
const rawContent = {
    blocks: [
        {
            text: (
                'This is an "immutable" entity: Superman. Deleting any ' +
                'characters will delete the entire entity. Adding characters ' +
                'will remove the entity from the range.'
            ),
            type: 'unstyled',
            // 范围
            entityRanges: [{offset: 32, length: 8, key: 'first'}],
        },
        {
            text: '',
            type: 'unstyled',
        },
        {
            text: (
                'This is a "mutable" entity: Batan. Characters may be added ' +
                'and removed.'
            ),
            type: 'unstyled',
            entityRanges: [{offset: 28, length: 6, key: 'second'}],
        },
        {
            text: '',
            type: 'unstyled',
        },
        {
            text: (
                'This is a "segmented" entity: Green Lantern. Deleting any ' +
                'characters will delete the current "segment" from the range. ' +
                'Adding characters will remove the entire entity from the range.'
            ),
            type: 'unstyled',
            entityRanges: [{offset: 30, length: 13, key: 'third'}],
        },
        {
            text:(
                '梁文柱'
            ),
            type:'unstyled',
            entityRanges:[{
                offset:0,
                length:2,
                key:'four'
            }]
        }
    ],
    entityMap: {
        first: {
            type: 'TOKEN',
            mutability: 'IMMUTABLE',
        },
        second: {
            type: 'TOKEN',
            mutability: 'MUTABLE',
        },
        third: {
            type: 'TOKEN',
            mutability: 'SEGMENTED',
        },
        four: {
            type: 'TOKEN',
            mutability: 'SEGMENTED',
        },
    },
};


class MyEditor extends React.Component {
    constructor(props) {
        super(props);

        this.focus = () => this.refs.editor.focus();

        // 解码器
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

        // 初始化内容
        const blocks = convertFromRaw(rawContent);
        this.state = {
            editorState: EditorState.createWithContent(blocks, decorator),
        };
        this.onChange = (editorState) => this.setState({editorState});
    }
    overSolid = ()=>{
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    };
    handleKeyCommand = (command) =>{
        if (command === 'myeditor-save') {
            // Perform a request to save your contents, set
            // a new `editorState`, etc.
            //在这里进行具体快捷键的处理
            return 'handled';
        }
        return 'not-handled';
    };
    render() {
        return (
            <div style={styles.root}>
            <button onClick={this.overSolid}>加粗</button>
            <div onClick={this.focus}>
                <Editor
                    editorState={this.state.editorState}
                    readOnly = {false}
                    ref="editor"
                    onChange={this.onChange}
                    keyBindingFn={myKeyBindingFn}
                    handleKeyCommand={this.handleKeyCommand}
                />
            </div>
        </div>);
    }
}
export default  MyEditor;