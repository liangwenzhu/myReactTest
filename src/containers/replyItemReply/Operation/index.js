//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';

// import Editor from '../../../baseGroup/EditorSimple/index'
import Post from './Post/index';

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
    handleClick = ()=>{
      this.props.handleClick();
    };
    render(){
        const {
            children
        } = this.props;
        return(
            <div className={style.init}>
                <ul className={style.ul}>
                    <li className={style.listType}><Post handleClick = {this.handleClick}><span className={style.post}/>回复</Post></li>
                </ul>
            </div>
        )
    }
}
