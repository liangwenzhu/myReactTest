import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import style from './css.css';
import Aside from './aside/index'
import System from './system/index'
import Receive from './receive/index'
import Nothing from './nothing/index'
import UpVote from './upVote/index'
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
            children
        } = this.props;
        return(
            <div className={style.init}>
                <Aside/>
                {/*<System/>*/}
                {/*<Receive/>*/}
                <UpVote/>
            </div>
        )
    }
}
