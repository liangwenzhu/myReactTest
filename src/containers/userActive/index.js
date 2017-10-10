import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import style from './css.css';
import Aside from './aside/index'
import Topic from './topic/index'
import Reply from './reply/index'
import UpVote from './upVote/index'
import Collect from './collect/index'
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
                <Switch>
                    <Route exact path="/user/active" component={Topic}/>
                    <Route exact path="/user/active/reply" component={Reply}/>
                    <Route exact path="/user/active/upVote" component={UpVote}/>
                    <Route exact path="/user/active/collect" component={Collect}/>
                </Switch>
            </div>
        )
    }
}
