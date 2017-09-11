import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import '../App.css';


class InboxChild extends Component{
    render(){
        return <h3>InboxChild{this.props.match.params.id}</h3>
    }
}
export default InboxChild;
