import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import style from './css.css';
import Aside from './aside/index'
import Account from './account/index'
import Decorate from './decorate/index'
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
                    <Route exact path="/user/setup" component={Account}/>
                    <Route exact path="/user/setup/decorate" component={Decorate}/>
                </Switch>
            </div>
        )
    }
}
