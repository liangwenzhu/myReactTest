import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, boolean } from 'prop-types';
export default class componentName extends Component{
    constructor(props){
        super(props)
    }
    static propTypes = {
        // title: string
    };
    static defaultProps = {
        title: 'title value'
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        const {
            title
        } = this.props;
        return(
            <p>{title}</p>
        )
    }
}
