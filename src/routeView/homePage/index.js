import React, {findDOMNode, Component} from 'react';
import { string, object, number, array, bool, func, symbol } from 'prop-types';
import Swiper from '../../containers/homePageSwiper/index'
import Welcome from '../../containers/homePageWelcome/index'
import Recommend from '../../containers/homePageRecommend/index'
import Review from '../../containers/homePageReviewContainer/index'
import Footer from '../../containers/homePageFooter/index'
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
            <div className = {style.init}>
                <div className = {style.header}>
                    <Swiper/>
                    <Welcome/>
                </div>
                <Recommend/>
                <Review/>
                <Footer/>
            </div>
        )
    }
}
