import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import '../App.css';

class Inbox extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/inbox/react/:2">使用 React 渲染</Link></li>
                    <li> <Link to="/inbox//components">组件</Link></li>
                </ul>
            </div>
        )
    }
}
export default Inbox;
