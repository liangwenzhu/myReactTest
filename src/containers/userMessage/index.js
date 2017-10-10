import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import {BrowserRouter as Router, Route, NavLink, Switch, NavNavLink } from 'react-router-dom';
import style from './css.css';
import Aside from './aside/index'
import Send from './send/index'
import Receive from './receive/index'
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
                    <Switch>
                        <Route exact path="/user/message" component={Receive}/>
                        <Route exact path="/user/message/send" component={Send}/>
                    </Switch>
                </Switch>
            </div>
        )
    }
}
