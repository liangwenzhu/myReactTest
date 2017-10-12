//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import ButtonType from '../ButtonType/index';
// const BlockType = [
//     {key:'1',label: 'H', styleName: 'header-two',title:'小标题',iconClassName:''},
//     {key:'2',label: '“ ”', styleName: 'blockquote',title:'引用',iconClassName:''},
//     {key:'3',label: '</>', styleName: 'code-block',title:'代码块',iconClassName:''},
//     {key:'4',label: '', styleName: 'unordered-list-item',title:'有序列表',iconClassName:'iconfont icon-other editorButtonIcon'},
//     {key:'5',label: '', styleName: 'ordered-list-item',title:'无序列表',iconClassName:'iconfont icon-other editorButtonIcon'},
// ];

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
            editorState,
            BlockType
        } = this.props;
        let selection = editorState.getSelection();
        let blockStyle = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
        return(
            <div className={style.init}>
                {BlockType.map((obj)=>{
                    return <ButtonType
                        key={obj.key}
                        active = {blockStyle === obj.styleName}
                        title={obj.title}
                        label={obj.label}
                        iconClassName = {obj.iconClassName}
                        styleName={obj.styleName}
                        onToggle = {this.props.onToggle}
                    />
                })}
            </div>
        )
    }
}
