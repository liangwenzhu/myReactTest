import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';


class HasNotlogin extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
           <p>{this.props.children}</p>
        )
    }
}
export default HasNotlogin;
