//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import ButtonType from '../ButtonType/index';
// const InlineType = [
//     {key:1,label:'B',styleName:'Bold',title:'加粗',iconClassName:''},
//     {key:2,label:'I',styleName:'Italic',title:'斜体',iconClassName:''},
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
            InlineType
        } = this.props;
        const inlineType = editorState.getCurrentInlineStyle();
        return(
            <div className={style.init}>
                {InlineType.map((obj)=>{
                    return <ButtonType
                        key={obj.key}
                        active={inlineType.has(obj.styleName)}
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
