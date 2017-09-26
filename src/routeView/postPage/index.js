//button
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import PostTitle from '../../containers/postTitle/index';
import PostItem from '../../containers/postItem/index';
import Editor from '../../baseGroup/Editor/index';

import style from './css.css';

let a = [1,2,3,4];
let b = a.reduce((a,b)=>{
    return a+b;
},9);

// alert(b);

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
                <PostItem/>
                <Editor/>
            </div>
        )
    }
}
