//icon
import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import './icon/style.css';
import style from './css.css';

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
            <span className={'fs1'}
                  data-icon="&#xe101;"
            />
        )
    }
}
